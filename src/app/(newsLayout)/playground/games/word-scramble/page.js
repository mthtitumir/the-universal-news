"use client"
import React, { useState, useEffect } from 'react';
import { wordList } from './words';

const WordScramble = () => {
    const words = wordList.map((item) => item.word);
    const [scrambledWord, setScrambledWord] = useState("");
    const [message, setMessage] = useState("");

    // Function to select a random word from the list
    const selectRandomWord = (words) => {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    // Example usage:
    const originalWord = selectRandomWord(words);

    // scramble logic using useEffect
    useEffect(() => {
        const scrambleWord = (word) => {
            const wordArray = word.split('');
            for (let i = wordArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
            }
            setScrambledWord(wordArray.join(''))
        }
        scrambleWord(originalWord);
    }, [originalWord]); // Empty dependency array ensures this runs once on mount

    // answer check 
    const checkAnswer = (event) => {
        event.preventDefault();
        const userInput = event.target.input.value;
        console.log(originalWord);
        console.log(userInput);
        if (userInput === originalWord) {
            setMessage("Correct!");
        } else {
            setMessage("Try Again!");
        }
        event.target.reset();
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='text-center'>
                <h1>Word Scramble Game</h1>
                <p>Unscramble the word: {scrambledWord}</p>
                <form onSubmit={checkAnswer}>
                    <input className='p-1 m-3' type="text" name='input' placeholder='Your guess'  />
                    <button type='submit' className='primary-btn'>Check</button>
                </form>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default WordScramble;
