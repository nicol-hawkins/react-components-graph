
import React, { Component } from 'react';
import './App.css';

//import components
import SelectYear from './components/SelectYear/SelectYear.js';
import CountryButtons from './components/CountryButtons/CountryButtons.js';
import BarChart from './components/BarChart/BarChart.js';
import TitleBar from './components/TitleBar/TitleBar.js';
import RemoveButton from './components/RemoveButton/RemoveButton.js';


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
    .then((result) => {
        this.setState({
          data: result,
          year: '2016',  
          availableCountries: result,
        });      
      }
    )
  };

//Update the year state using onUpdateYear method
onUpdateYear = (ev) => {
  let year = ev.target.value;
    this.setState({
      year: year,
    })
  };


//Update state of chosenCountries array
  onChooseCountry = (info, index) => {
    const chosenCountries = this.state.chosenCountries.slice();
    const availableCountries = this.state.data[this.state.year].slice();
    const chosenCountry = availableCountries[index];

    chosenCountries.push(chosenCountry);
    availableCountries.splice(index, 1)
    chosenCountries.sort((a, b) => (a.label > b.label) ? 1 : -1);
    
    this.setState({
      chosenCountries: chosenCountries,
      availableCountries: availableCountries,
      counter: this.state.counter + 1,
    });

  };
  
//Update State of availableCountries by removing chosenCountires 
  removeCountry = (index) => {
    const chosenCountries = this.state.chosenCountries.slice();
    const availableCountries = this.state.availableCountries.slice();
    const chosenCountry = chosenCountries[index];

    availableCountries.push(chosenCountry);
    chosenCountries.splice(index, 1);
    availableCountries.sort((a, b) => (a.label > b.label) ? 1 : -1);
    
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
        onChange={this.onUpdateYear}
        currentYear={this.state.year}
        year={this.state.year}>
          <SelectYear
            onChange={this.onUpdateYear}
            currentYear={this.state.year}
            value={this.state.year}>
          </SelectYear>
        </TitleBar>
      </div>
          
      <section className="MainContainer">
        <div className="CountryCheckbox">
          {this.state.data[this.state.year] ?
            this.state.data[this.state.year].map((info, index) => (
              <CountryButtons
                onClick={() => this.onChooseCountry(info, index)}
                text={info.Country}>
                  {info.Country}
              </CountryButtons>
            )) : "NO DATA"
          }
        </div>
        <div className="BarChart" id="results">
            {this.state.chosenCountries.map((info, index) => (
              <BarChart 
                className="bar--show bar" 
                info={info}>
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