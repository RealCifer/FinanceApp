import { Search, SlidersHorizontal } from "lucide-react";
import BottomNav from "../components/layout/BottomNav";

const transactions = [
  {
    name: "Whole Foods Market",
    category: "Food",
    amount: "-$52.40",
    color: "bg-green-500",
  },
  {
    name: "Starbucks",
    category: "Coffee",
    amount: "-$8.50",
    color: "bg-orange-500",
  },
  {
    name: "Uber",
    category: "Transport",
    amount: "-$18.30",
    color: "bg-blue-500",
  },
  {
    name: "Netflix",
    category: "Entertainment",
    amount: "-$15.99",
    color: "bg-red-500",
  },
   {
    name: "Starbucks",
    category: "Coffee",
    amount: "$8.50",
    color: "bg-orange-500",
  },
   {
    name: "Starbucks",
    category: "Coffee",
    amount: "-$8.50",
    color: "bg-orange-500",
  },
   {
    name: "Whole Foods Market",
    category: "Food",
    amount: "-$52.40",
    color: "bg-green-500",
  },
  {
    name: "Salary Deposit",
    category: "Income",
    amount: "+$4200.00",
    color: "bg-purple-500",
  },
];

function Transactions() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] flex justify-center">
      <div className="w-full max-w-6xl px-4 md:px-8 pb-28">

        <h1 className="text-2xl md:text-3xl font-semibold pt-6 mb-6">
          Transactions
        </h1>

        <div className="flex gap-3 items-center mb-6">
          <div className="flex items-center bg-white rounded-xl px-4 py-3 flex-1 shadow-sm focus-within:shadow-md transition-all">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="outline-none w-full text-sm"
            />
          </div>

          <div className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
            <SlidersHorizontal className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        <div className="space-y-4">
          {transactions.map((tx, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 flex justify-between items-center shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${tx.color} rounded-full flex items-center justify-center text-white font-bold`}
                >
                  {tx.name.charAt(0)}
                </div>

                <div>
                  <p className="font-medium text-gray-800">{tx.name}</p>
                  <p className="text-sm text-gray-400">{tx.category}</p>
                </div>
              </div>

              <div className="text-right">
                <p
                  className={`font-semibold ${
                    tx.amount.includes("+")
                      ? "text-green-600"
                      : "text-gray-800"
                  }`}
                >
                  {tx.amount}
                </p>
                <p className="text-xs text-gray-400">Today</p>
              </div>
            </div>
          ))}
        </div>

        <BottomNav />
      </div>
    </div>
  );
}

export default Transactions;