
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain, BarChart3, Zap } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: BarChart3 },
    { name: "Analytics", icon: Brain },
    { name: "Forecasting", icon: Zap },
    { name: "Reports", icon: BarChart3 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-walmart-gradient rounded-lg flex items-center justify-center animate-pulse-slow">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-cursive font-bold text-white">
                DemandPulse
              </h1>
              <p className="text-xs text-blue-200 -mt-1">
                Transforming Retail Supply Chains
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-walmart-blue transition-all duration-300"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-walmart-gradient hover:scale-105 transition-transform duration-300 shadow-lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/10 mt-2 rounded-lg p-4">
            <div className="space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-white/10 hover:text-walmart-blue"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Button>
                );
              })}
              <Button className="w-full bg-walmart-gradient mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
