import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from 'react-spring'
import Player from "./player";

export default function App() {
  let [scores, setScores] = useState([])
  let [data, setData] = useState([])
  useEffect(() => {
// use fetch at https://Reminisce.amukh1.repl.co/data to get all the score data
    fetch("https://Reminisce.amukh1.repl.co/data")
      .then(response => response.json())
      .then(data => {
        // Object.entries(data).sort((a,b) => b[1]-a[1])
        setScores(Object.entries(data).sort((a,b) => b[1]-a[1]))
        setData(data)
      })
  })
  return (
    <div className="App">
      <h1 className="logo">
        <em>Reminisce</em>
      </h1>
      <animated.div className="leaderboard">
        {scores.map((score, i) => {
return <Player name={score[0].split("^")[0]} kills={score[1]} />;
        })}
      </animated.div>
    </div>
  );
}
