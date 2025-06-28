import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "A",
    value: 5
   
  },
  {
    name: "B",
    value: 1
    
  },
  {
    name: "C",
    value: 5
    
  },
  {
    name: "D",
    value: 0
  
  },
  {
    name: "E",
    value: 6
   
  },
  {
    name: "F",
    value: 2
   
 
  },
  {
    name: "G",
    value: 1
   
  },
];

export default class ChartLine extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          // width={100}
          // height={300}
          data={data}
          // margin={{
          //   top: 5,
          //   right: 10,
          //   left: 10,
          //   bottom: 5,
          // }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          {/* <Tooltip /> */}
          {/* <Legend /> */}

          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={false}
            dot={false}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
