"use client"
import React from 'react';
import Image from 'next/image';
const SingleScore = ({ singleScore }) => {
    const { teams, teamInfo, date, score, name, status, matchType } = singleScore;
    return (
        <div className="shadow-xl p-5 border my-3">
            <div className="flex flex-col gap-1">
                {/* match title  */}
                <div className="flex justify-between items-center gap-2">
                    <p className='text-xs'>{name.length<46?name:`${name.slice(0,45)}...`}</p>
                    <p className='text-sm badge badge-success'>{matchType ? matchType : 'odi'}</p>
                </div>
                {/* score  */}
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center'>
                        <Image src={teamInfo[1].img} height='20' width='20' className='rounded-full' alt='team img' />
                        <p className='ml-4'>{teamInfo[1].shortname ? teamInfo[1].shortname : teams[0]}</p>
                        <div className='flex ml-3'>
                            <p>{score[0]?.r}/</p>
                            <p>{score[0]?.w}</p>
                            <p className='ml-2'>({score[0]?.o})</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <Image src={teamInfo[0].img} height='20' width='20' className='rounded-full' alt='team img' />
                        <p className='ml-4'>{teamInfo[0].shortname ? teamInfo[0].shortname : teams[1]}</p>
                        <div className='flex ml-4'>

                            <p>{score[1]?.r}/</p>
                            <p>{score[1]?.w}</p>
                            <p className='ml-2'>({score[1]?.o})</p>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-red-500'>{status}</p>
                    <p className='text-green-500 text-xs'>Please refresh your page to see latest update!</p>
                </div>
            </div>
        </div>
    );
};

export default SingleScore;