import React from 'react';
import { Zap, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Transforming Waste into Energy with AI
            </h1>
            <p className="text-xl mb-8">
              Leveraging artificial intelligence to optimize waste-to-electricity conversion for a cleaner, more sustainable future.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#process" 
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Learn How
              </a>
              <a 
                href="#ai-benefits" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
              >
                AI Benefits
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/30 p-8 rounded-2xl flex items-center justify-center">
                <Zap className="h-16 w-16 text-white mr-4" />
                <Brain className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;