import React from 'react';
import { Link } from 'react-router-dom';

const EmissionsControl = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Emissions Control</h1>
      <p className="text-gray-700 text-lg mb-8">
        AI systems continuously monitor and adjust pollution control systems to minimize environmental impact while maintaining efficiency.
      </p>

      <img 
        src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        alt="Emissions Control"
        className="rounded-lg shadow-lg w-full h-96 object-cover mb-8"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How AI Minimizes Emissions</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Real-Time Gas Monitoring:</strong> Detects CO2, NOx, and SO2 levels.</li>
          <li><strong>Automated Filters:</strong> Adjusts air purification based on emissions data.</li>
          <li><strong>AI Predictions:</strong> Prevents system failures that lead to high emissions.</li>
        </ul>
      </section>

      <Link to="/process" className="text-green-600 text-lg font-medium hover:underline">← Back to Process</Link>
    </div>
  );
};

export default EmissionsControl;
