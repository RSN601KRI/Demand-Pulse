
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Calendar, Target, Brain, TrendingUp, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Forecasting = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("7-day");

  const forecastData = [
    { date: 'Mon', actual: 4500, predicted: 4400, confidence: 95 },
    { date: 'Tue', actual: 4800, predicted: 4750, confidence: 94 },
    { date: 'Wed', actual: 5200, predicted: 5100, confidence: 92 },
    { date: 'Thu', actual: null, predicted: 5300, confidence: 89 },
    { date: 'Fri', actual: null, predicted: 5600, confidence: 87 },
    { date: 'Sat', actual: null, predicted: 6200, confidence: 85 },
    { date: 'Sun', actual: null, predicted: 5800, confidence: 88 },
  ];

  const demandDrivers = [
    {
      factor: "Independence Day Weekend",
      impact: "+26%",
      confidence: 94,
      category: "Holiday",
      description: "BBQ supplies, beverages, and patriotic items showing strong demand surge"
    },
    {
      factor: "Heat Wave Alert",
      impact: "+18%",
      confidence: 91,
      category: "Weather",
      description: "AC units, fans, cold beverages, and cooling products in high demand"
    },
    {
      factor: "Back-to-School Season",
      impact: "+15%",
      confidence: 89,
      category: "Seasonal",
      description: "School supplies, clothing, and electronics showing early demand signals"
    },
    {
      factor: "Local Sports Event",
      impact: "+12%",
      confidence: 87,
      category: "Events",
      description: "Team merchandise and party supplies trending in Dallas area"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            ML Demand Forecasting
          </h1>
          <p className="text-xl text-blue-200">
            AI-powered predictions with real-time demand drivers analysis
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 glass-effect">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="drivers">Demand Drivers</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
            <TabsTrigger value="alerts">Smart Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Forecast Chart */}
              <div className="lg:col-span-2">
                <Card className="glass-effect text-white">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-walmart-blue flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          7-Day Demand Forecast
                        </CardTitle>
                        <CardDescription className="text-blue-200">
                          ML predictions vs actual demand with confidence intervals
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400">
                        96.2% Accuracy
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <AreaChart data={forecastData}>
                        <defs>
                          <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0071ce" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#0071ce" stopOpacity={0.1}/>
                          </linearGradient>
                          <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="date" stroke="rgba(255,255,255,0.7)" />
                        <YAxis stroke="rgba(255,255,255,0.7)" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '8px'
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="actual"
                          stroke="#0071ce"
                          strokeWidth={3}
                          fill="url(#actualGradient)"
                          name="Actual Demand"
                        />
                        <Area
                          type="monotone"
                          dataKey="predicted"
                          stroke="#22c55e"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          fill="url(#predictedGradient)"
                          name="ML Forecast"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Forecast Summary */}
              <div className="space-y-6">
                <Card className="glass-effect text-white">
                  <CardHeader>
                    <CardTitle className="text-walmart-blue">Forecast Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-400">+18.5%</p>
                      <p className="text-sm text-blue-200">Expected demand increase</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Peak Day</span>
                        <Badge className="bg-yellow-500/20 text-yellow-400">Saturday</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Confidence</span>
                        <Badge className="bg-blue-500/20 text-blue-400">87% Avg</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Risk Level</span>
                        <Badge className="bg-green-500/20 text-green-400">Low</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect text-white">
                  <CardHeader>
                    <CardTitle className="text-walmart-blue">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full bg-walmart-gradient">
                      <Target className="w-4 h-4 mr-2" />
                      Update Inventory
                    </Button>
                    <Button variant="outline" className="w-full border-white/20 text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Review
                    </Button>
                    <Button variant="outline" className="w-full border-white/20 text-white">
                      <Brain className="w-4 h-4 mr-2" />
                      Generate Insights
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="drivers">
            <div className="space-y-6">
              <Card className="glass-effect text-white">
                <CardHeader>
                  <CardTitle className="text-walmart-blue flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    AI Demand Driver Analysis
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    GenAI explains what's driving demand changes in plain English
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {demandDrivers.map((driver, index) => (
                      <div key={index} className="p-4 bg-slate-800/30 rounded-lg border border-white/10">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold text-white">{driver.factor}</h4>
                            <Badge className="mt-1 bg-walmart-blue/20 text-walmart-blue">
                              {driver.category}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-green-400">{driver.impact}</p>
                            <p className="text-xs text-blue-200">{driver.confidence}% confidence</p>
                          </div>
                        </div>
                        <p className="text-sm text-blue-200 italic">"{driver.description}"</p>
                        <div className="mt-3 w-full bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-walmart-blue h-2 rounded-full transition-all duration-500"
                            style={{ width: `${driver.confidence}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scenarios">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="glass-effect text-white">
                <CardHeader>
                  <CardTitle className="text-green-400">Best Case Scenario</CardTitle>
                  <CardDescription className="text-blue-200">Optimistic forecast</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-400 mb-2">+32%</div>
                  <p className="text-sm text-blue-200 mb-4">
                    All demand drivers align perfectly with inventory capacity
                  </p>
                  <ul className="text-xs text-blue-200 space-y-1">
                    <li>• Weather stays favorable</li>
                    <li>• No supply chain disruptions</li>
                    <li>• Marketing campaigns perform well</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-effect text-white">
                <CardHeader>
                  <CardTitle className="text-walmart-blue">Most Likely</CardTitle>
                  <CardDescription className="text-blue-200">Expected scenario</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-walmart-blue mb-2">+18.5%</div>
                  <p className="text-sm text-blue-200 mb-4">
                    Standard forecast based on current trends and patterns
                  </p>
                  <ul className="text-xs text-blue-200 space-y-1">
                    <li>• Normal weather conditions</li>
                    <li>• Typical seasonal patterns</li>
                    <li>• Standard promotional impact</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-effect text-white">
                <CardHeader>
                  <CardTitle className="text-red-400">Worst Case Scenario</CardTitle>
                  <CardDescription className="text-blue-200">Conservative forecast</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-400 mb-2">+5%</div>
                  <p className="text-sm text-blue-200 mb-4">
                    Conservative estimate accounting for potential disruptions
                  </p>
                  <ul className="text-xs text-blue-200 space-y-1">
                    <li>• Weather disruptions</li>
                    <li>• Supply chain delays</li>
                    <li>• Economic uncertainty</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="alerts">
            <div className="space-y-6">
              <Card className="glass-effect text-white">
                <CardHeader>
                  <CardTitle className="text-walmart-blue flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Smart Demand Alerts
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Proactive notifications for demand anomalies and opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-red-400" />
                        <span className="font-semibold text-red-400">High Priority Alert</span>
                        <Badge className="bg-red-500/20 text-red-400">Now</Badge>
                      </div>
                      <p className="text-white font-medium">Milk demand spike detected: +40% in Houston area</p>
                      <p className="text-sm text-blue-200 mt-1">
                        Due to Independence Day + heat wave. Recommend immediate restock from Phoenix stores.
                      </p>
                      <Button size="sm" className="mt-3 bg-red-500 hover:bg-red-600">
                        Take Action
                      </Button>
                    </div>

                    <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-yellow-400" />
                        <span className="font-semibold text-yellow-400">Medium Priority</span>
                        <Badge className="bg-yellow-500/20 text-yellow-400">2h ago</Badge>
                      </div>
                      <p className="text-white font-medium">BBQ supplies trending up in Texas stores</p>
                      <p className="text-sm text-blue-200 mt-1">
                        26% increase predicted for next 7 days. Consider promotional pricing.
                      </p>
                      <Button size="sm" variant="outline" className="mt-3 border-yellow-500/50 text-yellow-400">
                        Review Forecast
                      </Button>
                    </div>

                    <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-4 h-4 text-blue-400" />
                        <span className="font-semibold text-blue-400">Insight</span>
                        <Badge className="bg-blue-500/20 text-blue-400">4h ago</Badge>
                      </div>
                      <p className="text-white font-medium">School supplies early demand signal</p>
                      <p className="text-sm text-blue-200 mt-1">
                        Back-to-school shopping starting 2 weeks earlier than last year.
                      </p>
                      <Button size="sm" variant="outline" className="mt-3 border-blue-500/50 text-blue-400">
                        Analyze Trend
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Forecasting;
