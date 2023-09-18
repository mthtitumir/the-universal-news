"use client"
import { generatePrice } from '@/data/generateSharePrice';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const ShareUpdate = () => {
  const [stockData, setStockData] = useState({ name: '', number: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomStockData = generatePrice();
      setStockData(randomStockData);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='flex gap-3 items-center text-xs my-1 animate-pulse"'>
      <p>{stockData.name}</p>
      <p className={stockData.number > 0 ? "text-green-500" : "text-red-500"}>{stockData.number}%</p>
      <p className={stockData.number > 0 ? "text-green-500" : "text-red-500"}>{stockData.number > 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</p>
    </div>
  );
};

export default ShareUpdate;