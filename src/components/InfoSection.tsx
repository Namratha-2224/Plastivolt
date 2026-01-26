import React from 'react';
import { Recycle, Zap, Leaf } from 'lucide-react';

const InfoSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Waste to Electricity: A Sustainable Solution</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Converting waste to electricity is a powerful approach to addressing two critical challenges: waste management and renewable energy generation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
              <Recycle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Waste Reduction</h3>
            <p className="text-gray-600">
              Diverting waste from landfills reduces methane emissions and land use while addressing growing waste management challenges in urban areas.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
              <Zap className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Clean Energy</h3>
            <p className="text-gray-600">
              Converting waste to electricity provides a reliable, renewable energy source that can help reduce dependence on fossil fuels and lower carbon emissions.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Circular Economy</h3>
            <p className="text-gray-600">
              Waste-to-energy systems embody circular economy principles by transforming what was once considered worthless into valuable energy resources.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
          <p className="text-gray-600 mb-4">
            Traditional waste-to-energy processes face efficiency challenges, inconsistent waste composition, and operational complexities that limit their potential. These facilities must balance environmental concerns with energy production goals.
          </p>
          <p className="text-gray-600">
            This is where artificial intelligence comes in—transforming how we convert waste to electricity by optimizing every step of the process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;