import React from "react";
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
class AreaRechartComponent extends React.Component {
  data = [
    {
      name: "Jan 2019",
      hired: 3432,
      not_hired: 2342,
    },
    {
      name: "Feb 2019",
      hired: 2342,
      not_hired: 7746,
    },
    {
      name: "Mar 2019",
      hired: 4565,
      not_hired: 2556,
    },
    {
      name: "Apr 2019",
      hired: 6654,
      not_hired: 4465,
    },
    {
      name: "May 2019",
      hired: 8765,
      not_hired: 5553,
    },
  ];
  render() {
    return (
      <AreaChart
        width={730}
        height={250}
        data={this.data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8a191b" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8a191b" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="hired"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="not_hired"
          stroke="#8a191b"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    );
  }
}
export default AreaRechartComponent;
