
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, MessageSquare, BarChart3, Zap, Target, ShoppingCart, Package, Globe, Star, Users, MapPin, Clock, CheckCircle, ArrowRight, Lightbulb, Settings, Database } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemandChart from "@/components/DemandChart";
import InventoryGrid from "@/components/InventoryGrid";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import AnomalyInsights from "@/components/AnomalyInsights";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const features = [
    {
      icon: Brain,
      title: "ML Demand Forecasting",
      description: "Trained on historical Walmart sales data, holidays, local events, and promotions to forecast SKU-level demand per region with 96.2% accuracy.",
      benefits: ["Historical sales analysis", "Holiday impact modeling", "Local event correlation", "SKU-level precision"]
    },
    {
      icon: MessageSquare,
      title: "GenAI Insights Engine",
      description: "Uses generative AI to explain demand surges in plain English with actionable recommendations.",
      benefits: ["Plain English explanations", "Actionable insights", "Real-time analysis", "Context awareness"],
      example: "Chips and soft drinks are trending in TX due to Super Bowl promos. Forecast: +26% demand next 7 days."
    },
    {
      icon: Package,
      title: "Smart Reallocation Planner",
      description: "Suggests optimal stock movement between stores based on projected needs and inventory levels.",
      benefits: ["Cross-store optimization", "Cost-effective transfers", "Automated suggestions", "Real-time updates"]
    },
    {
      icon: Target,
      title: "Manager Q&A Bot",
      description: "AI-powered chatbot that answers supply and demand questions with contextual business intelligence.",
      benefits: ["24/7 availability", "Contextual responses", "Business intelligence", "Natural language queries"],
      example: "Which products will be understocked in Houston next week?"
    }
  ];

  const useCases = [
    {
      title: "Holiday Demand Surge Management",
      scenario: "Independence Day weekend approaching",
      challenge: "Predict BBQ supply demand spike",
      solution: "AI forecasts 40% increase in grilling items for Texas region",
      outcome: "Proactive restocking saves $50K in lost sales"
    },
    {
      title: "Weather-Driven Inventory Optimization",
      scenario: "Unexpected heat wave alert",
      challenge: "Cooling product demand surge",
      solution: "System suggests redistributing AC units from northern stores",
      outcome: "18% increase in cooling product sales"
    },
    {
      title: "Regional Stock Balancing",
      scenario: "Store A has excess winter coats",
      challenge: "Store B running low on same items",
      solution: "AI recommends transferring 500 units between locations",
      outcome: "Reduces waste by 25% and prevents stockouts"
    },
    {
      title: "Seasonal Transition Planning",
      scenario: "Back-to-school season approaching",
      challenge: "Optimize school supply inventory",
      solution: "Early demand signals trigger inventory adjustments",
      outcome: "15% improvement in sell-through rates"
    }
  ];

  const flowSteps = [
    {
      step: 1,
      title: "Data Collection",
      description: "Aggregate sales data, weather patterns, local events, and promotional calendars",
      icon: Database
    },
    {
      step: 2,
      title: "ML Processing",
      description: "Advanced algorithms analyze patterns and generate demand forecasts",
      icon: Brain
    },
    {
      step: 3,
      title: "GenAI Analysis",
      description: "AI explains the 'why' behind demand changes in natural language",
      icon: Lightbulb
    },
    {
      step: 4,
      title: "Smart Recommendations",
      description: "System generates actionable inventory and reallocation suggestions",
      icon: Settings
    }
  ];

  const targetUsers = [
    {
      role: "Regional Managers",
      description: "Monitor multi-store performance and make strategic decisions",
      benefits: ["Cross-store visibility", "Strategic planning tools", "Performance analytics"]
    },
    {
      role: "Supply Chain Analysts",
      description: "Optimize inventory flows and reduce operational costs",
      benefits: ["Demand forecasting", "Inventory optimization", "Cost analysis"]
    },
    {
      role: "Store Managers",
      description: "Ensure optimal stock levels and customer satisfaction",
      benefits: ["Local demand insights", "Stock level alerts", "Customer satisfaction metrics"]
    },
    {
      role: "Vendor Partners",
      description: "Access demand forecasts through SaaS API integration",
      benefits: ["API access", "Demand visibility", "Partnership opportunities"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cursive font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            AI-powered solutions for modern retail supply chain management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="glass-effect text-white hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-walmart-gradient rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-walmart-blue">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-blue-200">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-blue-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  {feature.example && (
                    <div className="p-3 bg-walmart-blue/10 rounded-lg border border-walmart-blue/20">
                      <p className="text-sm text-blue-100 italic">"{feature.example}"</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cursive font-bold text-white mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-blue-200">
              See how DemandPulse transforms retail operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="glass-effect text-white">
                <CardHeader>
                  <CardTitle className="text-walmart-blue">{useCase.title}</CardTitle>
                  <CardDescription className="text-blue-200">
                    {useCase.scenario}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-blue-200">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-300 mb-1">Solution:</h4>
                    <p className="text-sm text-blue-200">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-1">Outcome:</h4>
                    <p className="text-sm text-blue-200">{useCase.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Flow Diagram Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cursive font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-blue-200">
              Our AI-powered process in four simple steps
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {flowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <Card className="glass-effect text-white text-center h-full">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 bg-walmart-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-walmart-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                          {step.step}
                        </div>
                        <h3 className="font-semibold text-walmart-blue mb-2">{step.title}</h3>
                        <p className="text-sm text-blue-200">{step.description}</p>
                      </CardContent>
                    </Card>
                    {index < flowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-walmart-blue" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Who Can Use It Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cursive font-bold text-white mb-4">
              Who Can Use It
            </h2>
            <p className="text-xl text-blue-200">
              Designed for retail professionals at every level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetUsers.map((user, index) => (
              <Card key={index} className="glass-effect text-white text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-walmart-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-walmart-blue">{user.role}</CardTitle>
                  <CardDescription className="text-blue-200">
                    {user.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {user.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-blue-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Case Scenario Highlight */}
        <Card className="glass-effect text-white mb-16">
          <CardHeader>
            <CardTitle className="text-walmart-blue text-center text-2xl">
              📣 Real-World Scenario
            </CardTitle>
            <CardDescription className="text-center text-blue-200 text-lg">
              How a Walmart Store Manager in Texas uses DemandPulse
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-walmart-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Logs In</h3>
                <p className="text-sm text-blue-200">Manager sees dashboard alert</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-walmart-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Forecast Alert</h3>
                <p className="text-sm text-blue-200">"Milk demand to spike 40% next week"</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-walmart-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">AI Explanation</h3>
                <p className="text-sm text-blue-200">"Due to Independence Day + heatwave"</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-walmart-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Smart Action</h3>
                <p className="text-sm text-blue-200">System suggests pulling 500 units from AZ stores</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Badge className="bg-green-500/20 text-green-400 text-lg px-4 py-2">
                Result: Saves thousands in waste and increases sales
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Interactive Dashboard
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Experience the power of AI-driven retail analytics
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 glass-effect">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-walmart-blue">
              <BarChart3 className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="forecasting" className="data-[state=active]:bg-walmart-blue">
              <TrendingUp className="w-4 h-4 mr-2" />
              Forecasting
            </TabsTrigger>
            <TabsTrigger value="inventory" className="data-[state=active]:bg-walmart-blue">
              <Package className="w-4 h-4 mr-2" />
              Inventory
            </TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:bg-walmart-blue">
              <Brain className="w-4 h-4 mr-2" />
              AI Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <DemandChart />
              <InventoryGrid />
            </div>
          </TabsContent>

          <TabsContent value="forecasting">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="glass-effect text-white">
                <CardHeader>
                  <CardTitle className="text-walmart-blue">7-Day Forecast</CardTitle>
                  <CardDescription className="text-blue-200">Short-term demand prediction</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Electronics</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">+12%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Clothing</span>
                      <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">+5%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Groceries</span>
                      <Badge variant="secondary" className="bg-red-500/20 text-red-400">-3%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect text-white">
                <CardHeader>
                  <CardTitle className="text-walmart-blue">30-Day Outlook</CardTitle>
                  <CardDescription className="text-blue-200">Medium-term trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-2xl font-bold text-green-400">+18.5%</div>
                    <p className="text-sm text-blue-200">Overall demand increase expected</p>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-walmart-blue to-green-400 w-3/4"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect text-white">
                <CardHeader>
                  <CardTitle className="text-walmart-blue">Seasonal Trends</CardTitle>
                  <CardDescription className="text-blue-200">Holiday & event impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm">Back-to-School Peak</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">Holiday Prep Phase</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Summer Clearance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="inventory">
            <div className="space-y-8">
              <InventoryGrid />
              
              <Card className="glass-effect text-white">
                <CardHeader>
                  <CardTitle className="text-walmart-blue">Reallocation Recommendations</CardTitle>
                  <CardDescription className="text-blue-200">
                    AI-powered inventory optimization suggestions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <h4 className="font-semibold text-blue-400 mb-2">High Priority</h4>
                      <p className="text-sm text-blue-200 mb-3">
                        Move 500 units of Winter Coats from Store A to Store B
                      </p>
                      <Button size="sm" className="bg-walmart-blue hover:bg-walmart-blue-dark">
                        Execute Transfer
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <h4 className="font-semibold text-yellow-400 mb-2">Medium Priority</h4>
                      <p className="text-sm text-yellow-200 mb-3">
                        Increase Electronics stock by 200 units for holiday season
                      </p>
                      <Button size="sm" variant="outline" className="border-yellow-500/50 text-yellow-400">
                        Schedule Order
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <h4 className="font-semibold text-green-400 mb-2">Optimization</h4>
                      <p className="text-sm text-green-200 mb-3">
                        Reduce Seasonal items by 15% to free up warehouse space
                      </p>
                      <Button size="sm" variant="outline" className="border-green-500/50 text-green-400">
                        Review Plan
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnomalyInsights />
              <ChatBot />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
