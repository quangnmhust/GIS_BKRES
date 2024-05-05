import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const data = [
  {
    month: "Jan",
    loss: 70,
    profit: 100,
    loss1: 40,
    profit1: 58,
  },
  {
    month: "Feb",
    loss: 55,
    profit: 85,
    loss1: 40,
    profit1: 58,
  },
  {
    month: "Mar",
    loss: 35,
    profit: 90,
    loss1: 40,
    profit1: 58,
  },
  {
    month: "April",
    loss: 90,
    profit: 70,
    loss1: 40,
    profit1: 58,
  },
  {
    month: "May",
    loss: 55,
    profit: 80,
    loss1: 40,
    profit1: 58,
  },
  {
    month: "Jun",
    loss: 30,
    profit: 50,
    loss1: 40,
    profit1: 58,
  },
  {
    month: "Jul",
    loss: 32,
    profit: 75,
    loss1: 40,
    profit1: 58,
  },
  {
    month: "Aug",
    loss: 62,
    profit: 86,
    loss1: 40,
    profit1: 58,
  },
  {
    month: "Sep",
    loss: 55,
    profit: 78,
    loss1: 40,
    profit1: 58,
  },
];

const AreaBarChart = () => {
  const { theme } = useContext(ThemeContext);

  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Line Chart</h5>
        <div className="chart-info-data">
          <h1 className="info-data-value">$50.4K</h1>
          <div className="info-data-text">
            <FaArrowUpLong />
            <p>last month.</p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <Area type="monotone" dataKey="loss" stroke="#8884d8" fill="#82ca9d"/>
            <Area type="monotone" dataKey="profit" stroke="#8884d8" />
            <Area type="monotone" dataKey="profit1" stroke="#8884d8" />
            <Area type="monotone" dataKey="loss1" stroke="#8884d8" />
            {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
            <XAxis
              padding={{ left: 10 }}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              // tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={5}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
