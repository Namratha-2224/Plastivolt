import React from 'react';
import { Link } from 'react-router-dom';

const PreTreatment = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Pre-treatment & Processing</h1>
      <p className="text-gray-700 text-lg mb-8">
        Pre-treatment plays a crucial role in the waste-to-energy process, ensuring that waste materials are adequately prepared for efficient conversion into energy. 
        AI-powered technologies optimize shredding, drying, and sorting to maximize energy extraction and minimize waste.
      </p>

      <img 
        src="https://images.unsplash.com/photo-1581092337411-0e6d930d18f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        alt="AI-Powered Pre-treatment Process"
        className="rounded-lg shadow-lg w-full h-96 object-cover mb-8"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How AI Enhances Pre-Treatment</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>AI-Controlled Shredders:</strong> Dynamically adjust shredding intensity based on waste density, reducing energy consumption.</li>
          <li><strong>Moisture Detection Sensors:</strong> AI-driven sensors optimize drying time to ensure ideal fuel quality for combustion.</li>
          <li><strong>Automated Sorting:</strong> Machine learning algorithms classify waste in real-time, increasing recycling efficiency.</li>
          <li><strong>Predictive Maintenance:</strong> AI detects wear and tear in machinery, reducing downtime and ensuring continuous operations.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Process Flow of AI-Driven Pre-Treatment</h2>
        <img 
          src="https://images.unsplash.com/photo-1593698054589-64bdb1266ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt="AI-Powered Waste Processing"
          className="rounded-lg shadow-lg w-full h-80 object-cover mb-6"
        />
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>Step 1:</strong> Waste is fed into **AI-powered shredders** that adjust blade speed based on material type.</li>
          <li><strong>Step 2:</strong> Sensors **analyze moisture levels** and adjust drying temperatures accordingly.</li>
          <li><strong>Step 3:</strong> Automated **sorting systems separate recyclables** from non-recyclable materials.</li>
          <li><strong>Step 4:</strong> AI **predicts energy potential** based on material properties and optimizes processing.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Benefits of AI-Driven Pre-Treatment</h2>
        <img 
          src="https://images.unsplash.com/photo-1572313979456-98e3d5cb6e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt="AI Benefits in Waste Processing"
          className="rounded-lg shadow-lg w-full h-80 object-cover mb-6"
        />
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>🔹 **Higher Efficiency:** AI optimizes energy extraction from waste.</li>
          <li>🔹 **Reduced Environmental Impact:** Fewer emissions and waste materials are discarded.</li>
          <li>🔹 **Cost Savings:** Automated sorting and predictive maintenance reduce operational costs.</li>
          <li>🔹 **Improved Recycling Rates:** AI ensures more materials are diverted from landfills.</li>
        </ul>
      </section>

      <Link to="/process" className="text-green-600 text-lg font-medium hover:underline">← Back to Process</Link>
    </div>
  );
};

export default PreTreatment;
