import { Home, Receipt, BarChart3, Target, Heart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { icon: Home, label: "Home", path: "/app" },
    { icon: Receipt, label: "Transactions", path: "/app/transactions" },
    { icon: BarChart3, label: "Insights", path: "/app/insights" },
    { icon: Target, label: "Goals", path: "/app/goals" },
    { icon: Heart, label: "Health", path: "/app/health" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border z-50">
      <div className="flex justify-between px-4 py-2">

        {tabs.map((tab, i) => {
          const Icon = tab.icon;
          const active = location.pathname === tab.path;

          return (
            <button
              key={i}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center justify-center flex-1 py-2 transition-all"
            >
              <Icon
                className={`w-5 h-5 mb-1 transition-all ${
                  active
                    ? "text-purple-600 scale-110"
                    : "text-gray-400"
                }`}
              />

              <span
                className={`text-[11px] font-medium transition-all ${
                  active
                    ? "text-purple-600"
                    : "text-gray-400"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}

      </div>
    </div>
  );
}

export default BottomNav;