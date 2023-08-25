"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import quizeImg from '../../../../../public/its-quiz-time-text-wooden-cubes-177037660.webp'
import {  questions } from '@/data/genaretQuizeData';
import useAuth from '@/hooks/useAuth';
const HandleQuize = () => {
    const { user } = useAuth();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setCurrentQuestion(null);
        }
    };
    return (
        <div className='md:grid grid-cols-2'>

            <div className="bg-gray-100  flex flex-col justify-center items-center">
                <div className="w-96 bg-white rounded-lg shadow-md p-6">
                    {currentQuestion !== null ? (
                        <div>
                            <div className="text-lg mb-4">
                                Question {currentQuestion + 1}/{questions.length}
                            </div>
                            <div className="text-xl mb-6">{questions[currentQuestion].questionText}</div>
                            <div className="space-y-4">
                                {questions[currentQuestion].answerOptions.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerClick(option.isCorrect)}
                                        className="block w-full py-2 px-4 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
                                    >
                                        {option.answerText}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-xl text-center">
                            Congratulations, {user?.displayName}! You have completed the quiz.
                            <p>your score {score}/5</p>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <Image src={quizeImg} height='900' width='900' alt='this is quize' />
            </div>
        </div>
    );
};

export default HandleQuize;