onToggleCountry = (indexOfCountry) => {
    const chosenCountries = this.state.chosenCountries.slice(); // duplicate chosenCountries array

    // Check if the chosenCountries array is listing this message as starred
    if (chosenCountries.includes(indexOfCountry)) {
        // Presently starred, remove from array
        // (This is the way you remove a particular value from an array in
        // JavaScript, sadly there is no "remove" method.)
        chosenCountries.splice(chosenCountries.indexOf(indexOfCountry), 1);

    } else {
        // Not presently starred, add to array
        chosenCountries.push(indexOfCountry);
    }

    // Finally, set the state with the new chosenCountries
    this.setState({
        chosenCountries: chosenCountries,
    });
}