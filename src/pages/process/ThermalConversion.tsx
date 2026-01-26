import React from 'react';
import { Link } from 'react-router-dom';

const ThermalConversion = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Thermal Conversion</h1>
      <p className="text-gray-700 text-lg mb-8">
        AI monitors and controls combustion parameters in real-time, ensuring optimal temperature, oxygen levels, and residence time for maximum energy extraction.
      </p>

      <img 
        src="https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        alt="Thermal Conversion"
        className="rounded-lg shadow-lg w-full h-96 object-cover mb-8"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">AI in Thermal Conversion</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>AI-Controlled Furnaces:</strong> Adjust fuel input and air ratios dynamically.</li>
          <li><strong>Automated Monitoring:</strong> Detects real-time combustion efficiency.</li>
          <li><strong>Predictive Maintenance:</strong> AI anticipates wear and tear in incinerators.</li>
        </ul>
      </section>

      <Link to="/process" className="text-green-600 text-lg font-medium hover:underline">← Back to Process</Link>
    </div>
  );
};

export default ThermalConversion;
