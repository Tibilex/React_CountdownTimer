import './Timer.css';
import React, {useState, useEffect} from "react";

const Timer = (prop) =>{


    const hour = prop.hours;
    const minute = prop.minutes;
    const second = prop.seconds;

    const [[hr, min, sec], setTime] = useState([hour, minute, second]);

    const timerTick = () => {
        if (hr === 0 && min === 0 && sec === 0){
            reset();
        }
        else if (min === 0 && sec === 0) {
            setTime([hr - 1, 59, 9]);
        }
        else if (sec === 0) {
            setTime([hr, min - 1, 59]);
        }
        else {
            setTime([hr, min, sec - 1]);
        }      
    };

    const reset = () => setTime([parseInt(hour), parseInt(minute), parseInt(second)]);  

    useEffect (() =>{
        const timer = setInterval(() => timerTick(), 1000);
        return () => {
            clearInterval(timer);
        }
    });

    return(
        <div className='timer__block'>
            <div>
                <label className='timer__label'>Hours</label>
                <div name="hour" className='timer__text'>{`${hr.toString().padStart(2, '0')}`}</div>
            </div>
            <div className='timer__text dot'>:</div>
            <div>
                <label className='timer__label'>minutes</label>
                <div name="hour" className='timer__text'>{`${min.toString().padStart(2, '0')}`}</div>
            </div>
            <div className='timer__text dot'>:</div>
            <div>
                <label className='timer__label'>seconds</label>
                <div name="hour" className='timer__text'>{`${sec.toString().padStart(2, '0')}`}</div>
            </div>
        </div>
    );
};

export default Timer;