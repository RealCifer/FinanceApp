import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food", value: 450 },
  { name: "Shopping", value: 320 },
  { name: "Transport", value: 180 },
  { name: "Travel", value: 120 },
  { name: "Bills", value: 280 },
];

const COLORS = ["#7C3AED", "#A78BFA", "#C4B5FD", "#DDD6FE"];

function DonutChart() {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="w-36 h-36 relative">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={45}
            outerRadius={65}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-xs text-gray-400">Total</p>
        <p className="text-sm font-semibold">${total}</p>
      </div>
    </div>
  );
}

export default DonutChart;