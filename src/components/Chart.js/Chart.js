import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "02.07.21",
    high: 700.0,
    low: 673.26,
  },
  {
    name: "06.07.21",
    high: 684.0,
    low: 651.4002,
  },
  {
    name: "07.07.21",
    high: 665.7,
    low: 638.32,
  },
  {
    name: "08.07.21",
    high: 654.43,
    low: 620.46,
  },
  {
    name: "09.07.21",
    high: 658.91,
    low: 644.69,
  },
  {
    name: "12.07.21",
    high: 687.24,
    low: 662.161,
  },
  {
    name: "13.07.21",
    high: 693.28,
    low: 666.2958,
  },
  {
    name: "14.07.21",
    high: 678.6099,
    low: 652.84,
  },
  {
    name: "15.07.21",
    high: 666.14,
    low: 637.88,
  },
  {
    name: "16.07.21",
    high: 656.6999,
    low: 642.2,
  },
];

const Chart = () => {
  return (
    <LineChart
      width={700}
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
      <YAxis type="number" domain={[610, 710]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="high" stroke="#82ca9d" />
      <Line
        type="monotone"
        dataKey="low"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default Chart;
