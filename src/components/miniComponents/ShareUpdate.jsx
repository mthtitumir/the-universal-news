"use client"
import { generatePrice } from '@/data/generateSharePrice';
import React, { useEffect, useState } from 'react';

const ShareUpdate = () => {
    const [stockData, setStockData] = useState({ name: '', number: '' });

    useEffect(() => {
        const interval = setInterval(() => {
          const randomStockData = generatePrice();
          setStockData(randomStockData);
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);
    return (
        <div className='flex gap-8'>
            <p>{stockData.name}</p>
            <p>{stockData.number}%</p>
        </div>
    );
};

export default ShareUpdate;