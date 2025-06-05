
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SF</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ServiceFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-gray-600 hover:text-blue-600 transition-colors">
              Marketplace
            </Link>
            <Link to="/customer-dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <Link to="/analytics" className="text-gray-600 hover:text-blue-600 transition-colors">
              Analytics
            </Link>
            <Link to="/provider-dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
              For Providers
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="block h-0.5 bg-gray-600 transition-transform"></span>
              <span className="block h-0.5 bg-gray-600 transition-transform"></span>
              <span className="block h-0.5 bg-gray-600 transition-transform"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/marketplace" className="text-gray-600 hover:text-blue-600 transition-colors">
                Marketplace
              </Link>
              <Link to="/customer-dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
              <Link to="/analytics" className="text-gray-600 hover:text-blue-600 transition-colors">
                Analytics
              </Link>
              <Link to="/provider-dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
                For Providers
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-600 hover:text-blue-600 w-full">
                  Sign In
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
