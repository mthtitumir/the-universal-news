"use client"
import ReactApexChart from "react-apexcharts";
import Headline from "../miniComponents/Headline";

const ReadersChart = () => {
    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
        }
    };
    const series = [
        {
            name: "Chart",
            data: [2130, 3140, 4145, 5150, 7149, 8160, 9170, 10191, 11104]
        }
    ]

    const pieSeries = [44, 55, 41, 17, 15, 49];
    const chartOptions = {
        labels: ['10-15 years', '15-30 years', '30-45 years', '45-60 years', '60-80 years', '80+ years']
    }


    return (
        <div className="border border-cyan-500 p-3 rounded-lg">
            <div className="grid grid-cols-9 gap-3">
                <div className="col-span-5">
                    <Headline headline={"Visitors"} path={""} />
                    <div>
                        <ReactApexChart series={series} options={options} type="bar" />
                    </div>
                </div>
                <div className="col-span-4">
                    <Headline headline={"Audience"} path={""} />
                    <div className="flex flex-col">
                        <ReactApexChart series={pieSeries} options={chartOptions} type="pie" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadersChart;