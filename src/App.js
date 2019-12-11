import React from 'react';
import './App.css';
import Informer  from'./Informer/Informer';
import FetcButton from './fetchButton/FetchButton';

const apiKey = '15bd475ed9f45af139017a887f756443';
const cityId = '499099';
const apiKeyDaily = 'c1d9dc0d3ac487da55694276c5932e48'
const cnt = 10;
// const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${apiKey}&cnt=${cnt}`;
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${apiKey}&cnt=${cnt}`
class App extends React.Component {
  
  constructor(props){
    
    super(props);
  
  }
  state = {
    weather: null
  }
 
  fetchData = async() =>{
   const url =  await fetch(apiUrl);
   const data = await url.json();
   console.log(data)
   this.setState({weather: data.list}) 

  }
  


  render(){
    return (
      <div className="App">
        <Informer weather={this.state.weather}/>
        <FetcButton fetchDataHandler={this.fetchData}/>
      </div>
    );
  }
  
}

export default App;
