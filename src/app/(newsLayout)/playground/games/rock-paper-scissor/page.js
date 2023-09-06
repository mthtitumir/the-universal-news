"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image"; // Import Next.js Image component

const options = [
  "https://i.ibb.co/GCwn4cb/rock-image.png", // Replace with the actual image URLs
  "https://i.ibb.co/8xZpfBf/paper-image.png",
  "https://i.ibb.co/CtqPDXj/scissors-image.png",
];

const getRandomOption = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playGame = (userChoice) => {
    const computerChoice = getRandomOption();

    let gameResult = "";
    if (userChoice === computerChoice) {
      gameResult = "It's a tie!";
    } else {
      // Determine the result based on image URLs
      if (
        (userChoice === options[0] && computerChoice === options[2]) ||
        (userChoice === options[1] && computerChoice === options[0]) ||
        (userChoice === options[2] && computerChoice === options[1])
      ) {
        gameResult = "You win!";
        setUserScore(userScore + 1);
      } else {
        gameResult = "Computer wins!";
        setComputerScore(computerScore + 1);
      }
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
    setResult("");
    setUserScore(0);
    setComputerScore(0);
  };

  return (
    <div className="flex flex-col items-center h-screen px-2">
      <div className="flex items-center flex-col justify-center mt-10 mb-8">
        <h1 className="text-4xl font-bold mb-5 text-center">Rock, Paper, Scissors</h1>
        <div className=" ">
          <div className="flex items-center gap-2">
            <p className="text-white rounded-xl p-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
              You : {userScore}
            </p>
            <p className="text-white rounded-xl p-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
              Computer : {computerScore}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        {/* <p className="mb-2">
          How to Win:
          <br />
          Rock beats Scissors
          <br />
          Scissors beats Paper
          <br />
          Paper beats Rock
        </p> */}
        {/* Display images for options and handle click events */}
        <div className="flex items-center justify-between gap-2 lg:gap-10">
          <div className="lg:h-28 h-24 flex items-center justify-center lg:w-32 w-28 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl">
            <Image
              src={options[0]}
              alt="Rock"
              width={80}
              height={800}
              className="cursor-pointer "
              onClick={() => playGame(options[0])}
            />
          </div>
          <div className="lg:h-28 h-24 flex items-center justify-center lg:w-32 w-28 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl">
            <Image
              src={options[1]}
              alt="Paper"
              width={60}
              height={60}
              className="cursor-pointer"
              onClick={() => playGame(options[1])}
            />
          </div>
          <div className="lg:h-28 h-24 flex items-center justify-center lg:w-32 w-28 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl">
            <Image
              src={options[2]}
              alt="Scissors"
              width={80}
              height={80}
              className="cursor-pointer"
              onClick={() => playGame(options[2])}
            />
          </div>
        </div>
      </div>
      {userChoice && computerChoice && (
        <div className="w-full px-8">
          <div className="flex flex-col justify-between lg:gap-10 gap-4 items-center w-full">
            <div className="flex  mx-auto justify-center gap-10 items-center w-full">
              <div>
                <p className="text-xl font-bold ml-8"> You</p>
                <div className="lg:h-28 h-24 flex  items-center justify-center lg:w-32 w-28 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl">
                  <Image
                    src={userChoice}
                    alt="User's choice"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <p className="text-xl font-semibold text-red-600">{result}</p>
              <div>
                <p className="text-xl font-bold">Computer</p>
                <div className="lg:h-28 h-24 flex  items-center justify-center lg:w-32 w-28 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl">
                  <Image
                    src={computerChoice}
                    alt="Computer's choice"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
            <button
              className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl text-white font-bold py-2 px-4"
              onClick={resetGame}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
