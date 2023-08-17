"use client"
import { genaretPrice } from '@/data/genaretSherePrice';
import React, { useEffect, useState } from 'react';

const RendomPrice = () => {
    const [stockData, setStockData] = useState({ name: '', number: '' });

    useEffect(() => {
        const interval = setInterval(() => {
          const randomStockData = genaretPrice();
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

export default RendomPrice;