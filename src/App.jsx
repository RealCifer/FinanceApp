import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import Goals from "./pages/Goals";
import Health from "./pages/Health";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="/app/transactions" element={<Transactions />} />
        <Route path="/app/insights" element={<Insights />} />
        <Route path="/app/goals" element={<Goals />} />
        <Route path="/app/health" element={<Health />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;