"use client"
import React, { useState, useEffect } from 'react';
import { wordList } from './words';

const WordScramble = () => {
    const words = wordList.map((item) => item.word);
    const hints = wordList.map((item) => item.hint);
    const [scrambledWord, setScrambledWord] = useState("");
    const [hint, setHint] = useState("");
    const [message, setMessage] = useState("");

    // Function to select a random word from the list
    const selectRandomWord = (words) => {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }
    const [originalWord, setOriginalWord] = useState(selectRandomWord(words))
    // Example usage:
    // const originalWord = selectRandomWord(words);

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
        // console.log(originalWord);
        // console.log(userInput);
        if (userInput.toLowerCase() === originalWord) {
            setMessage("Correct!");
        } else {
            setMessage("Try Again!");
        }
        event.target.reset();
        // setOriginalWord(selectRandomWord(words));
    };
    const loadNewWord = () => {
        setOriginalWord(selectRandomWord(words));
        setMessage("");
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='text-center border p-5 shadow-lg rounded-xl'>
                <h1 className='text-xl text-center'>Word Scramble</h1>
                <div className="h-[1px] bg-slate-300 my-3"></div>
                <h1 className='text-3xl my-5 uppercase tracking-wideset'>{"'" + scrambledWord.split('').join("' '") + "'"}</h1>
                <p>Hint: </p>
                <form onSubmit={checkAnswer}>
                    <input className='px-2 mb-5 text-center py-1 w-full focus:outline-none  border px' type="text" name='input' placeholder='Your guess' />
                    <div className="">
                        <button type='submit' className='primary-btn w-full'>Check</button>
                    </div>
                </form>
                <button className='primary-btn my-3 w-full' onClick={loadNewWord}>Refresh</button>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default WordScramble;