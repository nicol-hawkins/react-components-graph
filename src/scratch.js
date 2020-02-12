  //toggle visibility of data, not really being used anymore//
  //keeping it here for reference//
  // toggleInfo(index, label) {
    //   console.log('this is index', index);
    //   if(this.state.data[index].visible === true) {
    //     this.state.data[index].visible = false;
    //   } else {
    //       this.state.data[index].visible = true;
    //   } 
    //     this.setState({
    //     data: this.state.data,
    //   });
    // }


    // onUpdateYear = (ev, info, index) => {
    //     let year = ev.target.value;
        // const chosenCountries = [];
        // const newChosenCountries  = [];
        
        
        // Loop through chosen countries
        // In each loop, also loop through avialble countries (info, index)
        // Find matches, and update newChosenCountries to have the new data from the new year
        // Set chosenCountires equal to newChosenCountries
      
       
        // for (let item in this.state.chosenCountries) {
        //    for (let item in this.state.availableCountries) {
        //      if (this.state.year === this.state.chosenCountries[this.state.year]) {
      
        //         this.setState ({
        //           chosenCountries: newChosenCountries
        //         })
        //       }
        //     }
        //     console.log(this.state.chosenCountries)
        //     // console.log(this.state.availableCountries)
        //   }
          
        //   this.setState({
        //       year: year,
        //       chosenCountries: this.state.chosenCountries,
        //       },
        //       () => console.log('Year Chosen: ',this.state.year, 'Available countries: ', this.state.data[this.state.year], 'Chosen countries', this.state.chosenCountries))
        //   }







  // import React, { Component } from 'react';
// import './SelectYear.css';

// // import Select from 'react-select';


// const options = [
//   { value: '2016', label: '2016' },
//   { value: '2015', label: '2015' },
//   { value: '2014', label: '2014' },
//   { value: '2013', label: '2013' },
//   { value: '2012', label: '2012' },
//   { value: '2011', label: '2011' },
//   { value: '2010', label: '2010' }
// ]

// const MyComponent = () => (
//   <SelectYear options={options} />
// )


// class SelectYear extends Component {


        

// render() {
//     let className = 'YearChooser-select';

// return (
         
//     <SelectYear
//     className={className}
//     value={this.props.year}
//     text={this.props.label}
//     onChange={this.props.onSelectYear}
//     options={options}

//   />
//     );
//   }
// }

// export default SelectYear;