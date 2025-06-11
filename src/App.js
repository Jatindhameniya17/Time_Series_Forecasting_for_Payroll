
import React from "react";
import FileUploader from "./components/FileUploader";
import ForecastChart from "./components/ForecastChart";
import ScenarioAdjustment from "./components/ScenarioAdjustment";
import ModelEvaluation from "./components/ModelEvaluation";

function App() {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Payroll Forecasting Dashboard</h1>
      <FileUploader />
      <ForecastChart />
      <ScenarioAdjustment />
      <ModelEvaluation />
    </div>
  );
}

export default App;
