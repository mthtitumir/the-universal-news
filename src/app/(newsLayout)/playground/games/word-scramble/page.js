"use client"
import React, { useState } from 'react';
import { words } from './words';

const WordScramble = () => {
    const [timeText, setTimeText] = useState('');
    const [word, setWord] = useState('');
    const [hint, setHint] = useState('');
    let correctWord, timer;
    // const initTimer = maxTime => {
    //     clearInterval(timer);
    //     timer = setInterval(() => {
    //         if (maxTime > 0) {
    //             maxTime--;
    //             return setTimeText(maxTime);
    //         }
    //         alert(`Time off! ${correctWord.toUppercase()} was the correct word!`);
    //         initGame();
    //     }, 1000);
    // }
    // const initGame = () => {
    //     initTimer(30);
    //     let randomObj = words[Math.floor(Math.random() * words.length)];
    //     let wordArray = randomObj.word.split("");
    //     for (let i = wordArray.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1));
    //         [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    //     }
    //     setWord(wordArray.join(""));
    //     setHint(randomObj.hint);
    //     correctWord = randomObj.word.toLowerCase();
    // }
    // initGame();

    // const checkWord = () => {
    //     let userWord = inputField.value.toLowerCase();
    //     if (!userWord) return alert("Please enter the word to check!");
    //     if (userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    //     alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    //     initGame();
    // }

    return (
        <div className='container mx-auto h-screen object-cover flex justify-center items-center bg-cyan-400'>
            <div className='border bg-cyan-300 rounded-lg p-5 flex flex-col gap-3'>
                <h1>Word Scramble Game</h1>
                <label htmlFor='my_modal_ws' className='primary-btn'>Click to Play</label>
            </div>
            <input type="checkbox" id="my_modal_ws" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-teal-700">
                    <div class="text-white">
                        <p class="text-center"></p>
                        <div class="flex flex-col gap-3 items-center">
                            <p class="">Hint: <span></span></p>
                            <p class="time">Time Left: <span><b>30</b>s</span></p>
                        </div>
                        <input className='text-center' type="text" spellcheck="false" placeholder="Enter a valid word" />
                        <div class="flex gap-5 justify-center items-center">
                            <button class="primary-btn">Refresh Word</button>
                            <button class="primary-btn">Check Word</button>
                        </div>
                        <div class="text-center"><span>Score: </span><span class="score">0</span></div>
                    </div>
                    {/* <div className="modal-action">
                        <label htmlFor="my_modal_ws" className="btn">Close!</label>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default WordScramble