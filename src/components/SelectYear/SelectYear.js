import React, { Component } from 'react';
import './SelectYear.css';

class SelectYear extends Component {
 render() {

 
    return (
      <div className="YearChooser">
        <select 
        className="YearChooser-select" 
        onChange={this.props.onChange} 
        currentYear={this.props.year}
        id="select">
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
    );
  }
}
export default SelectYear;











