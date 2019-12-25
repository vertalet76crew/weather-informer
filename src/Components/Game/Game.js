import React from 'react';
import "./Game.css"

const Game = (props)=>{
    console.log(props)
    return (
        <div onClick={props.flag ? props.startTime : props.stopTime} className="Game" style = {{background: props.background}}>

            <div className='Game-content'>{props.res}</div>
        </div>
    )
}
export default  Game ;