import React, { Component } from "react";
import "./App.css";
import WeatherInformer from "./Components/WeatherInformer/WeatherInformer";
import { BrowserRouter } from "react-router-dom";
import { Route, NavLink, Redirect } from "react-router-dom";
import Game from "./Components/Game/Game";
import moment from "moment";

const apiKey = "15bd475ed9f45af139017a887f756443";
const cityId = "499099";
const cnt = 10;
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${apiKey}&cnt=${cnt}`;
class App extends Component {
  timeout;
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
      game: {
        flag: true,
        attempts: 5,
        start: null,
        res: "Нажмите чтобы начать",
        background: "#084449",
        falseStart: true
      }
    };
  }
  // ----------------------------- Game --------------------------
  getRandom = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  getStartTime = () => {
    this.setState({
      game: { background: "#F6B300", res: "Дождитесь зелёного" }
    });

    this.timeOut = setTimeout(() => {
      this.setState({
        game: {
          start: Date.now(),
          background: "#3CDB5E",
          flag: false,
          res: "Click !!!!!",
          falseStart: false
        }
      });
    }, this.getRandom(1, 2) * 1000);
  };

  getStopTime = () => {
    const stop = Date.now() - this.state.game.start
    const newState = {
      background: "#084449",
      flag: true,
      res: `${stop} ms`,
      falseStart: false
    };
    if (!this.state.game.start) {
      clearTimeout(this.timeOut);
      newState.res = 'Фальшстарт !!!11';
      newState.falseStart = true;
    } 
    this.setState({game: newState})
  };

  // ---------------------------- Weather ---------------------------
  fetchData = async () => {
    try {
      const url = await fetch(apiUrl);
      const data = await url.json();
      console.log(data);
      this.setState({ weather: data.list });
    } catch (err) {
      console.error("Ошибка: ", err);
    }
  };

  editDateHandler = d => {
    let date = new Date();
    date.setTime(d * 1000);
    let resultDate = moment(date).format('HH:mm DD.MM.YYYY')
    return resultDate;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="nav">
            <NavLink className="nav-link" rel="stylesheet" to="/" exact>
              Game
            </NavLink>
            <NavLink
              className="nav-link"
              rel="stylesheet"
              to="/WeatherInformer"
            >
              Weather
            </NavLink>
          </div>
          <Route
            path="/"
            exact
            render={() => (
              <Game
                startTime={this.getStartTime}
                stopTime={this.getStopTime}
                flag={this.state.game.flag}
                background={this.state.game.background}
                res={this.state.game.res}
                falseStart={this.falseStart}
              />
            )}
          />
          <Route
            path="/WeatherInformer"
            render={() => (
              <WeatherInformer
                weather={this.state.weather}
                date={this.editDateHandler}
                fetchDataHandler={this.fetchData}
              />
            )}
          />
        </div>
        <Redirect to={"/"} />
      </BrowserRouter>
    );
  }
}
export default App;
