import React from 'react';
import { Brain, BarChart3, Cpu, Factory, Zap, Leaf } from 'lucide-react';

const AIBenefitsSection = () => {
  const benefits = [
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: "Predictive Analytics",
      description: "AI predicts waste composition and energy output potential, enabling proactive adjustments to processing parameters."
    },
    {
      icon: <Cpu className="h-6 w-6 text-white" />,
      title: "Real-time Optimization",
      description: "Machine learning algorithms continuously optimize combustion conditions, improving energy efficiency by 15-30%."
    },
    {
      icon: <Factory className="h-6 w-6 text-white" />,
      title: "Automated Operations",
      description: "AI-powered automation reduces human error, improves safety, and enables 24/7 operation with minimal supervision."
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Grid Integration",
      description: "Smart algorithms predict energy demand patterns and optimize electricity production timing for maximum grid value."
    },
    {
      icon: <Leaf className="h-6 w-6 text-white" />,
      title: "Emissions Reduction",
      description: "AI fine-tunes pollution control systems, reducing harmful emissions by up to 40% compared to conventional systems."
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "Continuous Learning",
      description: "Systems improve over time through machine learning, adapting to changing waste streams and operational conditions."
    }
  ];

  return (
    <section id="ai-benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How AI Revolutionizes Waste-to-Energy</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Artificial intelligence brings unprecedented capabilities to waste-to-electricity conversion, addressing traditional challenges and unlocking new levels of performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4">
                <div className="bg-white/20 rounded-full p-3 w-fit">
                  {benefit.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">The Future of AI in Waste-to-Energy</h3>
              <p className="text-gray-600 mb-4">
                As AI technology continues to advance, we can expect even greater improvements in waste-to-energy efficiency and environmental performance. Future systems will feature more sophisticated predictive capabilities, autonomous decision-making, and integration with smart city infrastructure.
              </p>
              <p className="text-gray-600">
                The combination of AI with other emerging technologies like IoT sensors, advanced robotics, and blockchain for waste tracking will create truly intelligent waste-to-energy ecosystems that maximize resource recovery while minimizing environmental impact.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-full blur-xl"></div>
                <div className="relative bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl">
                  <Brain className="h-20 w-20 text-white mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBenefitsSection;