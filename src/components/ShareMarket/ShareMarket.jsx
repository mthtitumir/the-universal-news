"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const StockChart = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'Stock Market Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const series = [
    {
      data: data.map(item => ({
        x: new Date(item.date).getTime(),
        y: [item.open, item.high, item.low, item.close],
      })),
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
    {isClient && <DynamicApexChart options={options} series={series} type="candlestick" height={400} />}
  </div>
  );
};

export default StockChart;
