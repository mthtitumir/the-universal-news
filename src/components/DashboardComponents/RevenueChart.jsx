"use client"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Headline from '../miniComponents/Headline';
const data = [
    { name: 'Page A', Subscription: 400 },
    { name: 'Page B', Subscription: 300 },
    { name: 'Page C', Subscription: 200 },
    { name: 'Page D', Subscription: 300 },
    { name: 'Page F', Subscription: 500 },
];

const RevenueChart = () => {
    return (
        <div className="border border-cyan-500 p-3 rounded-lg">
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <Headline headline={"Revenue from Subscription"} />
                    <ResponsiveContainer width={"100%"}  height={300} >
                    <LineChart  data={data}>
                        <Line type="monotone" dataKey="Subscription" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <Headline headline={"Revenue from Jobs"} />
                    <ResponsiveContainer width={"100%"} height={300} >
                    <LineChart  data={data}>
                        <Line type="monotone" dataKey="Subscription" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
export default RevenueChart;