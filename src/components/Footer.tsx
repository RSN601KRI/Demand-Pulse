import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 group">
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg border-2 border-white/20 group-hover:border-walmart-yellow/50 transition-all duration-300">
                  <img 
                    src="/lovable-uploads/30dea120-660c-498b-a5e8-e8b2be5bdb33.png" 
                    alt="DemandPulse Logo" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-cursive font-bold text-white">
                  DemandPulse
                </h3>
                <p className="text-xs text-blue-200 -mt-1">
                  Transforming Retail Supply Chains
                </p>
              </div>
            </div>
            <p className="text-sm text-blue-200 max-w-xs">
              Empowering retailers with AI-driven demand forecasting and intelligent inventory optimization 
              for the future of supply chain management.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/10 hover:bg-walmart-blue/30 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <Linkedin className="w-4 h-4 text-blue-200" />
              </div>
              <div className="w-8 h-8 bg-white/10 hover:bg-walmart-blue/30 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <Twitter className="w-4 h-4 text-blue-200" />
              </div>
              <div className="w-8 h-8 bg-white/10 hover:bg-walmart-blue/30 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <Github className="w-4 h-4 text-blue-200" />
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-cursive text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">Demand Forecasting</a></li>
              <li><a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">Inventory Optimization</a></li>
              <li><a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">Supply Chain Analytics</a></li>
              <li><a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">Anomaly Detection</a></li>
              <li><a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">Predictive Insights</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-cursive text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">Press</a></li>
              <li><a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cursive text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-blue-200">
                <Mail className="w-4 h-4" />
                <span>hello@demandpulse.ai</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-blue-300 mb-4 md:mb-0">
            <p className="font-cursive">
              © 2024 DemandPulse Analytics. Crafted with intelligence and precision.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-blue-200 hover:text-walmart-blue transition-colors">Security</a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-walmart-blue via-blue-400 to-walmart-blue opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;
