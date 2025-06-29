
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Package, AlertTriangle, Users, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import DemandChart from "@/components/DemandChart";
import InventoryGrid from "@/components/InventoryGrid";

const Dashboard = () => {
  const kpiData = [
    {
      title: "Total Revenue",
      value: "$2.4M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Active Stores",
      value: "1,247",
      change: "+3.2%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Inventory Turnover",
      value: "8.3x",
      change: "+5.1%",
      trend: "up",
      icon: Package,
    },
    {
      title: "Critical Alerts",
      value: "23",
      change: "-15.3%",
      trend: "down",
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Supply Chain Dashboard
          </h1>
          <p className="text-xl text-blue-200">
            Real-time insights across all Walmart locations
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <Card key={kpi.title} className="glass-effect text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-200">
                    {kpi.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-walmart-blue" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{kpi.value}</div>
                  <Badge 
                    className={`mt-1 ${
                      kpi.trend === 'up' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {kpi.change}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DemandChart />
          <InventoryGrid />
        </div>

        {/* Quick Actions */}
        <Card className="glass-effect text-white">
          <CardHeader>
            <CardTitle className="text-walmart-blue">Quick Actions</CardTitle>
            <CardDescription className="text-blue-200">
              Frequently used operations for supply chain management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-walmart-gradient h-16 text-left justify-start">
                <BarChart3 className="w-5 h-5 mr-3" />
                <div>
                  <p className="font-semibold">Generate Report</p>
                  <p className="text-xs opacity-80">Weekly summary</p>
                </div>
              </Button>
              <Button className="bg-walmart-gradient h-16 text-left justify-start">
                <TrendingUp className="w-5 h-5 mr-3" />
                <div>
                  <p className="font-semibold">Forecast Analysis</p>
                  <p className="text-xs opacity-80">Next 30 days</p>
                </div>
              </Button>
              <Button className="bg-walmart-gradient h-16 text-left justify-start">
                <Package className="w-5 h-5 mr-3" />
                <div>
                  <p className="font-semibold">Inventory Audit</p>
                  <p className="text-xs opacity-80">Real-time check</p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
