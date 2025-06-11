
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", actual: 20000, forecast: 21000 },
  { month: "Feb", actual: 22000, forecast: 21500 },
  { month: "Mar", actual: 25000, forecast: 25500 },
];

const ForecastChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto mb-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Forecast Visualization</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="actual" stroke="#6366f1" strokeWidth={2} />
          <Line type="monotone" dataKey="forecast" stroke="#ec4899" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;
