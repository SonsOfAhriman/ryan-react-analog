import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import "./Clock.css";

let hover = false;

function Clock({ dispatch, seconds, minutes, hours, currentTime }) {
  const [time, setTime] = useState(new Date());
  const [hovering, setHovering] = useState(false);
  const secondHand = useRef();
  const minsHand = useRef();
  const hourHand = useRef();

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    const hoursNow = time.getHours();
    const minutesNow = time.getMinutes();
    const secondsNow = time.getSeconds();

    dispatch({
      type: "INCREMENT_HOURS",
      payload: hoursNow,
    });
    dispatch({
      type: "INCREMENT_MINUTES",
      payload: minutesNow,
    });

    dispatch({
      type: "INCREMENT_SECONDS",
      payload: secondsNow,
    });

    const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    const minsDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const secondsDegrees = (seconds / 60) * 360 + 90;

    hourHand.current.style.transform = `rotate(${hourDegrees}deg)`;
    minsHand.current.style.transform = `rotate(${minsDegrees}deg)`;
    secondHand.current.style.transform = `rotate(${secondsDegrees}deg)`;

    return () => {
      clearInterval(timerId);
    };
  }, [time, dispatch, hours, minutes, seconds]);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div>
      <h2>
        Ryan Huddleston Adriel Front-End Developer Test
      </h2>
      <button
        onMouseOver={() => {
          hover = true;
          setTimeout(() => {
            if (hover) {
              setHovering(true);
            }
          }, 500);
        }}
        onMouseOut={() => {
          hover = false;
          setHovering(false);
        }}
      >
        <div className="clock">
          <div className="outer-clock-face">
            <div className="marking marking-one"></div>
            <div className="marking marking-two"></div>
            <div className="marking marking-three"></div>
            <div className="marking marking-four"></div>
            <div className="inner-clock-face"></div>
            <div className="hand hour-hand" ref={hourHand}></div>
            <div className="hand min-hand" ref={minsHand}></div>
            <div className="hand second-hand" ref={secondHand}></div>
          </div>
        </div>
      </button>
      {hovering && <div> The current time is {time.toString()} </div>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    seconds: state.seconds,
    minutes: state.minutes,
    hours: state.hours,
  };
};

export default connect(mapStateToProps)(Clock);
