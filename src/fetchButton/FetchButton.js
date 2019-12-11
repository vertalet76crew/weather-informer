import React from 'react';
import './FetchButton.css';

class FetchButton extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="App">
              <button onClick={this.props.fetchDataHandler}>Запросить погоду</button>
            </div>
          )
    }
  ;
}

export default FetchButton;