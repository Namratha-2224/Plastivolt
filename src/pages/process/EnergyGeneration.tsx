import React from 'react';
import { Link } from 'react-router-dom';

const EnergyGeneration = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Energy Generation</h1>
      <p className="text-gray-700 text-lg mb-8">
        Predictive analytics optimize turbine operation and grid integration, while AI balances steam production with electricity generation needs.
      </p>

      <img 
        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        alt="Energy Generation"
        className="rounded-lg shadow-lg w-full h-96 object-cover mb-8"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">AI's Role in Energy Production</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>AI-Optimized Turbines:</strong> Adjusts power output based on demand.</li>
          <li><strong>Grid Integration:</strong> AI predicts energy consumption trends.</li>
          <li><strong>Smart Load Balancing:</strong> Ensures efficient energy distribution.</li>
        </ul>
      </section>

      <Link to="/process" className="text-green-600 text-lg font-medium hover:underline">← Back to Process</Link>
    </div>
  );
};

export default EnergyGeneration;
