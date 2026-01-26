import React from 'react';
import { Link } from 'react-router-dom';

const WasteCollection = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-green-700 mb-6">Waste Collection & Sorting</h1>
      <p className="text-gray-700 text-lg mb-8">
        AI-powered computer vision systems identify and sort different waste types, improving recycling rates and ensuring optimal feedstock for energy conversion.
      </p>

      {/* Image */}
      <div className="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt="Waste Collection & Sorting"
          className="rounded-lg shadow-lg w-full h-96 object-cover"
        />
      </div>

      {/* How It Works Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How AI Enhances Waste Sorting</h2>
        <p className="text-gray-600 mb-4">
          Traditional waste sorting is inefficient and labor-intensive. AI revolutionizes this process through:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Computer Vision:</strong> Identifies and classifies waste types (plastic, paper, metal, organic) using image recognition.</li>
          <li><strong>Robotic Arms:</strong> Automated sorting based on AI-detected material types.</li>
          <li><strong>Sensor-Based Sorting:</strong> AI-enhanced sensors detect material composition for precise segregation.</li>
        </ul>
      </section>

      {/* AI in Action */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">AI in Action</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="AI Camera Sorting Waste"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <p className="text-gray-600 mt-2">AI cameras detect different waste materials in real time.</p>
          </div>
          <div>
            <img 
              src="C:\Users\HP\OneDrive\ドキュメント\Plastivolt\The-Role-of-Robotics-in-Waste-Sorting-and-Recycling.jpg" 
              alt="Robotic Arm Sorting Waste"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <p className="text-gray-600 mt-2">Robotic arms separate waste based on AI analysis.</p>
          </div>
        </div>
      </section>

      {/* Benefits of AI Waste Sorting */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Benefits of AI-Powered Waste Sorting</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Increased Recycling Efficiency:</strong> More accurate material separation leads to better recycling.</li>
          <li><strong>Reduced Human Labor:</strong> Automation reduces the need for manual sorting.</li>
          <li><strong>Less Contamination:</strong> Precise sorting prevents cross-contamination of recyclable materials.</li>
          <li><strong>Optimized Waste-to-Energy Conversion:</strong> Cleaner waste streams improve energy recovery.</li>
        </ul>
      </section>

      {/* Future Prospects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Future of AI in Waste Sorting</h2>
        <p className="text-gray-600">
          As AI technology advances, future developments in waste sorting could include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Smart Bin Integration:</strong> AI-powered bins sorting waste at the point of disposal.</li>
          <li><strong>Blockchain for Waste Tracking:</strong> Ensuring transparency in waste management.</li>
          <li><strong>Advanced AI Algorithms:</strong> More precise material recognition with deep learning.</li>
        </ul>
      </section>

      {/* Back Button */}
      <Link to="/process" className="text-green-600 mt-4 inline-block text-lg font-medium hover:underline">← Back to Process</Link>
    </div>
  );
};

export default WasteCollection;
