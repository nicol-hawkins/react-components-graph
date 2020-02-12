import React, { Component } from 'react';
import './TitleBar.css';


class TitleBar extends Component {
 render() {
  

 
    return (      

          <div className="test">
          <h1>Percentage of Forest Land in <br></br>South American Countries: 
            <span 
            className="output"
            year={this.props.year}
            onChange={this.props.onChange}
            > 
           {this.props.children}
           {this.props.year}
            </span> 
          </h1>
        </div>        
    );
  }
}
export default TitleBar;
