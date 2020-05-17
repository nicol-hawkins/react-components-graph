import React, { Component } from 'react';
import './CountryButtons.css';

class CountryButtons extends Component {
  render() {

    let className = 'Country-Button';

return (
 
    <div 
      className={className} 
      onClick={this.props.onClick}
      // onCountryToggle={() => this.onToggleCountry(info, index)}
      >
        {this.props.children}
    </div>
 
    );
  }
}

export default CountryButtons;