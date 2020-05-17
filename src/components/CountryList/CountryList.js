import React, { Component } from 'react';
import './CountryList.css';

import CountryButton from '../CountryButton/CountryButton';

class CountryList extends Component {
  render() {
    return (
    
      <div className="CountryCheckbox">
        {this.props.data[this.props.year] ?
          this.props.data[this.props.year].map((info, index) => (
            <CountryButton
              onClick={() => this.onToggleCountry(info, index)}
              text={info.Country}>
                {info.Country}
            </CountryButton>
          )) : "NO DATA"
        }
      </div>

    );
  }
}

export default CountryList;