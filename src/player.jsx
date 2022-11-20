import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

export default function Player(props) {
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: -10 },
    to: { x: 10 }
  });
  return (
    <animated.div className="player" style={styles}>
      <div className="name">{props.name}</div>
      <div className="score">{props.kills} kills</div>
    </animated.div>
  );
}
