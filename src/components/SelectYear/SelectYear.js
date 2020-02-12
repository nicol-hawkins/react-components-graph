import React, { Component } from 'react';
import './SelectYear.css';

class SelectYear extends Component {
 render() {
   let className = "YearChooser-select"

 
    return (
      <div className="YearChooser">
        <div className="YearChooser-select">
          <select 
          className={className} 
          onChange={this.props.onChange} 
          currentYear={this.props.year}>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
          </select>
        {this.props.children}
        </div>
      </div>
    );
  }
}
export default SelectYear;











