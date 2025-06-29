
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Users, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const regionalData = [
    { region: 'Texas', sales: 12500, growth: 15.2 },
    { region: 'California', sales: 18200, growth: 8.7 },
    { region: 'Florida', sales: 9800, growth: 22.1 },
    { region: 'New York', sales: 14600, growth: 12.3 },
    { region: 'Arizona', sales: 7400, growth: 18.9 },
  ];

  const categoryData = [
    { name: 'Electronics', value: 35, color: '#0071ce' },
    { name: 'Groceries', value: 28, color: '#4f98cd' },
    { name: 'Clothing', value: 20, color: '#7cb9e8' },
    { name: 'Home & Garden', value: 17, color: '#b3d9ff' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Advanced Analytics
          </h1>
          <p className="text-xl text-blue-200">
            Deep insights into sales patterns and customer behavior
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Regional Performance */}
          <Card className="glass-effect text-white">
            <CardHeader>
              <CardTitle className="text-walmart-blue flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Regional Performance
              </CardTitle>
              <CardDescription className="text-blue-200">
                Sales performance across different regions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={regionalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="region" stroke="rgba(255,255,255,0.7)" fontSize={12} />
                  <YAxis stroke="rgba(255,255,255,0.7)" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="sales" fill="#0071ce" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="glass-effect text-white">
            <CardHeader>
              <CardTitle className="text-walmart-blue flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Category Distribution
              </CardTitle>
              <CardDescription className="text-blue-200">
                Sales distribution by product category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Insights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-effect text-white">
            <CardHeader>
              <CardTitle className="text-walmart-blue">Customer Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Avg. Basket Size</span>
                  <Badge className="bg-green-500/20 text-green-400">$47.50</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Return Rate</span>
                  <Badge className="bg-yellow-500/20 text-yellow-400">3.2%</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Loyalty Members</span>
                  <Badge className="bg-blue-500/20 text-blue-400">68%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect text-white">
            <CardHeader>
              <CardTitle className="text-walmart-blue">Trend Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Seasonal uptick detected</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Mobile purchases +23%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">New customer acquisition up</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect text-white">
            <CardHeader>
              <CardTitle className="text-walmart-blue">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Sales Target</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-walmart-blue h-2 rounded-full w-[87%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Inventory Efficiency</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-[92%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Customer Satisfaction</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
