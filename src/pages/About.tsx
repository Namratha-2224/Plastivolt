import React from 'react';
import { Zap, Users, Globe, Award, Lightbulb, Target } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'Ph.D. in Environmental Engineering with 15+ years of experience in waste management innovation.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'AI specialist with extensive experience in implementing machine learning solutions for industrial processes.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Research',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      bio: 'Leading research in advanced waste-to-energy conversion technologies and AI optimization.'
    }
  ];

  const values = [
    {
      icon: <Globe className="h-6 w-6 text-green-600" />,
      title: 'Environmental Impact',
      description: 'Committed to reducing plastic waste and carbon emissions through innovative technology.'
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-green-600" />,
      title: 'Innovation',
      description: 'Pushing the boundaries of AI and waste management technology to create sustainable solutions.'
    },
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      title: 'Efficiency',
      description: 'Maximizing energy output while minimizing environmental impact through AI optimization.'
    }
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About PlastiVolt</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Revolutionizing plastic waste management through artificial intelligence and innovative energy conversion technology.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              At PlastiVolt, we're dedicated to solving two of the world's most pressing challenges: plastic waste pollution and sustainable energy production. Through our AI-powered technology, we're transforming plastic waste into clean, reliable energy while reducing environmental impact.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500K+</div>
                <div className="text-gray-600">Tons of Plastic Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1.2M</div>
                <div className="text-gray-600">MWh Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600">Conversion Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                <div className="text-gray-600">Global Facilities</div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <h2 className="text-3xl font-bold text-center mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-green-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Recognition & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Award className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Environmental Innovation Award 2024</h3>
                <p className="text-gray-600">Recognized for breakthrough achievements in waste-to-energy technology.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Award className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Excellence in Sustainability</h3>
                <p className="text-gray-600">Leading implementation of AI in environmental technology.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Award className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Clean Energy Impact</h3>
                <p className="text-gray-600">Recognition for significant contributions to clean energy production.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;