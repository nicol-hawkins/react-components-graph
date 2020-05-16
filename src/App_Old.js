// OLD METHOD FOR CHOOSING COUNTRY
  // onChooseCountry = (info, index) => {
  //   const chosenCountries = this.state.chosenCountries.slice();
  //   const availableCountries = this.state.data[this.state.year].slice();
  //   const chosenCountry = availableCountries[index];

  //   chosenCountries.push(chosenCountry);
  //   availableCountries.splice(index, 1)
  //   chosenCountries.sort((a, b) => (a.label > b.label) ? 1 : -1);
    
  //   this.setState({
  //     chosenCountries: chosenCountries,
  //     availableCountries: availableCountries,
  //     counter: this.state.counter + 1,
  //   });
  //   console.log(this.state.chosenCountries)

  // };
  
  //OLD METHOD FOR REMOVING COUNTRY 
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