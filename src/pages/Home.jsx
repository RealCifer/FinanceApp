import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 flex justify-center">
      <div className="w-full max-w-6xl px-6 flex flex-col items-center justify-center text-white text-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Take Control of Your Finances Goals
        </h1>

        <p className="text-white/80 mb-8 max-w-xl text-sm md:text-base">
          Track spending, manage goals, and improve your financial health - all in one place.
        </p>

        <button
          onClick={() => navigate("/app")}
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Get Started
        </button>

      </div>
    </div>
  );
}

export default Home;