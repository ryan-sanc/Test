import React, { useEffect, useRef, useState } from "react";
import { useInterval } from "usehooks-ts";
import AppleLogo from "./applePixels.png";
import Monitor from "./oldMonitor.png";
import "./App.css";
const canvasX = 1000;
const canvasY = 1000;
const initialSnake = [
  [4, 10],
  [4, 10],
];
const initialApple = [14, 10];
const scale = 50;
const timeDelay = 100;

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snake, setSnake] = useState(initialSnake);
  const [apple, setApple] = useState(initialApple);
  const [direction, setDirection] = useState([0, -1]);
  const [delay, setDelay] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useInterval(() => runGame(), delay);

  function handleSetScore() {}

  function play() {
    setSnake(initialSnake);
    setApple(initialApple);
    setDirection([1, 0]);
    setDelay(timeDelay);
    setScore(0);
    setGameOver(false);
  }

  function checkCollision(head: number[]) {}

  function appleAte(newSnake: number[][]) {}

  function runGame() {}

  function changeDirection(e: React.KeyboardEvent<HTMLDivElement>) {
    switch (e.key) {
      case "ArrowLeft":
        // Prevent reversing direction
        if (direction[0] !== 1) setDirection([-1, 0]);
        break;
      case "ArrowUp":
        if (direction[1] !== 1) setDirection([0, -1]);
        break;
      case "ArrowRight":
        if (direction[0] !== -1) setDirection([1, 0]);
        break;
      case "ArrowDown":
        if (direction[1] !== -1) setDirection([0, 1]);
        break;
    }
  }

  return (
    <div onKeyDown={(e) => changeDirection(e)}>
      <img id="fruit" src={AppleLogo} alt="fruit" width="30" />
      <img src={Monitor} alt="fruit" width="4000" className="monitor" />
      <canvas
        className="playArea"
        ref={canvasRef}
        width={`${canvasX}px`}
        height={`${canvasY}px`}
      />
      {gameOver && <div className="gameOver">Game Over</div>}
      <button onClick={play} className="playButton">
        Play
      </button>
      <div className="scoreBox">
        <h2>Score: {score}</h2>
        <h2>High Score: {localStorage.getItem("snakeScore")}</h2>
      </div>
    </div>
  );
}

export default App;
