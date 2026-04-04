import BottomNav from "../components/layout/BottomNav";

const goals = [
  {
    title: "Summer Vacation",
    saved: 3400,
    total: 5000,
    color: "bg-blue-500",
  },
  {
    title: "Emergency Fund",
    saved: 7800,
    total: 10000,
    color: "bg-green-500",
  },
  {
    title: "New Car",
    saved: 8500,
    total: 25000,
    color: "bg-purple-500",
  },
  {
    title: "Online Course",
    saved: 1650,
    total: 2000,
    color: "bg-orange-500",
  },
  {
    title: "New Laptop",
    saved: 1200,
    total: 2000,
    color: "bg-indigo-500",
  },
  {
    title: "Home Setup",
    saved: 2200,
    total: 5000,
    color: "bg-pink-500",
  },
  {
    title: "Wedding Fund",
    saved: 15000,
    total: 30000,
    color: "bg-rose-500",
  },
  {
    title: "Investment Portfolio",
    saved: 9500,
    total: 20000,
    color: "bg-teal-500",
  },
  {
    title: "Travel Europe",
    saved: 4200,
    total: 8000,
    color: "bg-cyan-500",
  },
  {
    title: "Bike Upgrade",
    saved: 900,
    total: 2500,
    color: "bg-yellow-500",
  },
];

function Goals() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] flex justify-center">
      <div className="w-full max-w-6xl px-4 md:px-8 pb-28">

        <div className="flex justify-between items-center pt-6 mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Goals</h1>
          <button className="bg-purple-600 text-white w-10 h-10 rounded-full text-xl shadow-md hover:scale-110 transition-all">
            +
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-6 rounded-3xl shadow-xl mb-6 transition-all duration-300 hover:scale-[1.01]">
          <p className="text-sm opacity-80">Total Progress</p>
          <h2 className="text-2xl md:text-3xl font-bold mt-1">$21,350 saved</h2>

          <div className="mt-4">
            <div className="h-2 bg-white/30 rounded-full">
              <div className="h-2 bg-white rounded-full w-[51%]" />
            </div>
            <p className="text-xs mt-2 opacity-80">51% of total goals</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {goals.map((goal, index) => {
            const percent = Math.round((goal.saved / goal.total) * 100);

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-800">{goal.title}</p>
                    <p className="text-xs text-gray-400">
                      ${goal.saved} of ${goal.total}
                    </p>
                  </div>
                  <p className="text-sm font-semibold">{percent}%</p>
                </div>

                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-2 ${goal.color} rounded-full transition-all duration-500`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 bg-purple-100 border border-purple-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-md">
          <p className="font-semibold">💡 Tip</p>
          <p className="text-sm text-gray-600">
            Set up auto-save to reach goals faster. Just $100/week gets you there!
          </p>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}

export default Goals;