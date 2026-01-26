import React from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-green-600" />
          <span className="font-bold text-xl">PlastiVolt</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {isHomePage ? (
            <>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
              <a href="#process" className="text-gray-700 hover:text-green-600 transition-colors">Process</a>
              <a href="#real-time-analysis" className="text-gray-700 hover:text-green-600 transition-colors">Gas Analysis</a>
              <a href="#ai-benefits" className="text-gray-700 hover:text-green-600 transition-colors">AI Benefits</a>
              <a href="#stats" className="text-gray-700 hover:text-green-600 transition-colors">Impact</a>
            </>
          ) : (
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
          )}
          <Link to="/waste-monitoring" className="text-gray-700 hover:text-green-600 transition-colors">Waste Monitoring</Link>
          <Link 
            to="/signup" 
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-green-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            {isHomePage ? (
              <>
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#process" 
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Process
                </a>
                <a 
                  href="#real-time-analysis" 
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gas Analysis
                </a>
                <a 
                  href="#ai-benefits" 
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Benefits
                </a>
                <a 
                  href="#stats" 
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Impact
                </a>
              </>
            ) : (
              <Link 
                to="/" 
                className="text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            )}
            <Link 
              to="/waste-monitoring" 
              className="text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Waste Monitoring
            </Link>
            <Link 
              to="/signup" 
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;