import React from 'react';
import './WeatherInformer.css';
import Informer  from'./Informer/Informer';
import FetchButton from './fetchButton/FetchButton';

const WeatherInformer = (props) => {
      return ( 
        <div className="WeatherInformer">
          <Informer weather={props.weather} date = {props.date}/>
          <FetchButton fetchDataHandler={props.fetchDataHandler}/>
        </div>
      );
  }

export default WeatherInformer  