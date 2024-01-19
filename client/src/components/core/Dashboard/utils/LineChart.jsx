
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", uv: 0 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr" },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
  { name: "Aug", uv: 2390 },
  { name: "Sep", uv: 3490 },
  { name: "Oct", uv: 3490 },
  { name: "Nov", uv: 1890 },
  { name: "Dec", uv: 3490 },
];

export default function LineChartOD() {
  return (
    <div style={{width:'100%'}}>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          connectNulls
          type="monotone" 
          dataKey="uv"
          stroke="var(--bg-color)"
          fill="var(--bg-color)"
        />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
