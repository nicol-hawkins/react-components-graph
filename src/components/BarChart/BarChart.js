import React, { Component } from 'react';
import './BarChart.css';

class BarChart extends Component {
  render() {
    let className = 'bar--show bar';

return (
    <div 
      className={className}
      style={{height: this.props.info.Percentage + "%"}}>
      <h3>{this.props.info.Country}, {this.props.info.Year} </h3>
      <h4>{this.props.info.Percentage} %</h4>
    </div>
    );
  }
}

export default BarChart;