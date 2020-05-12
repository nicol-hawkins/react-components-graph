import React, { Component } from 'react';
import './BarChart.css';

class BarChart extends Component {
  render() {
    let className = 'BarChart-Bar';

return (
    // <div 
    //   className={className}
    //   style={{height: this.props.info.Percentage - 10 + "%" }}>
    //   <h3>{this.props.info.Country}, {this.props.info.Year} </h3>
    //   <h4>{this.props.info.Percentage} %</h4>
    //   {this.props.children}
    // </div>
    <div className={className}>
      Toggle Me!
    </div>
    );
  }
}

export default BarChart;