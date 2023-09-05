"use client"
import ReactApexChart from "react-apexcharts";

const Test = () => {
  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };
  const series = [
    {
      name: "Readers",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 104]
    }
  ]


  return (
    <div>
      <h1>Hello from test</h1>
      <ReactApexChart series={series} options={options} type="bar" />
    </div>
  );
};

export default Test;