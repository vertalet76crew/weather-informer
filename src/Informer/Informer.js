import React from 'react';
import './Informer.css';

class Informer extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.weather);
       
    }

   

    render(){
        const editDate = (d) => {
            let date = new Date()
             date.setTime(d * 1000);
             let resultDate = `${date.getHours()}:${date.getMinutes().toLocaleString()} ${date.getDate()}.${date.getMonth()+1}. ${date.getFullYear()}`
             return resultDate
         }
         const currentDate = editDate
        if(this.props.weather){
            return (
                <div className="informer-wrap">
                 {this.props.weather.map((item, idx) => {
                     return (
                        <div className="informer-item" key={idx}>
                            <div className="informer-date" >{editDate(item.dt) }</div>
                            <div className="informer-temp" >{Math.round(item.main.temp -273)} С &deg;</div>
                            <div className="informer-wind" >{(item.wind.speed).toFixed(1)} м/с</div>
                        </div>
                     )
                 })}
                </div>
              )
        }
        return null
    }
  
}

export default Informer;