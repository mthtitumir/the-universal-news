"use client"
import React, { useRef, useState, useEffect } from 'react';
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
} from './constants';
import { useInterval } from './useInterval';
import snakeImage from '../../../../../../public/680797.webp'

const TheSnake = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [appleCount, setAppleCount] = useState(0);

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = newSnake => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      setAppleCount(prevCount => prevCount + 1);

      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    if (snakeCopy.length > 0) {
      const [x, y] = snakeCopy[0];
      const context = canvasRef.current.getContext("2d");
      context.fillStyle = "pink";
      context.fillRect(x, y, 1, 1);
    }
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setAppleCount(0)
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "black";
    snake.forEach(([x, y]) => {
      context.beginPath();
      context.arc(x + 0.5, y + 0.5, 0.5, 0, 2 * Math.PI);
      context.fill();
    });

    context.fillStyle = "red";
    context.beginPath();
    context.arc(apple[0] + 0.5, apple[1] + 0.5, 0.5, 0, 2 * Math.PI);
    context.fill();
    context.fillStyle = "red";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);
  const handleKeyDown = (e) => {
    moveSnake(e);
  };
  return (
    <div role="button"
      tabIndex="0"
      onKeyDown={handleKeyDown} className=" py-14 bg-gray-200 flex items-center justify-center"  >
      <div className="border border-gray-400 p-6 bg-white rounded-lg shadow-md">
        <p className='text-center text-xl text-teal-500 my-4'> Your Points : {appleCount}</p>
        <div className="flex justify-center items-center " role="button" tabIndex="0" onKeyDown={e => moveSnake(e)} style={{ backgroundImage: `url(${snakeImage})` }}>
          <div className="relative" >
            <canvas

              className="border border-black "
              ref={canvasRef}
              width={`${CANVAS_SIZE[0]}px`}
              height={`${CANVAS_SIZE[1]}px`}
            />
            {gameOver && <div className="text-red-600 text-xl font-semibold absolute top-2/3 left-1/2 transform -translate-x-1/2">GAME OVER!</div>}
            {gameOver && <div className="text-red-600 text-xl font-semibold absolute top-3/4 left-1/2 transform -translate-x-1/2"> your poients {appleCount}</div>}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
            onClick={startGame}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheSnake;
