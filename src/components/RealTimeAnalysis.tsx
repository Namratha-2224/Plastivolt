import React, { useState, useEffect } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { BarChart3, Wind, Droplets, Flame, AlertTriangle } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Mock data generator for real-time simulation
const generateRandomData = (min: number, max: number, previous?: number) => {
  // If previous value exists, generate a value that's not too far from it
  if (previous !== undefined) {
    const maxChange = (max - min) * 0.1; // Max 10% change
    const change = (Math.random() * maxChange * 2) - maxChange;
    const newValue = Math.max(min, Math.min(max, previous + change));
    return parseFloat(newValue.toFixed(2));
  }
  
  // Otherwise generate a random value
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

const RealTimeAnalysis = () => {
  // State for gas data
  const [gasData, setGasData] = useState({
    co2: { value: 12.5, status: 'normal' as 'normal' | 'warning' | 'critical' },
    methane: { value: 3.2, status: 'normal' as 'normal' | 'warning' | 'critical' },
    oxygen: { value: 8.7, status: 'normal' as 'normal' | 'warning' | 'critical' },
    hydrogen: { value: 1.4, status: 'normal' as 'normal' | 'warning' | 'critical' }
  });

  // State for chart data
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 20 }, (_, i) => `${i}s ago`).reverse(),
    datasets: [
      {
        label: 'CO₂ (%)',
        data: Array(20).fill(null),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Methane (%)',
        data: Array(20).fill(null),
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Oxygen (%)',
        data: Array(20).fill(null),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Hydrogen (%)',
        data: Array(20).fill(null),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
        fill: true
      }
    ]
  });

  // State for energy conversion metrics
  const [energyMetrics, setEnergyMetrics] = useState({
    efficiency: 78.3,
    temperature: 850,
    energyOutput: 4.2,
    emissionsReduction: 62
  });

  // Update data every second to simulate real-time monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      // Update gas data
      const newCO2 = generateRandomData(10, 15, gasData.co2.value);
      const newMethane = generateRandomData(2, 5, gasData.methane.value);
      const newOxygen = generateRandomData(7, 10, gasData.oxygen.value);
      const newHydrogen = generateRandomData(0.5, 2, gasData.hydrogen.value);
      
      // Determine status based on values
      const co2Status = newCO2 > 14 ? 'warning' : newCO2 > 14.5 ? 'critical' : 'normal';
      const methaneStatus = newMethane > 4.5 ? 'warning' : newMethane > 4.8 ? 'critical' : 'normal';
      const oxygenStatus = newOxygen < 7.5 ? 'warning' : newOxygen < 7 ? 'critical' : 'normal';
      const hydrogenStatus = newHydrogen > 1.8 ? 'warning' : newHydrogen > 1.9 ? 'critical' : 'normal';
      
      setGasData({
        co2: { value: newCO2, status: co2Status },
        methane: { value: newMethane, status: methaneStatus },
        oxygen: { value: newOxygen, status: oxygenStatus },
        hydrogen: { value: newHydrogen, status: hydrogenStatus }
      });
      
      // Update chart data
      setChartData(prevData => {
        const newDatasets = prevData.datasets.map((dataset, index) => {
          const newData = [...dataset.data.slice(1)];
          
          switch(index) {
            case 0: newData.push(newCO2); break;
            case 1: newData.push(newMethane); break;
            case 2: newData.push(newOxygen); break;
            case 3: newData.push(newHydrogen); break;
          }
          
          return {
            ...dataset,
            data: newData
          };
        });
        
        return {
          ...prevData,
          datasets: newDatasets
        };
      });
      
      // Update energy metrics
      setEnergyMetrics({
        efficiency: parseFloat((generateRandomData(75, 82, energyMetrics.efficiency)).toFixed(1)),
        temperature: Math.round(generateRandomData(830, 870, energyMetrics.temperature)),
        energyOutput: parseFloat((generateRandomData(3.8, 4.5, energyMetrics.energyOutput)).toFixed(1)),
        emissionsReduction: Math.round(generateRandomData(58, 65, energyMetrics.emissionsReduction))
      });
      
    }, 1000);
    
    return () => clearInterval(interval);
  }, [gasData, energyMetrics]);

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: 0,
        max: 16
      }
    },
    animation: {
      duration: 0 // Disable animation for better performance
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      }
    },
  };

  // Helper function to get status color
  const getStatusColor = (status: 'normal' | 'warning' | 'critical') => {
    switch(status) {
      case 'normal': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'critical': return 'bg-red-100 text-red-800';
    }
  };

  return (
    <section id="real-time-analysis" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Real-Time Gas Analysis & Conversion</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our AI system continuously monitors gas composition and optimizes the conversion process for maximum energy output and minimal environmental impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gas Composition Metrics */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Wind className="h-5 w-5 mr-2 text-blue-600" />
              Gas Composition
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>
                  <span>CO₂</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{gasData.co2.value}%</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(gasData.co2.status)}`}>
                    {gasData.co2.status === 'normal' ? 'Normal' : gasData.co2.status === 'warning' ? 'High' : 'Critical'}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                  <span>Methane</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{gasData.methane.value}%</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(gasData.methane.status)}`}>
                    {gasData.methane.status === 'normal' ? 'Normal' : gasData.methane.status === 'warning' ? 'High' : 'Critical'}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span>Oxygen</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{gasData.oxygen.value}%</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(gasData.oxygen.status)}`}>
                    {gasData.oxygen.status === 'normal' ? 'Normal' : gasData.oxygen.status === 'warning' ? 'Low' : 'Critical'}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span>Hydrogen</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{gasData.hydrogen.value}%</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(gasData.hydrogen.status)}`}>
                    {gasData.hydrogen.status === 'normal' ? 'Normal' : gasData.hydrogen.status === 'warning' ? 'High' : 'Critical'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-3 flex items-center">
                <Flame className="h-5 w-5 mr-2 text-orange-600" />
                Conversion Metrics
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-600">Efficiency</div>
                  <div className="text-xl font-bold">{energyMetrics.efficiency}%</div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-600">Temperature</div>
                  <div className="text-xl font-bold">{energyMetrics.temperature}°C</div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-600">Energy Output</div>
                  <div className="text-xl font-bold">{energyMetrics.energyOutput} MW</div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-600">Emissions Reduction</div>
                  <div className="text-xl font-bold">{energyMetrics.emissionsReduction}%</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 flex items-start">
              <AlertTriangle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-700">
                AI is currently optimizing combustion parameters based on the detected methane levels to maximize energy output.
              </p>
            </div>
          </div>
          
          {/* Gas Composition Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
              Real-Time Gas Composition Trends
            </h3>
            
            <div className="h-80">
              <Line data={chartData} options={chartOptions} />
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">AI-Driven Insights</h4>
                <p className="text-sm text-gray-600">
                  The AI system is detecting a slight increase in methane levels, which indicates a change in waste composition. Combustion parameters are being automatically adjusted to maintain optimal energy output.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Predictive Analysis</h4>
                <p className="text-sm text-gray-600">
                  Based on current trends, the system predicts a 3.2% increase in energy output over the next hour as the waste stream stabilizes and combustion efficiency improves.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">How AI Optimizes Gas Conversion</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold mb-2">Real-Time Monitoring</h4>
              <p className="text-sm text-gray-600">
                Advanced sensors continuously analyze gas composition, with AI processing this data to identify patterns and anomalies that human operators might miss.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold mb-2">Adaptive Control</h4>
              <p className="text-sm text-gray-600">
                Machine learning algorithms automatically adjust combustion parameters, air flow, and temperature to optimize the conversion process based on the specific waste composition.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold mb-2">Predictive Maintenance</h4>
              <p className="text-sm text-gray-600">
                By analyzing gas composition trends, the AI can predict equipment issues before they occur, scheduling maintenance during optimal times to minimize downtime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeAnalysis;