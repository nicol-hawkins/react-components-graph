
import React, { Component } from 'react';
import './App.css';

import SelectYear from './components/SelectYear/SelectYear.js';
import Buttons from './components/Buttons/Buttons.js';
import BarChart from './components/BarChart/BarChart.js';
import TitleBar from './components/TitleBar/TitleBar.js';
import RemoveButton from './components/RemoveButton/RemoveButton.js';

console.log('4_react_components')


class App extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      year: '2016',
      counter: 0,
      data:[],
      chosenCountries: [],
      availableCountries: [],
    };
};

  //fetch the data
  componentDidMount() {
    fetch('./data2.json')
    .then(response => response.json())
    .then((result, value) => {
        console.log("Object.values(result):",Object.values(result))
        this.setState({
          data: result,
          year: '2016',  
          availableCountries: result,
        });
        console.log('Total Available countries: ', result[this.state.year] );
        console.log('Object Keys: ', Object.keys(result));
        console.log('Chosen countries: ', result[value] )       
      },
    )
  }

onUpdateYear = (ev) => {
  let year = ev.target.value;
    this.setState({
        year: year,
        },
        () => console.log('Year Chosen: ',this.state.year, 'Available countries: ', this.state.data[this.state.year]))
    }



  onChooseCountry = (info, index) => {
    const chosenCountries = this.state.chosenCountries.slice();
    const availableCountries = this.state.data[this.state.year].slice();
    const chosenCountry = availableCountries[index];

    chosenCountries.push(chosenCountry);
    availableCountries.splice(index, 1)

    chosenCountries.sort((a, b) => (a.label > b.label) ? 1 : -1);

    console.log('Year: ', this.state.year, 'Chosen countries: ', this.state.chosenCountries)

    this.setState ({
      chosenCountries: chosenCountries,
      availableCountries: availableCountries,
      counter: this.state.counter + 1,
    });

  };
  
  
  removeCountry = (index) => {
    const chosenCountries = this.state.chosenCountries.slice();
    const availableCountries = this.state.availableCountries.slice();
    
    const chosenCountry = chosenCountries[index];

    availableCountries.push(chosenCountry);
    chosenCountries.splice(index, 1);

    availableCountries.sort((a, b) => (a.label > b.label) ? 1 : -1);

    console.log('Available countries', availableCountries)
    
    this.setState({
      availableCountries: availableCountries,
      chosenCountries: chosenCountries
    });

  };
  

render() {
  
  return (
    
  <div className="App">
    <div className="TitleBar">

      <TitleBar
        currentYear={this.state.year}/>

      <SelectYear
        onChange={this.onUpdateYear}
        currentYear={this.state.year}
        id="select"
        value={this.state.year}>
      </SelectYear>

    </div>
          
       

      <section className="MainContainer">
        <div className="CountryCheckbox">
          {this.state.data[this.state.year] ?
            this.state.data[this.state.year].map((info, index) => (
              <Buttons
              onClick={() => this.onChooseCountry(info, index)}
              text={info.Country}>
                {info.Country}
              </Buttons>
            )) : "NO DATA"
        }
        </div>

        <div className="BarChart" id="results">
          {this.state.chosenCountries.map((info, index) => (
            <BarChart 
              className="bar--show bar" 
              info={info}
              
              >

                <RemoveButton
                  onClick={() => this.removeCountry(index)}>
                </RemoveButton>
              
            </BarChart>
            ))
          }
          </div>
    </section>       
  </div>

    
  );
}


}

export default App;