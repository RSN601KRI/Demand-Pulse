
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Brain, TrendingUp, MessageSquare, BarChart3, Zap, Target, ShoppingCart, Package, Globe, Star, Menu, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemandChart from "@/components/DemandChart";
import InventoryGrid from "@/components/InventoryGrid";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import AnomalyInsights from "@/components/AnomalyInsights";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Dashboard */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Advanced Analytics Dashboard
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Transform your retail operations with AI-powered insights
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
