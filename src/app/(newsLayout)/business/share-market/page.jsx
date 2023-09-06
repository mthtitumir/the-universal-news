import StockChart from '@/components/ShareMarket/ShareMarket';
import TopLoserAndTopGainer from '@/components/ShareMarket/TopLoserAndTopGainer';
import sampleData from '@/data/simpleData';
import React from 'react';

const ShareMarket = () => {
   
    return (
        <div className='container mx-auto my-11'>
            <h1 className='text-5xl font-bold '>Markets</h1>
            <div className="container">
                <StockChart data={sampleData} />
            </div>
            <p className='text-xl font-bold my-4'>Stock Spotlight</p>

            <div>
                <TopLoserAndTopGainer />
            </div>
            <p className='text-xl font-bold my-4'>WORLD MARKETS</p>
            <div>
                
            </div>
        </div>
    );
};

export default ShareMarket;