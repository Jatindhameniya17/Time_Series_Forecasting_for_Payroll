
import React, { useState } from "react";

const ScenarioAdjustment = () => {
  const [adjustment, setAdjustment] = useState(0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto mb-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Scenario Adjustment</h2>
      <label className="block mb-2">Expected Salary Increase (%)</label>
      <input
        type="number"
        value={adjustment}
        onChange={(e) => setAdjustment(e.target.value)}
        className="border px-4 py-2 rounded w-full"
      />
      <button
        onClick={() => alert(`Forecast adjusted by ${adjustment}%`)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Apply Changes
      </button>
    </div>
  );
};

export default ScenarioAdjustment;
