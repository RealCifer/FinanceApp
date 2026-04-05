import BottomNav from "../components/layout/BottomNav";
import CustomBarChart from "../components/charts/BarChart";
import CustomLineChart from "../components/charts/LineChart";

function Insights() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] flex justify-center">
      <div className="w-full max-w-6xl px-4 md:px-8 pb-28">

        <h1 className="text-2xl md:text-3xl font-semibold pt-6 mb-6">
          Insights
        </h1>

        <div className="grid md:grid-cols-2 gap-4 mb-6">

          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-5 rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02]">
            <p className="text-sm opacity-80">Avg. Income</p>
            <h2 className="text-xl md:text-2xl font-bold mt-1">$8,200</h2>
            <p className="text-xs opacity-70 mt-1">+5% from last month</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-red-500 text-white p-5 rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02]">
            <p className="text-sm opacity-80">Avg. Expenses</p>
            <h2 className="text-xl md:text-2xl font-bold mt-1">$4,029</h2>
            <p className="text-xs opacity-70 mt-1">-3% from last month</p>
          </div>

        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm mb-6 transition-all duration-300 hover:shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Income vs Expenses</h3>
            <span className="text-sm text-purple-600">6M</span>
          </div>

          <CustomBarChart />

          <div className="flex justify-center gap-4 mt-3 text-sm">
            <span className="text-purple-600">● Income</span>
            <span className="text-pink-500">● Expenses</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm mb-6 transition-all duration-300 hover:shadow-xl">
          <h3 className="font-semibold mb-4">Daily Spending This Week</h3>
          <CustomLineChart />
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="bg-purple-100 border border-purple-200 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
            <p className="font-semibold">High Earner</p>
            <p className="text-sm text-gray-600">
              Your income is 25% above average
            </p>
          </div>

          <div className="bg-green-100 border border-green-200 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
            <p className="font-semibold">Smart Saver</p>
            <p className="text-sm text-gray-600">
              You save 51% of your income monthly
            </p>
          </div>

          <div className="bg-yellow-100 border border-yellow-200 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01] md:col-span-2">
            <p className="font-semibold">Weekend Spender</p>
            <p className="text-sm text-gray-600">
              60% spending happens on weekends
            </p>
          </div>

        </div>

        <BottomNav />
      </div>
    </div>
  );
}

export default Insights;