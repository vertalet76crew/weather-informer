import React from "react";
import "./Informer.css";

const Informer = props => {
  return (
    <div className="informer-wrap">
      {props.weather
        ? props.weather.map((item, idx) => {
            return (
              <div className="informer-item" key={idx}>
                <div className="informer-date">{props.date(item.dt)}</div>
                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} className="informer-icon" alt={`${item.weather[0].main}`} />
                <div className="informer-temp">
                  {Math.round(item.main.temp)} С &deg;
                </div>
                <div className="informer-wind">
                  {item.wind.speed.toFixed(1)} м/с
                </div>
              </div>
            );
          })
        : <div className="informer-item">
            Погода не загружена    
        </div>}
    </div>
  );
};

export default Informer;
