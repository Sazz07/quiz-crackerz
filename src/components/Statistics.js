import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const loadData = useLoaderData();
    const topicsData = loadData.data;

    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
            <h1 className='text-center text-4xl my-5 text-emerald-600 font-semibold'>Statistic Page</h1>
            <div style={{ width: '100%', height: 500 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={topicsData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#82ca9d" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;