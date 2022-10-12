import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import './ShowChart.css'



const ShowChart = ({quiz}) => {
    const {total, name} = quiz

    const data = [
        {
            name: name,
            total: total,
        }
    ]
    return (
        <div>
            <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="total" stroke="#82ca9d" /> */}
        </LineChart>
        </div>
    );
};

export default ShowChart;