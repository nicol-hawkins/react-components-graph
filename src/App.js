
import React, { Component } from 'react';
import './App.css';

import SelectYear from './components/SelectYear/SelectYear.js';
import CountryButton from './components/CountryList/CountryList';
import BarChart from './components/BarChart/BarChart.js';
import TitleBar from './components/TitleBar/TitleBar.js';
import RemoveButton from './components/RemoveButton/RemoveButton.js';
import CountryList from './components/CountryList/CountryList';


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

    // this.onToggleCountry = this.onToggleCountry.bind(this);
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
      // chosenCountries: this.state.data[this.state.year]
    })
    console.log('Chosen Countries for', this.state.year, ':', this.state.chosenCountries)
  };


//Update state of chosenCountries array
  // onToggleCountry = (data, index) => {   
  //   const chosenCountries = this.state.chosenCountries  
  //   const chosenCountry = data.Country;
  //   chosenCountries.push(chosenCountry);

  //   console.log('Current Chosen: ', chosenCountry)
  //   console.log('List of Chosen: ', chosenCountries)
    
  //   this.setState({
  //     isVisible: !this.state.isVisible,
  //     data: this.state.data,
  //     chosenCountries: this.state.chosenCountries

  //   });

  // };

  toggleCountry = (indexOfCountry) => {
    const chosenCountries = this.state.chosenCountries.slice(); // duplicate chosenCountries array

    // Check if the chosenCountries array is listing this country as chosen
    if (chosenCountries.includes(indexOfCountry)) {
        // Presently chosen, remove from array
        // (This is the way you remove a particular value from an array in
        // JavaScript, sadly there is no "remove" method.)
        chosenCountries.splice(chosenCountries.indexOf(indexOfCountry), 1);

    } else {
        // Not presently starred, add to array
        chosenCountries.push(chosenCountries);
    }

    // Finally, set the state with the new chosenCountries
    this.setState({
        chosenCountries: chosenCountries,
        isVisible: !this.state.isVisible
    });
    console.log('Chosen Countries: ', chosenCountries)
    console.log('Index of Country: ',  indexOfCountry)
}

  
  
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
        <CountryList
          data={this.state.data}
          year={this.state.year}
          onToggleCountry={this.toggleCountry} />         
  
        
        <div className="BarChart" id="results">

          {/* **LOOPS THROUGH TOO MUCH DATA, BUT UPDATES CORRECT VALUES** */}
          {/* {
            this.state.isVisible && (
              this.state.chosenCountries ?
              this.state.data[this.state.year].map((info, index) => (
                <BarChart
                  className="bar--show bar"
                  info={info}>
                </BarChart>
              )) : "NO DATA"
            )
          } */}

          {/* **LOOPING THROUGH OBJECT WITH OBJECT.ENTRIES** */}
          {
            this.state.isVisible && (
              Object.entries(this.state.data).map(([year, info]) => (
                year === this.state.year ? (
                  <BarChart
                    className="bar--show bar"
                    info={info}>
                    {console.log("info: ", info.Country)}
                  </BarChart>
                ) : null
              ))
            )
          }


          {/* OLD LOOP FOR BARS */}
            {/* {this.state.data.map((info, index) => (
              <BarChart 
                className="bar--show bar" 
                info={info}>
              </BarChart>
            ))
             } */}



             {/* **PSEUDOCODE** */}
             {/* for country in chosenCountries:
             if chosenCountry === info.Country
             <BarChart>
             </BarChart> */}

             {/* if this.state.chosenCountries[index] === info.Country */}
        </div>
      </section>       
    </div>
  
  );
 }
}

export default App;