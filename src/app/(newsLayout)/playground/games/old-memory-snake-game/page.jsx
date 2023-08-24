"use client"
import React, { useState, useEffect } from 'react';

const ROWS = 10;
const COLS = 10;
const CELL_SIZE = 30;

const TheSnake = () => {
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState('RIGHT');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleKeyPress = (event) => {
    // Handle arrow key presses and update direction
  };

  const updateGame = () => {
    // Update snake position
    // Check for collisions with walls and itself
    // Check for food consumption
  };

  useEffect(() => {
    const interval = setInterval(updateGame, 100);
    return () => {
      clearInterval(interval);
    };
  }, [snake]);

  const renderCell = (x, y) => {
    const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
    const isFood = food.x === x && food.y === y;
  
    const cellClasses = `h-${CELL_SIZE} w-${CELL_SIZE} ${
      isSnake ? 'bg-green-500' : isFood ? 'bg-red-500' : 'bg-gray-300'
    }`;

    return <div key={`${x}-${y}`} className={cellClasses}></div>;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="grid grid-cols-10 gap-1">
        {Array.from({ length: ROWS * COLS }).map((_, index) => {
          const x = index % COLS;
          const y = Math.floor(index / ROWS);
          return renderCell(x, y);
        })}
      </div>
    </div>
  );
};

export default TheSnake;
