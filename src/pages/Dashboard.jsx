import BottomNav from "../components/layout/BottomNav";
import DonutChart from "../components/charts/DonutChart";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] flex justify-center">
      <div className="w-full max-w-6xl px-4 md:px-8 pb-28">

        <div className="pt-6 mb-6">
          <p className="text-gray-400 text-sm">Good morning,</p>
          <h1 className="text-2xl md:text-3xl font-semibold">Zoryvn</h1>
        </div>

        <div className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white p-6 rounded-3xl shadow-xl mb-6 overflow-hidden transition-all duration-300 hover:scale-[1.01]">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <p className="text-sm opacity-80">Total Balance</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">$12,459</h2>

          <div className="flex gap-3 mt-6">
            <div className="flex-1 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-xs opacity-70">Income</p>
              <p className="text-lg font-semibold">$8,200</p>
            </div>

            <div className="flex-1 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-xs opacity-70">Expenses</p>
              <p className="text-lg font-semibold">$3,740</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm mb-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
          <h3 className="font-semibold text-gray-800 mb-4">
            Spending This Month
          </h3>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <DonutChart />

            <div className="text-sm space-y-2 w-full md:w-auto">
              <div className="flex justify-between md:gap-6">
                <span className="text-purple-600">Food</span>
                <span>$450</span>
              </div>
              <div className="flex justify-between md:gap-6">
                <span className="text-purple-400">Shopping</span>
                <span>$320</span>
              </div>
              <div className="flex justify-between md:gap-6">
                <span className="text-purple-300">Transport</span>
                <span>$180</span>
              </div>
              <div className="flex justify-between md:gap-6">
                <span className="text-purple-200">Bills</span>
                <span>$280</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">

          <div className="bg-green-100 border border-green-200 rounded-2xl p-4 flex gap-3 items-start shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
            <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full text-sm">
              ✓
            </div>
            <div>
              <p className="font-semibold text-gray-800">Great job!</p>
              <p className="text-sm text-gray-600">
                You spent 18% less this week
              </p>
            </div>
          </div>

          <div className="bg-purple-100 border border-purple-200 rounded-2xl p-4 flex gap-3 items-start shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
            <div className="w-8 h-8 bg-purple-500 text-white flex items-center justify-center rounded-full text-sm">
              ↑
            </div>
            <div>
              <p className="font-semibold text-gray-800">Track progress</p>
              <p className="text-sm text-gray-600">
                You're 68% closer to your goal
              </p>
            </div>
          </div>

        </div>

        <BottomNav />
      </div>
    </div>
  );
}

export default Dashboard;