"use client";
import './game.css'

import { Sunflower } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import SingleCard from './singleCardComp/SingleCard';
const cardImages = [
    { "src": "https://i.ibb.co/NW7pChM/istockphoto-1168148914-612x612-removebg-preview.png", matched: false },
    { "src": "https://i.ibb.co/H4TjRpq/halmate-removebg-preview.png", matched: false },
    { "src": "https://i.ibb.co/fC9qMSz/rings-removebg-preview.png", matched: false },
    { "src": "https://i.ibb.co/g73FYB0/potion-removebg-preview.png", matched: false },
    { "src": "https://i.ibb.co/52sn9Wg/scroll-removebg-preview.png", matched: false },
    { "src": "https://i.ibb.co/CmTwq8p/shield-removebg-preview.png", matched: false },
]

const MemoryGame = () => {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disable, setDisable] = useState(false)

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    }

    // handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    // compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisable(true)

            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    console.log(cards)

    // reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisable(false)
    }

    // start a new game 
    useEffect(() => {
        shuffleCards()
    }, [])

    return (
        <div className='magicCard'>
            <h2 className='text-center text-3xl font-semibold'>___Magic Match___</h2>
            <div className=' w-1/4 mx-auto text-center my-6'>
                <button className=' px-3 py-2 bg-black rounded text-white' onClick={shuffleCards}>Refresh Game</button>
            </div>


            <div className="grid grid-cols-4 gap-3 mx-auto w-3/4">
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disable={disable}
                    > </SingleCard>
                ))}
            </div>
            <p className='text-center text-base font-semibold my-4'>Turns: {turns}</p>
        </div>
    );
};

export default MemoryGame;