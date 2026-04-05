import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Oct", income: 4000, expenses: 2400 },
  { name: "Nov", income: 3000, expenses: 2000 },
  { name: "Dec", income: 5000, expenses: 3000 },
  { name: "Jan", income: 4500, expenses: 2800 },
  { name: "Feb", income: 5200, expenses: 3200 },
  { name: "Nov", income: 3000, expenses: 2000 },
  { name: "Mar", income: 4800, expenses: 2900 },
];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-xl shadow-md text-xs">
        <p className="font-semibold">{payload[0].payload.name}</p>
        <p className="text-purple-600">Income: ${payload[0].value}</p>
        <p className="text-pink-500">Expenses: ${payload[1].value}</p>
      </div>
    );
  }
  return null;
}

function CustomBarChart() {
  return (
    <div className="h-44 w-full">
      <ResponsiveContainer>
        <BarChart data={data} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6B7280" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="income" fill="#7C3AED" radius={[8, 8, 0, 0]} />
          <Bar dataKey="expenses" fill="#EC4899" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomBarChart;