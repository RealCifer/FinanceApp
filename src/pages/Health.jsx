import BottomNav from "../components/layout/BottomNav";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Health() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] flex justify-center">
      <div className="w-full max-w-6xl px-4 md:px-8 pb-28">

        <div className="pt-6 mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Financial Health
          </h1>
          <p className="text-sm text-gray-400">
            Your money wellness snapshot
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">

          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.01]">
            <p className="text-sm opacity-80 mb-4">Your Health Score</p>

            <div className="w-32 h-32 md:w-40 md:h-40">
              <CircularProgressbar
                value={85}
                text={`85`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "rgba(255,255,255,0.2)",
                })}
              />
            </div>

            <div className="mt-4">
              <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                Outstanding Health
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <h3 className="font-semibold mb-2">Overview</h3>
            <p className="text-sm text-gray-600">
              You are maintaining strong financial discipline with consistent
              savings and controlled spending habits.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <p>💰 Savings Rate: 51%</p>
              <p>📉 Expenses Trend: Decreasing</p>
              <p>📊 Stability: Good</p>
            </div>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="bg-green-100 border border-green-200 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
            <p className="font-semibold">Spending Habits</p>
            <p className="text-sm text-gray-600">Excellent</p>
            <ul className="text-xs mt-2 text-gray-600 space-y-1">
              <li>✔ Under budget</li>
              <li>✔ Consistent saving</li>
              <li>✔ Low impulse buys</li>
            </ul>
          </div>

          <div className="bg-purple-100 border border-purple-200 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
            <p className="font-semibold">Savings Rate</p>
            <p className="text-sm text-gray-600">Outstanding</p>
            <ul className="text-xs mt-2 text-gray-600 space-y-1">
              <li>✔ 51% of income saved</li>
              <li>✔ Emergency fund ready</li>
              <li>✔ Goals on track</li>
            </ul>
          </div>

          <div className="bg-blue-100 border border-blue-200 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
            <p className="font-semibold">Financial Stability</p>
            <p className="text-sm text-gray-600">Good</p>
            <ul className="text-xs mt-2 text-gray-600 space-y-1">
              <li>✔ Stable income</li>
              <li>✔ Low debt ratio</li>
              <li>⚠ Could diversify more</li>
            </ul>
          </div>

          <div className="bg-yellow-100 border border-yellow-200 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
            <p className="font-semibold">Improve Your Score</p>
            <ul className="text-sm mt-2 text-gray-600 space-y-1">
              <li>• Diversify investments</li>
              <li>• Automate bill payments</li>
              <li>• Review subscriptions</li>
            </ul>
          </div>

        </div>

        <BottomNav />
      </div>
    </div>
  );
}

export default Health;