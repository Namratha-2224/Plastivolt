import React from 'react';
import { Zap, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Zap className="h-6 w-6 text-green-500" />
            <span className="font-bold text-xl">PlastiVolt</span>
          </div>
          
          <div className="flex space-x-8">
            <a href="#about" className="hover:text-green-500 transition-colors">About</a>
            <a href="#process" className="hover:text-green-500 transition-colors">Process</a>
            <a href="#ai-benefits" className="hover:text-green-500 transition-colors">AI Benefits</a>
            <a href="#stats" className="hover:text-green-500 transition-colors">Impact</a>
          </div>
          
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="#" className="hover:text-green-500 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400 mb-4">
                Transforming plastic waste management and energy production through the power of artificial intelligence.
              </p>
              <p className="text-gray-500 text-sm">
                © 2025 PlastiVolt. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold mb-2">Contact Us</h4>
              <a href="mailto:info@plastivolt.com" className="text-gray-400 hover:text-green-500 transition-colors">
                info@plastivolt.com
              </a>
              <p className="text-gray-400">
                123 Green Energy Way<br />
                Sustainable City, PV0 W4TT
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;