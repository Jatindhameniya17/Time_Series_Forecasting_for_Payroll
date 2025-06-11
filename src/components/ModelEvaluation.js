
import React from "react";

const ModelEvaluation = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto mb-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Model Evaluation</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>🔹 MAE: <strong>1450</strong></li>
        <li>🔹 RMSE: <strong>2000</strong></li>
        <li>🔹 MAPE: <strong>6.5%</strong></li>
      </ul>
    </div>
  );
};

export default ModelEvaluation;
