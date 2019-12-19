import React , {Component} from 'react';
import './App.css';
import WeatherInformer from './Components/WeatherInformer/WeatherInformer';
import {BrowserRouter} from 'react-router-dom';
import {Route , NavLink} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage'

const apiKey = '15bd475ed9f45af139017a887f756443';
const cityId = '499099';
const cnt = 10;
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${apiKey}&cnt=${cnt}`
class App extends Component {
  
  state = {
   weather: null
  }
 
  fetchData = async() =>{
   const url =  await fetch(apiUrl);
   const data = await url.json();
   console.log(data)
   this.setState({weather: data.list}) 

  }
  
  editDateHandler = (d) => {
    let date = new Date()
     date.setTime(d * 1000);
     let resultDate = `${date.getHours()}:${date.getMinutes().toLocaleString()} ${date.getDate()}.${date.getMonth()+1}. ${date.getFullYear()}`
     return resultDate
 }
  render(){
  
    return (
      <BrowserRouter>
        <div className="App">
          <div className="nav">
            <NavLink className="nav-link" rel="stylesheet" to="/" exact>Home</NavLink>
            <NavLink className="nav-link" rel="stylesheet" to="/WeatherInformer">Weather</NavLink>
          </div>
          <Route path='/' exact render ={ () => <HomePage/> }/>
          <Route path='/WeatherInformer'  render= {() => <WeatherInformer weather={this.state.weather} date = {this.editDateHandler} fetchDataHandler={this.fetchData}/>}/>
          
        </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
