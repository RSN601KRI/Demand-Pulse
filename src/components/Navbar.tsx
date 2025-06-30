
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain, BarChart3, Zap, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", icon: BarChart3, path: "/dashboard" },
    { name: "Analytics", icon: Brain, path: "/analytics" },
    { name: "Forecasting", icon: Zap, path: "/forecasting" },
    { name: "Reports", icon: BarChart3, path: "/reports" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border-2 border-white/20 group-hover:border-walmart-yellow/50">
                <img 
                  src="/lovable-uploads/30dea120-660c-498b-a5e8-e8b2be5bdb33.png" 
                  alt="DemandPulse Logo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-bounce group-hover:animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-ping group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-cursive font-bold text-white group-hover:text-walmart-yellow transition-colors duration-300">
                DemandPulse
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} to={item.path}>
                  <Button
                    variant="ghost"
                    className={`text-white hover:bg-white/10 hover:text-walmart-blue transition-all duration-300 hover:scale-110 active:scale-95 click-bounce ${
                      isActive(item.path) ? 'bg-walmart-blue text-white scale-105' : ''
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2 hover:animate-pulse" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/login">
              <Button className="bg-walmart-gradient hover:scale-110 active:scale-95 click-bounce transition-all duration-300 shadow-lg hover:shadow-2xl">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10 hover:scale-110 active:scale-95 click-bounce transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6 animate-spin" /> : <Menu className="w-6 h-6 hover:animate-pulse" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/10 mt-2 rounded-lg p-4 animate-fade-in">
            <div className="space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-white hover:bg-white/10 hover:text-walmart-blue hover:scale-105 active:scale-95 click-bounce transition-all duration-300 ${
                        isActive(item.path) ? 'bg-walmart-blue text-white' : ''
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2 hover:animate-pulse" />
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-walmart-gradient mt-4 hover:scale-105 active:scale-95 click-bounce transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
