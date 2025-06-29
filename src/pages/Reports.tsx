
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Calendar, Filter, BarChart3, TrendingUp, Package, Users } from "lucide-react";
import Navbar from "@/components/Navbar";

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("weekly");

  const reportTemplates = [
    {
      name: "Weekly Performance Summary",
      description: "Comprehensive overview of store performance, demand trends, and inventory status",
      lastGenerated: "2 hours ago",
      frequency: "Weekly",
      status: "Ready",
      icon: BarChart3,
    },
    {
      name: "Demand Forecasting Report",
      description: "ML-powered demand predictions with confidence intervals and scenario analysis",
      lastGenerated: "1 day ago",
      frequency: "Daily",
      status: "Ready",
      icon: TrendingUp,
    },
    {
      name: "Inventory Optimization",
      description: "Stock level recommendations, reallocation suggestions, and cost savings analysis",
      lastGenerated: "3 hours ago",
      frequency: "Bi-weekly",
      status: "Generating",
      icon: Package,
    },
    {
      name: "Customer Insights",
      description: "Shopping patterns, preferences, and behavioral analysis across demographics",
      lastGenerated: "5 hours ago",
      frequency: "Monthly",
      status: "Ready",
      icon: Users,
    },
  ];

  const recentReports = [
    {
      title: "Q2 2024 Supply Chain Performance",
      type: "Executive Summary",
      date: "June 28, 2024",
      size: "2.4 MB",
      downloads: 47,
    },
    {
      title: "Texas Region Demand Analysis",
      type: "Regional Report",
      date: "June 27, 2024",
      size: "1.8 MB",
      downloads: 23,
    },
    {
      title: "Independence Day Forecast",
      type: "Seasonal Analysis",
      date: "June 26, 2024",
      size: "3.1 MB",
      downloads: 65,
    },
    {
      title: "Inventory Reallocation Recommendations",
      type: "Operational Report",
      date: "June 25, 2024",
      size: "1.2 MB",
      downloads: 31,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready": return "bg-green-500/20 text-green-400";
      case "Generating": return "bg-yellow-500/20 text-yellow-400";
      case "Error": return "bg-red-500/20 text-red-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Reports & Analytics
          </h1>
          <p className="text-xl text-blue-200">
            Generate, customize, and download comprehensive business reports
          </p>
        </div>

        <Tabs defaultValue="templates" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 glass-effect">
            <TabsTrigger value="templates">Report Templates</TabsTrigger>
            <TabsTrigger value="recent">Recent Reports</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="custom">Custom Builder</TabsTrigger>
          </TabsList>

          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportTemplates.map((template, index) => {
                const Icon = template.icon;
                return (
                  <Card key={index} className="glass-effect text-white">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className="w-6 h-6 text-walmart-blue" />
                          <div>
                            <CardTitle className="text-walmart-blue">{template.name}</CardTitle>
                            <CardDescription className="text-blue-200 text-sm">
                              {template.description}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge className={getStatusColor(template.status)}>
                          {template.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-blue-200">
                          <p>Last generated: {template.lastGenerated}</p>
                          <p>Frequency: {template.frequency}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="bg-walmart-gradient flex-1">
                          <FileText className="w-4 h-4 mr-2" />
                          Generate Now
                        </Button>
                        <Button variant="outline" className="border-white/20 text-white">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="recent">
            <Card className="glass-effect text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-walmart-blue">Recent Reports</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-white/20 text-white">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/20 text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      Date Range
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-white/10">
                      <div className="flex items-center gap-4">
                        <FileText className="w-8 h-8 text-walmart-blue" />
                        <div>
                          <h4 className="font-semibold text-white">{report.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-blue-200">
                            <span>{report.type}</span>
                            <span>{report.date}</span>
                            <span>{report.size}</span>
                            <Badge className="bg-blue-500/20 text-blue-400">
                              {report.downloads} downloads
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-white/20 text-white">
                          View
                        </Button>
                        <Button size="sm" className="bg-walmart-gradient">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scheduled">
            <Card className="glass-effect text-white">
              <CardHeader>
                <CardTitle className="text-walmart-blue">Scheduled Reports</CardTitle>
                <CardDescription className="text-blue-200">
                  Automated report generation and distribution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-800/30 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">Weekly Performance Dashboard</h4>
                      <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                    </div>
                    <p className="text-sm text-blue-200 mb-3">
                      Generates every Monday at 9:00 AM and sends to regional managers
                    </p>
                    <div className="flex items-center gap-2 text-xs text-blue-200">
                      <Calendar className="w-3 h-3" />
                      <span>Next run: Monday, July 1, 2024 at 9:00 AM</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-800/30 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">Monthly Executive Summary</h4>
                      <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                    </div>
                    <p className="text-sm text-blue-200 mb-3">
                      Comprehensive monthly report for C-level executives
                    </p>
                    <div className="flex items-center gap-2 text-xs text-blue-200">
                      <Calendar className="w-3 h-3" />
                      <span>Next run: Tuesday, July 2, 2024 at 6:00 AM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom">
            <Card className="glass-effect text-white">
              <CardHeader>
                <CardTitle className="text-walmart-blue">Custom Report Builder</CardTitle>
                <CardDescription className="text-blue-200">
                  Create tailored reports with specific metrics and time ranges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Report Name</label>
                    <Input 
                      placeholder="Enter report name..." 
                      className="bg-slate-800/30 border-white/20 text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-white mb-2 block">Time Period</label>
                      <select className="w-full p-2 bg-slate-800/30 border border-white/20 rounded-md text-white">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last quarter</option>
                        <option>Custom range</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white mb-2 block">Region</label>
                      <select className="w-full p-2 bg-slate-800/30 border border-white/20 rounded-md text-white">
                        <option>All regions</option>
                        <option>Texas</option>
                        <option>California</option>
                        <option>Florida</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Metrics to Include</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        "Sales Performance",
                        "Inventory Levels",
                        "Demand Forecast",
                        "Cost Analysis",
                        "Customer Metrics",
                        "Supply Chain KPIs",
                        "Anomaly Detection",
                        "Profit Margins"
                      ].map((metric) => (
                        <label key={metric} className="flex items-center gap-2 text-sm text-blue-200">
                          <input type="checkbox" className="rounded" />
                          <span>{metric}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-walmart-gradient">
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white">
                      Save as Template
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Reports;
