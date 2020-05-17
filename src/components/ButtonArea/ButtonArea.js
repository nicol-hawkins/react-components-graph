import React, { Component } from 'react';
import './ButtonArea.css';

import CountryButtons from '../CountryButtons/CountryButtons';

class ButtonArea extends Component {
  render() {
    return (
        <div className="CountryCheckbox">
       
            <CountryButtons
							onCountryToggle={() => this.props.onToggleCountry(info, index)}
							isChosen={() => this.props.chosenCountries.includes(index)}
              text={info.Country}>
                {info.Country}
            </CountryButtons>
          
    </div>
        );
    }
    }

    export default ButtonArea;