
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, AlertTriangle, CheckCircle, Clock, ArrowRight } from "lucide-react";

const inventoryData = [
  {
    category: "Electronics",
    currentStock: 12450,
    optimalStock: 11800,
    status: "overstock",
    trend: "+5.2%",
    reallocation: "Move 650 units to Store B",
    priority: "high"
  },
  {
    category: "Clothing",
    currentStock: 8900,
    optimalStock: 9200,
    status: "understock",
    trend: "-3.1%",
    reallocation: "Order 300 additional units",
    priority: "medium"
  },
  {
    category: "Home & Garden",
    currentStock: 5600,
    optimalStock: 5650,
    status: "optimal",
    trend: "+1.2%",
    reallocation: "No action needed",
    priority: "low"
  },
  {
    category: "Groceries",
    currentStock: 15200,
    optimalStock: 14800,
    status: "overstock",
    trend: "+2.8%",
    reallocation: "Redistribute 400 units",
    priority: "medium"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "overstock": return "bg-red-500/20 text-red-400 border-red-500/30";
    case "understock": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "optimal": return "bg-green-500/20 text-green-400 border-green-500/30";
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "overstock": return <AlertTriangle className="w-4 h-4" />;
    case "understock": return <Clock className="w-4 h-4" />;
    case "optimal": return <CheckCircle className="w-4 h-4" />;
    default: return <Package className="w-4 h-4" />;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "bg-red-500";
    case "medium": return "bg-yellow-500";
    case "low": return "bg-green-500";
    default: return "bg-gray-500";
  }
};

const InventoryGrid = () => {
  return (
    <Card className="glass-effect text-white h-full">
      <CardHeader>
        <CardTitle className="text-walmart-blue flex items-center gap-2">
          <Package className="w-5 h-5" />
          Inventory Management
        </CardTitle>
        <CardDescription className="text-blue-200">
          Real-time stock levels and optimization recommendations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inventoryData.map((item, index) => (
            <div
              key={item.category}
              className="p-4 bg-slate-800/30 rounded-lg border border-white/10 hover:border-walmart-blue/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${getPriorityColor(item.priority)}`}></div>
                  <h4 className="font-semibold text-white">{item.category}</h4>
                  <Badge className={getStatusColor(item.status)} variant="outline">
                    {getStatusIcon(item.status)}
                    <span className="ml-1 capitalize">{item.status}</span>
                  </Badge>
                </div>
                <span className={`text-sm font-medium ${
                  item.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {item.trend}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                <div>
                  <p className="text-blue-200">Current Stock</p>
                  <p className="text-lg font-bold text-white">{item.currentStock.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-blue-200">Optimal Stock</p>
                  <p className="text-lg font-bold text-walmart-blue">{item.optimalStock.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-blue-200">{item.reallocation}</p>
                {item.status !== "optimal" && (
                  <Button 
                    size="sm" 
                    className="bg-walmart-blue/20 hover:bg-walmart-blue text-walmart-blue border border-walmart-blue/30"
                    variant="outline"
                  >
                    Action
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                )}
              </div>
              
              {/* Progress Bar */}
              <div className="mt-3">
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      item.status === "overstock" 
                        ? "bg-red-500" 
                        : item.status === "understock" 
                        ? "bg-yellow-500" 
                        : "bg-green-500"
                    }`}
                    style={{
                      width: `${Math.min((item.currentStock / item.optimalStock) * 100, 100)}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-walmart-blue/10 rounded-lg border border-walmart-blue/20">
          <h5 className="font-semibold text-walmart-blue mb-2">AI Recommendation Summary</h5>
          <p className="text-sm text-blue-200 mb-3">
            Optimize inventory levels across 4 categories to reduce carrying costs by $180K annually.
          </p>
          <Button className="bg-walmart-gradient hover:scale-105 transition-transform">
            Execute All Recommendations
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryGrid;
