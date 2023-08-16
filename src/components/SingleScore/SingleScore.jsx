
import React from 'react';

const SingleScore = ({ liveScore }) => {
    const { teamInfo, date, score } = liveScore
    return (
        <div className=" bg-base-100 shadow-xl p-4">
            <div className="">
                
                <div className='flex '>
                <p>{teamInfo[0].shortname}</p>
                <div className='flex ml-2'>
                    <p>{score[0]?.r}/</p>
                    <p>{score[0]?.w}</p>
                    <p className='ml-2'>({score[0]?.o})</p>
                </div>
                </div>
                <div className='flex justify-between items-center'>
                <p>{teamInfo[1].shortname}</p>
                <div className='flex ml-2'>
                    <p>{score[1]?.r}/</p>
                    <p>{score[1]?.w}</p>
                    <p className='ml-2'>({score[1]?.o})</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SingleScore;