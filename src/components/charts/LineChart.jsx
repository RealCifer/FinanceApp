import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Tue", value: 200 },
  { day: "Wed", value: 150 },
  { day: "Thu", value: 300 },
  { day: "Fri", value: 400 },
  { day: "Sat", value: 500 },
  { day: "Sun", value: 250 },
  { day: "Mon", value: 200 },

];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-lg shadow-md text-xs">
        <p className="font-medium">{payload[0].payload.day}</p>
        <p className="text-purple-600">${payload[0].value}</p>
      </div>
    );
  }
  return null;
}

function CustomLineChart() {
  return (
    <div className="h-44 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6B7280" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#7C3AED"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomLineChart;