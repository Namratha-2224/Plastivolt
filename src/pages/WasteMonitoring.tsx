import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Truck, BarChart3, Trash2, Route, Clock, Droplets, Wind } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Custom marker icons
const truckIcon = new Icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const wasteStationIcon = new Icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Mock data for waste collection trucks
const trucks = [
  {
    id: 1,
    name: "Truck A-01",
    position: [40.7128, -74.006], // NYC
    route: [
      [40.7128, -74.006],
      [40.7137, -74.0089],
      [40.7146, -74.0119],
      [40.7155, -74.0149],
      [40.7164, -74.0179]
    ],
    status: "active",
    capacity: 78,
    fuelEfficiency: 92,
    collectionRate: 4.2,
    emissionsReduction: 35
  },
  {
    id: 2,
    name: "Truck B-14",
    position: [40.7168, -73.9973],
    route: [
      [40.7168, -73.9973],
      [40.7158, -73.9953],
      [40.7148, -73.9933],
      [40.7138, -73.9913],
      [40.7128, -73.9893]
    ],
    status: "active",
    capacity: 65,
    fuelEfficiency: 88,
    collectionRate: 3.8,
    emissionsReduction: 32
  },
  {
    id: 3,
    name: "Truck C-22",
    position: [40.7218, -74.0073],
    route: [
      [40.7218, -74.0073],
      [40.7228, -74.0063],
      [40.7238, -74.0053],
      [40.7248, -74.0043],
      [40.7258, -74.0033]
    ],
    status: "maintenance",
    capacity: 0,
    fuelEfficiency: 0,
    collectionRate: 0,
    emissionsReduction: 0
  }
];

// Waste processing stations
const stations = [
  {
    id: 1,
    name: "Central Processing Facility",
    position: [40.7200, -74.0000],
    capacity: 92,
    wasteProcessed: 1240,
    energyProduced: 320
  },
  {
    id: 2,
    name: "East Side Transfer Station",
    position: [40.7150, -73.9850],
    capacity: 78,
    wasteProcessed: 860,
    energyProduced: 210
  }
];

// Component to auto-center map
const MapCenter = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, map.getZoom());
  }, [position, map]);
  return null;
};

const WasteMonitoring = () => {
  const [selectedTruck, setSelectedTruck] = useState<number | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([40.7128, -74.006]);
  const [optimizationMetrics, setOptimizationMetrics] = useState({
    fuelSaved: 1240,
    co2Reduced: 3850,
    timeOptimized: 22,
    routeEfficiency: 87
  });
  
  // Waste composition data
  const [wasteComposition, setWasteComposition] = useState({
    organic: 42,
    plastic: 18,
    paper: 23,
    metal: 7,
    glass: 5,
    other: 5
  });
  
  // Energy conversion metrics
  const [energyMetrics, setEnergyMetrics] = useState({
    totalWaste: 2100,
    energyProduced: 530,
    conversionEfficiency: 78.5,
    co2Avoided: 1850
  });

  // Simulate truck movement
  useEffect(() => {
    const interval = setInterval(() => {
      // Update truck positions slightly to simulate movement
      trucks.forEach(truck => {
        if (truck.status === 'active') {
          const randomLat = (Math.random() - 0.5) * 0.001;
          const randomLng = (Math.random() - 0.5) * 0.001;
          truck.position = [
            truck.position[0] + randomLat,
            truck.position[1] + randomLng
          ];
        }
      });
      
      // Update optimization metrics slightly
      setOptimizationMetrics(prev => ({
        fuelSaved: prev.fuelSaved + Math.floor(Math.random() * 3),
        co2Reduced: prev.co2Reduced + Math.floor(Math.random() * 10),
        timeOptimized: Math.min(30, prev.timeOptimized + (Math.random() * 0.1)),
        routeEfficiency: Math.min(95, prev.routeEfficiency + (Math.random() * 0.2 - 0.1))
      }));
      
      // Update energy metrics
      setEnergyMetrics(prev => ({
        totalWaste: prev.totalWaste + Math.floor(Math.random() * 5),
        energyProduced: prev.energyProduced + Math.floor(Math.random() * 2),
        conversionEfficiency: Math.min(85, prev.conversionEfficiency + (Math.random() * 0.2 - 0.1)),
        co2Avoided: prev.co2Avoided + Math.floor(Math.random() * 8)
      }));
      
      // Slightly vary waste composition
      setWasteComposition(prev => {
        const newOrganic = Math.max(35, Math.min(50, prev.organic + (Math.random() * 2 - 1)));
        const newPlastic = Math.max(15, Math.min(25, prev.plastic + (Math.random() * 2 - 1)));
        const newPaper = Math.max(18, Math.min(28, prev.paper + (Math.random() * 2 - 1)));
        const newMetal = Math.max(5, Math.min(10, prev.metal + (Math.random() * 1 - 0.5)));
        const newGlass = Math.max(3, Math.min(8, prev.glass + (Math.random() * 1 - 0.5)));
        
        // Ensure total is 100%
        const subtotal = newOrganic + newPlastic + newPaper + newMetal + newGlass;
        const newOther = Math.max(0, 100 - subtotal);
        
        return {
          organic: parseFloat(newOrganic.toFixed(1)),
          plastic: parseFloat(newPlastic.toFixed(1)),
          paper: parseFloat(newPaper.toFixed(1)),
          metal: parseFloat(newMetal.toFixed(1)),
          glass: parseFloat(newGlass.toFixed(1)),
          other: parseFloat(newOther.toFixed(1))
        };
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Center map on selected truck
  useEffect(() => {
    if (selectedTruck !== null) {
      const truck = trucks.find(t => t.id === selectedTruck);
      if (truck) {
        setMapCenter(truck.position);
      }
    }
  }, [selectedTruck, trucks]);

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Waste Collection & Monitoring Platform</h1>
            <p className="text-gray-600 max-w-3xl">
              AI-powered real-time monitoring and optimization of waste collection routes, reducing environmental impact and improving operational efficiency.
            </p>
          </div>
          
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Truck className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold">Active Trucks</h3>
              </div>
              <p className="text-3xl font-bold">{trucks.filter(t => t.status === 'active').length}</p>
              <p className="text-sm text-gray-500">of {trucks.length} total</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Droplets className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-semibold">Fuel Saved</h3>
              </div>
              <p className="text-3xl font-bold">{optimizationMetrics.fuelSaved.toLocaleString()} L</p>
              <p className="text-sm text-gray-500">since optimization began</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Wind className="h-5 w-5 text-teal-600 mr-2" />
                <h3 className="font-semibold">CO₂ Reduced</h3>
              </div>
              <p className="text-3xl font-bold">{optimizationMetrics.co2Reduced.toLocaleString()} kg</p>
              <p className="text-sm text-gray-500">compared to baseline</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="font-semibold">Time Optimized</h3>
              </div>
              <p className="text-3xl font-bold">{optimizationMetrics.timeOptimized.toFixed(1)}%</p>
              <p className="text-sm text-gray-500">route time reduction</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Truck List */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Truck className="h-5 w-5 mr-2 text-green-600" />
                Collection Vehicles
              </h2>
              
              <div className="space-y-4">
                {trucks.map(truck => (
                  <div 
                    key={truck.id}
                    className={`p-4 rounded-lg border ${selectedTruck === truck.id ? 'border-green-500 bg-green-50' : 'border-gray-200'} cursor-pointer hover:border-green-500 transition-colors`}
                    onClick={() => setSelectedTruck(truck.id)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{truck.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${truck.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {truck.status === 'active' ? 'Active' : 'Maintenance'}
                      </span>
                    </div>
                    
                    {truck.status === 'active' && (
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div>
                          <p className="text-xs text-gray-500">Capacity</p>
                          <p className="font-semibold">{truck.capacity}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Fuel Efficiency</p>
                          <p className="font-semibold">{truck.fuelEfficiency}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Collection Rate</p>
                          <p className="font-semibold">{truck.collectionRate} tons/hr</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Emissions Reduction</p>
                          <p className="font-semibold">{truck.emissionsReduction}%</p>
                        </div>
                      </div>
                    )}
                    
                    {truck.status !== 'active' && (
                      <p className="text-sm text-gray-500 mt-2">
                        Scheduled maintenance - back in service tomorrow
                      </p>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Route className="h-5 w-5 mr-2 text-blue-600" />
                  AI Route Optimization
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Current route efficiency: <span className="font-semibold">{optimizationMetrics.routeEfficiency.toFixed(1)}%</span>
                </p>
                <p className="text-sm text-gray-700">
                  AI is continuously analyzing traffic patterns, waste volume data, and vehicle telemetry to optimize collection routes in real-time.
                </p>
              </div>
            </div>
            
            {/* Map */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Real-Time Fleet Monitoring</h2>
              
              <div className="h-[500px] rounded-lg overflow-hidden border border-gray-200">
                <MapContainer 
                  center={mapCenter} 
                  zoom={13} 
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  
                  <MapCenter position={mapCenter} />
                  
                  {/* Truck markers */}
                  {trucks.map(truck => (
                    truck.status === 'active' && (
                      <React.Fragment key={truck.id}>
                        <Marker 
                          position={truck.position} 
                          icon={truckIcon}
                        >
                          <Popup>
                            <div className="p-1">
                              <h3 className="font-semibold">{truck.name}</h3>
                              <p className="text-sm">Capacity: {truck.capacity}%</p>
                              <p className="text-sm">Collection Rate: {truck.collectionRate} tons/hr</p>
                            </div>
                          </Popup>
                        </Marker>
                        
                        {/* Route lines */}
                        <Polyline 
                          positions={truck.route}
                          color={selectedTruck === truck.id ? '#10b981' : '#6b7280'}
                          weight={selectedTruck === truck.id ? 4 : 2}
                          opacity={selectedTruck === truck.id ? 0.8 : 0.5}
                        />
                      </React.Fragment>
                    )
                  ))}
                  
                  {/* Station markers */}
                  {stations.map(station => (
                    <Marker 
                      key={station.id}
                      position={station.position} 
                      icon={wasteStationIcon}
                    >
                      <Popup>
                        <div className="p-1">
                          <h3 className="font-semibold">{station.name}</h3>
                          <p className="text-sm">Capacity: {station.capacity}%</p>
                          <p className="text-sm">Waste Processed: {station.wasteProcessed} tons</p>
                          <p className="text-sm">Energy Produced: {station.energyProduced} MWh</p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">AI Insights</h3>
                  <p className="text-sm text-gray-600">
                    Based on current collection patterns, AI predicts a 15% increase in organic waste volume in the northeast sector over the next week. Route adjustments have been automatically scheduled.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">System Recommendations</h3>
                  <p className="text-sm text-gray-600">
                    Consider deploying an additional truck to the downtown area during peak hours (10am-2pm) to optimize collection efficiency and reduce congestion.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Waste Composition and Energy Conversion */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Trash2 className="h-5 w-5 mr-2 text-blue-600" />
                Waste Composition Analysis
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="col-span-2 bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Current Waste Stream</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    AI-powered sensors and computer vision systems analyze waste composition in real-time, enabling precise sorting and processing optimization.
                  </p>
                </div>
                
                {Object.entries(wasteComposition).map(([type, percentage]) => (
                  <div key={type} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="capitalize">{type}</span>
                      <span className="font-semibold">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          type === 'organic' ? 'bg-green-500' :
                          type === 'plastic' ? 'bg-blue-500' :
                          type === 'paper' ? 'bg-yellow-500' :
                          type === 'metal' ? 'bg-gray-500' :
                          type === 'glass' ? 'bg-purple-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold mb-2">AI Waste Analysis Insights</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    Detected 3.2% increase in recyclable plastics compared to last week
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                    Organic waste quality suitable for high-efficiency biogas production
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-1.5 mr-2"></span>
                    Recommended adjustment to sorting parameters for improved paper recovery
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
                Energy Conversion Metrics
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Total Waste Processed</div>
                  <div className="text-2xl font-bold">{energyMetrics.totalWaste.toLocaleString()} tons</div>
                  <div className="text-xs text-green-600">+{Math.floor(Math.random() * 5) + 1} tons today</div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Energy Produced</div>
                  <div className="text-2xl font-bold">{energyMetrics.energyProduced.toLocaleString()} MWh</div>
                  <div className="text-xs text-green-600">Powering ~{Math.floor(energyMetrics.energyProduced * 300)} homes</div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Conversion Efficiency</div>
                  <div className="text-2xl font-bold">{energyMetrics.conversionEfficiency.toFixed(1)}%</div>
                  <div className="text-xs text-green-600">+{(Math.random() * 0.5).toFixed(1)}% from last week</div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">CO₂ Emissions Avoided</div>
                  <div className="text-2xl font-bold">{energyMetrics.co2Avoided.toLocaleString()} tons</div>
                  <div className="text-xs text-green-600">Equivalent to {Math.floor(energyMetrics.co2Avoided / 4.6)} cars</div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <h3 className="font-semibold mb-2">Real-Time Conversion Optimization</h3>
                <p className="text-sm text-gray-700 mb-3">
                  AI is currently optimizing combustion parameters based on the detected waste composition to maximize energy output while minimizing emissions.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Combustion Efficiency</span>
                  </div>
                  <span className="font-semibold">{(80 + Math.random() * 5).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1 mb-3">
                  <div 
                    className="h-2 rounded-full bg-green-500"
                    style={{ width: `${80 + Math.random() * 5}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">Steam Turbine Output</span>
                  </div>
                  <span className="font-semibold">{(75 + Math.random() * 10).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div 
                    className="h-2 rounded-full bg-blue-500"
                    style={{ width: `${75 + Math.random() * 10}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WasteMonitoring;