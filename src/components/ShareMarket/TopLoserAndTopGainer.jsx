import React from 'react';

const TopLoserAndTopGainer = () => {
    return (
        <div className='md:grid grid-cols-3 gap-3'>
            
            <div className="overflow-x-auto">
                <h1>MOST ACTIVES</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Stock</th>
                            <th>Latest</th>
                            <th>% Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>TESLA INC.</td>
                            <td>$223.25</td>
                            <td className='text-red-500'>-1.0%</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            
                            <td>JOHNSON & JOHNSON</td>
                            <td>$215.05</td>
                            <td className='text-green-500'>+4.0%</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                        
                            <td>AMAZON.COM INC.</td>
                            <td>$135.09	</td>
                            <td className='text-green-500'>+0.0%</td>
                        </tr>
                        <tr>
                        
                            <td>APPLE INC.</td>
                            <td>$177.03	</td>
                            <td className='text-green-500'>+0.3%</td>
                        </tr>
                        <tr>
                        
                            <td>NVIDIA CORP.</td>
                            <td>$435.28	</td>
                            <td className='text-green-500'>+0.1%</td>
                        </tr>
                        <tr>
                        
                            <td>CVS HEALTH CORP.</td>
                            <td>$67.28	</td>
                            <td className='text-red-500'>-7.5%</td>
                        </tr>
                        <tr>
                        
                            <td>WALMART INC.</td>
                            <td>$160.31	</td>
                            <td className='text-green-500'>+0.7%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto">
                <h1>TOP GAINERS</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Stock</th>
                            <th>Latest</th>
                            <th>% Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr >
                            <td>CISCO SYSTEMS INC.</td>
                            <td>$232.25</td>
                            <td className='text-green-500'>+2.0%</td>
                        </tr>
                        {/* row 2 */}
                        <tr className='text-sm'>
                            
                            <td>BALL CORP.</td>
                            <td>$210.05</td>
                            <td className='text-green-500'>+3.0%</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                        
                            <td>SYNOPSYS INC.</td>
                            <td>$136.09	</td>
                            <td className='text-green-500'>+4.0%</td>
                        </tr>
                        <tr>
                        
                            <td>EQT CORP.</td>
                            <td>$139.03	</td>
                            <td className='text-green-500'>+5.3%</td>
                        </tr>
                        <tr>
                        
                            <td>MARATHON OIL CORP.</td>
                            <td>$448.28	</td>
                            <td className='text-green-500'>+2.1%</td>
                        </tr>
                        <tr>
                        
                            <td>HESS CORP.</td>
                            <td>$65.28	</td>
                            <td className='text-green-500'>7.5%</td>
                        </tr>
                        <tr>
                        
                            <td>DISCOVER FINANCIAL SERVICES</td>
                            <td>$170.31	</td>
                            <td className='text-green-500'>+2.7%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto">
                <h1>TOP LOSERS</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Stock</th>
                            <th>Latest</th>
                            <th>% Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>CVS HEALTH CORP.</td>
                            <td>$67.28</td>
                            <td className='text-red-500'>-7.5%</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            
                            <td>THE CIGNA GROUP</td>
                            <td>$274.06	</td>
                            <td className='text-red-500'>-5.2%</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                        
                            <td>CARDINAL HEALTH INC.</td>
                            <td>$87.34	</td>
                            <td className='text-red-500'>-3.4%</td>
                        </tr>
                        <tr>
                        
                            <td>RESMED INC.</td>
                            <td>$168.82	</td>
                            <td className='text-red-500'>-2.8%</td>
                        </tr>
                        <tr>
                        
                            <td>FIRST SOLAR INC.</td>
                            <td>$186.59</td>
                            <td className='text-red-500'>-2.8%</td>
                        </tr>
                        <tr>
                        
                            <td>MCKESSON CORP.</td>
                            <td>$421.19	</td>
                            <td className='text-red-500'>-2.0%</td>
                        </tr>
                        <tr>
                        
                            <td>PAYPAL HOLDINGS INC.</td>
                            <td>$58.70</td>
                            <td className='text-red-500'>-1.6%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          
        </div>
    );
};

export default TopLoserAndTopGainer;