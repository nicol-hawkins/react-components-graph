
import React, { Component } from 'react';
import './App.css';

import SelectYear from './components/SelectYear/SelectYear.js';
import CountryButtons from './components/CountryButtons/CountryButtons.js';
import BarChart from './components/BarChart/BarChart.js';
import TitleBar from './components/TitleBar/TitleBar.js';
import RemoveButton from './components/RemoveButton/RemoveButton.js';


class App extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      year: null,
      counter: 0,
      data:[],
      chosenCountries: [],
      availableCountries: [],
    };
};

  //Fetch the data
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

onUpdatePercentage = (info, Percentage) => {
  let chosenCountries = Object.assign({}, this.state.chosenCountries)
  chosenCountries.info.Percentage = this.state.data[this.state.year]
  this.setState({
    chosenCountries: chosenCountries
  });
  console.log('onUpdatePercetage called')
}

//Update the year state using onUpdateYear method
onUpdateYear = (ev, info) => {
  let year = ev.target.value;
  // let chosenCountries = Object.assign({}, this.state.chosenCountries);
  // chosenCountries.Percentage = this.state.data[this.state.year]
  // this.onUpdatePercentage();
    this.setState({
      year: year,
      chosenCountries: this.state.data[this.state.year]
    })
    console.log('Chosen Countries for', this.state.year, ':', this.state.chosenCountries)
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
    console.log(this.state.chosenCountries)

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