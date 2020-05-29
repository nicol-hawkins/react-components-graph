import React, { Component } from 'react';
import './BarChart.css';

class BarChart extends Component {
  render() {
    let className = 'BarChart-Bar';

  return (
    <div>
      {
        this.props.data[this.props.year] ? 
          this.props.data[this.props.year].map((info, index) => (
            <div 
              className={className}
              style={{height: this.props.info.Percentage - 10 + "%" }}>
              <h3>{this.props.info.Country}, {this.props.info.Year} </h3>
              <h4>{this.props.info.Percentage} %</h4>
              {this.props.children}
            </div>
          )) : 'not data'
        
      }
    </div>

      
    );
  }
}

export default BarChart;