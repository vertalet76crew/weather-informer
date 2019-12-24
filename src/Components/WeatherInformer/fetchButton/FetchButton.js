import React from 'react';
import './FetchButton.css';

function FetchButton (props) {
    return(
        <div className='btn-wrap'>
          <button className='fetch-btn' onClick={props.fetchDataHandler}>Запросить погоду</button>
        </div>
    )
}

export default FetchButton;