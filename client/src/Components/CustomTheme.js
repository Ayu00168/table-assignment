import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "../jsondata.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CustomTheme = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://localhost:5000/api/v1/data/getData"
      );
      console.log(data);
    };

    getData();
  });

  return (
    <div>
      <h1>Hello</h1>

      <BarChart
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
        <XAxis dataKey="sector" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="intensity" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default CustomTheme;
