import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from 'react-spring'
import Player from "./player";

export default function App() {
  return (
    <div className="App">
      <h1 className="logo">
        <em>Reminisce</em>
      </h1>
      <animated.div className="leaderboard">
        <Player name="Amukh1" kills="26" />
        <Player name="Socially" kills="26" />
        <Player name="Random" kills="24" />
      </animated.div>
    </div>
  );
}
