import React from 'react';
import Image from 'next/image';
const SingleScore = ({ liveScore }) => {
    const { teams,teamInfo, date, score,name,status,matchType } = liveScore
    return (
        <div className=" bg-base-100 shadow-xl p-4">
            <div className="relative">
                <p className='text-sm py-4'>{name}</p>
                <div className='absolute top-0 right-0 py-4'>
                <div className="badge badge-accent ml-4 ">{matchType?matchType:'odi'}</div>
                </div>
                <div className='flex items-center'>
                <Image src={teamInfo[1].img} height='20' width='20' className='rounded-full' alt='team img'/>
                <p className='ml-4'>{teamInfo[1].shortname?teamInfo[1].shortname:teams[0]}</p>
                <div className='flex ml-3'>
                    <p>{score[0]?.r}/</p>
                    <p>{score[0]?.w}</p>
                    <p className='ml-2'>({score[0]?.o})</p>
                </div>
                </div>
                <div className='flex items-center'>
                <Image src={teamInfo[0].img} height='20' width='20' className='rounded-full' alt='team img'/>
                <p className='ml-4'>{teamInfo[0].shortname?teamInfo[0].shortname:teams[1]}</p>
                <div className='flex ml-4'>
                  
                    <p>{score[1]?.r}/</p>
                    <p>{score[1]?.w}</p>
                    <p className='ml-2'>({score[1]?.o})</p>
                </div>
                
                </div>
                <p className='text-sm py-4'>{status}</p>
                <p className='text-red-500'>!!please refresh your page to see latest update or pres control + f5</p>
            </div>
        </div>
    );
};

export default SingleScore;