"use client"
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const options = ['rock', 'paper', 'scissors'];

const getRandomOption = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playGame = (userChoice) => {
    const computerChoice = getRandomOption();

    let gameResult = '';
    if (userChoice === computerChoice) {
      gameResult = 'It\'s a tie!';
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      gameResult = 'You win!';
      setUserScore(userScore + 1);
    } else {
      gameResult = 'Computer wins!';
      setComputerScore(computerScore + 1);
    }

    setUserChoice(userChoice);
    setComputerChoice(computerChoice);
    setResult(gameResult);

    // Show a notification with the game result
    toast(gameResult);
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
  };

  return (
    <div className="flex flex-col items-center">
      <Toaster position="top-right" />

      <h1 className="text-2xl font-bold mb-4">Rock, Paper, Scissors</h1>
      <div className="mb-4">
        <p className="mb-2">
          How to Win:
          <br />
          Rock beats Scissors
          <br />
          Scissors beats Paper
          <br />
          Paper beats Rock
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => playGame('rock')}>
          Rock
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => playGame('paper')}>
          Paper
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => playGame('scissors')}>
          Scissors
        </button>
      </div>
      {userChoice && computerChoice && (
        <div>
          <p>Your choice: {userChoice}</p>
          <p>Computer's choice: {computerChoice}</p>
          <p>{result}</p>
          <p>Your Score: {userScore}</p>
          <p>Computer Score: {computerScore}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={resetGame}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
