
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
      data: [],
      chosenCountries: [],
      availableCountries: [],
      isVisible: false
    };

    this.onToggleCountry = this.onToggleCountry.bind(this);
};

  //Fetch the data
  componentDidMount() {
    fetch('./data2.json')
    .then(response => response.json())
    .then((data) => {
        this.setState({
          data: data,
          year: '2016'
        });      
      }
    )
  };

//Update the year state using onUpdateYear method
onUpdateYear = (ev, info) => {
  let year = ev.target.value;
    this.setState({
      year: year,
      chosenCountries: this.state.data[this.state.year]
    })
    console.log('Chosen Countries for', this.state.year, ':', this.state.chosenCountries)
  };


//Update state of chosenCountries array
  onToggleCountry = (info) => {   
    this.setState({
      isVisible: !this.state.isVisible,

    });

  };
  
//Update State of availableCountries by removing chosenCountires 
  // removeCountry = (index) => {
  //   const chosenCountries = this.state.chosenCountries.slice();
  //   const availableCountries = this.state.availableCountries.slice();
  //   const chosenCountry = chosenCountries[index];

  //   availableCountries.push(chosenCountry);
  //   chosenCountries.splice(index, 1);
  //   availableCountries.sort((a, b) => (a.label > b.label) ? 1 : -1);
    
  //   this.setState({
  //     availableCountries: availableCountries,
  //     chosenCountries: chosenCountries
  //   });

  // };
  
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
                onClick={() => this.onToggleCountry(info, index)}
                text={info.Country}>
                  {info.Country}
              </CountryButtons>
            )) : "NO DATA"
          }
        </div>
        <div className="BarChart" id="results">
          {
            this.state.isVisible && <BarChart></BarChart>
          }
            {/* {this.state.data.map((info, index) => (
              <BarChart 
                className="bar--show bar" 
                info={info}>
              </BarChart>
            ))
             } */}
        </div>
      </section>       
    </div>
  
  );
 }
}

export default App;