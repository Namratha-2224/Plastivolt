import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: "Waste Collection & Sorting",
    description: "AI-powered computer vision systems identify and sort different waste types, improving recycling rates and ensuring optimal feedstock for energy conversion.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/waste-collection"
  },
  {
    title: "Pre-treatment & Processing",
    description: "Machine learning algorithms optimize shredding, drying, and preparation processes based on waste composition to maximize energy potential.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/pre-treatment"
  },
  {
    title: "Thermal Conversion",
    description: "AI monitors and controls combustion parameters in real-time, ensuring optimal temperature, oxygen levels, and residence time for maximum energy extraction.",
    image: "https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/thermal-conversion"
  },
  {
    title: "Energy Generation",
    description: "Predictive analytics optimize turbine operation and grid integration, while AI balances steam production with electricity generation needs.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/energy-generation"
  },
  {
    title: "Emissions Control",
    description: "AI systems continuously monitor and adjust pollution control systems to minimize environmental impact while maintaining efficiency.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/emissions-control"
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The AI-Enhanced Waste-to-Energy Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Artificial intelligence transforms each stage of the waste-to-electricity conversion process, improving efficiency, reducing emissions, and maximizing energy output.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="rounded-lg shadow-md w-full h-64 object-cover" 
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>

                <Link 
                  to={step.link} 
                  className="text-green-600 mt-4 inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
