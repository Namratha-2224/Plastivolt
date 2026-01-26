import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: "30%", label: "Increase in Energy Output" },
    { value: "40%", label: "Reduction in Emissions" },
    { value: "25%", label: "Lower Operating Costs" },
    { value: "50%", label: "Less Landfill Waste" }
  ];

  return (
    <section id="stats" className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Impact of AI on Waste-to-Energy</h2>
          <p className="max-w-3xl mx-auto opacity-90">
            AI-enhanced waste-to-electricity systems deliver measurable improvements across key performance indicators.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Real-World Success Stories</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-white pl-4">
              <h4 className="text-xl font-semibold mb-2">Copenhagen Waste-to-Energy Plant</h4>
              <p className="opacity-90 mb-3">
                Implemented AI-driven combustion control and predictive maintenance, resulting in a 22% increase in energy production and 35% reduction in unplanned downtime.
              </p>
              <div className="text-sm opacity-75">Implemented in 2023</div>
            </div>
            
            <div className="border-l-4 border-white pl-4">
              <h4 className="text-xl font-semibold mb-2">Singapore NEA Facility</h4>
              <p className="opacity-90 mb-3">
                Deployed AI-powered waste sorting and process optimization, achieving 28% higher energy recovery rates and 45% lower emissions compared to conventional facilities.
              </p>
              <div className="text-sm opacity-75">Implemented in 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;