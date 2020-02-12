import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
  render() {

    let className = 'btn-primary';

return (
 

    <div 
      className={className} 
      onClick={this.props.onClick}
  >
        {this.props.children}
    </div>
 

    );
  }
}

export default Buttons;