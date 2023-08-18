

import StockChart from '@/components/shere-market/ShereMarket';
import TopLosserAndTopGainer from '@/components/shere-market/TopLosserAndTopGainer';
import sampleData from '@/data/simpleData';
import React from 'react';

const ShereMarket = () => {
   
    return (
        <div className='container mx-auto my-11'>
            <h1 className='text-5xl font-bold '>Markets</h1>
            <div className="container">
                <StockChart data={sampleData} />
            </div>
            <p className='text-xl font-bold my-4'>Stock Spotlight</p>

            <div>
                <TopLosserAndTopGainer />
            </div>
            <p className='text-xl font-bold my-4'>WORLD MARKETS</p>
            <div>
                
            </div>
        </div>
    );
};

export default ShereMarket;