
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Zap, Globe, Package, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-walmart-blue/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-cyan-400/20 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* 3D Grid Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 113, 206, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 113, 206, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center bottom'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <Badge className="mb-4 bg-walmart-blue/20 text-walmart-blue border-walmart-blue/30 hover:bg-walmart-blue/30 transition-colors">
              <Zap className="w-3 h-3 mr-1" />
              AI-Powered Analytics
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
              <span className="font-cursive text-transparent bg-clip-text bg-gradient-to-r from-walmart-blue to-blue-400">
                DemandPulse
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-blue-200 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Transforming Retail Supply Chains
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Harness the power of machine learning and generative AI to predict demand, optimize inventory, 
              and eliminate supply chain inefficiencies with unprecedented accuracy.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-walmart-gradient hover:scale-105 transition-all duration-300 shadow-2xl px-8 py-4 text-lg"
            >
              <Brain className="w-5 h-5 mr-2" />
              Explore Dashboard
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 glass-effect rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-walmart-blue" />
              </div>
              <p className="text-sm text-blue-200">ML Forecasting</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 glass-effect rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-walmart-blue" />
              </div>
              <p className="text-sm text-blue-200">Visual Analytics</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 glass-effect rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Package className="w-8 h-8 text-walmart-blue" />
              </div>
              <p className="text-sm text-blue-200">Inventory Optimization</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 glass-effect rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-walmart-blue" />
              </div>
              <p className="text-sm text-blue-200">Real-time Insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-walmart-blue to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
