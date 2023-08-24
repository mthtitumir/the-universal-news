"use client"
import React from 'react';
import Image from 'next/image';
const SingleScore = ({ singleScore }) => {
    const { teams, teamInfo, score, name, status, matchType } = singleScore;
    return (
        <div className="shadow-xl p-5 border my-3">
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center gap-2">
                    <p className='text-xs'>
                        {name.length < 47
                            ? name
                            : `${name.slice(0, 46)}...`}
                    </p>
                    <p className='text-sm badge badge-success text-white'>
                        {matchType ? matchType : 'odi'}
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center'>
                        {teamInfo && teamInfo[1] && (
                            <Image
                                src={teamInfo[1].img || ''}
                                height='20'
                                width='20'
                                className='rounded-full'
                                alt='team img'
                            />
                        )}
                        <p className='ml-4'>
                            {teamInfo && teamInfo[1]
                                ? teamInfo[1].shortname
                                : teams[0]}
                        </p>
                        <div className='flex ml-3'>
                            {score && score[0] && (
                                <>
                                    <p>{score[0]?.r}/</p>
                                    <p>{score[0]?.w}</p>
                                    <p className='ml-2'>({score[0]?.o})</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        {teamInfo && teamInfo[0] && (
                            <Image
                                src={teamInfo[0].img || ''}
                                height='20'
                                width='20'
                                className='rounded-full'
                                alt='team img'
                            />
                        )}
                        <p className='ml-4'>
                            {teamInfo && teamInfo[0]
                                ? teamInfo[0].shortname
                                : teams[1]}
                        </p>
                        <div className='flex ml-4'>
                            {score && score[1] && (
                                <>
                                    <p>{score[1]?.r}/</p>
                                    <p>{score[1]?.w}</p>
                                    <p className='ml-2'>({score[1]?.o})</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-red-500'>{status}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleScore;