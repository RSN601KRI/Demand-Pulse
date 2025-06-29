
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const demandData = [
  { date: 'Jan', demand: 4500, forecast: 4200, actual: 4500 },
  { date: 'Feb', demand: 4800, forecast: 4600, actual: 4800 },
  { date: 'Mar', demand: 5200, forecast: 5100, actual: 5200 },
  { date: 'Apr', demand: 4900, forecast: 5000, actual: 4900 },
  { date: 'May', demand: 5400, forecast: 5300, actual: 5400 },
  { date: 'Jun', demand: 5800, forecast: 5600, actual: 5800 },
  { date: 'Jul', demand: 6200, forecast: 6100, actual: 6200 },
  { date: 'Aug', demand: 6800, forecast: 6500, actual: 6800 },
  { date: 'Sep', demand: 6400, forecast: 6600, actual: 6400 },
  { date: 'Oct', demand: 7200, forecast: 7000, actual: 7200 },
  { date: 'Nov', demand: 8100, forecast: 7800, actual: 8100 },
  { date: 'Dec', demand: 9500, forecast: 9200, actual: 9500 },
];

const DemandChart = () => {
  return (
    <Card className="glass-effect text-white h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-walmart-blue flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Demand Forecasting
            </CardTitle>
            <CardDescription className="text-blue-200">
              ML-powered demand prediction vs actual performance
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-green-500/20 text-green-400">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12.5%
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={demandData}>
            <defs>
              <linearGradient id="demandGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0071ce" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0071ce" stopOpacity={0.05}/>
              </linearGradient>
              <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f98cd" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#4f98cd" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="date" 
              stroke="rgba(255,255,255,0.7)"
              fontSize={12}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.7)"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)'
              }}
              labelStyle={{ color: '#0071ce' }}
            />
            <Area
              type="monotone"
              dataKey="demand"
              stroke="#0071ce"
              strokeWidth={3}
              fill="url(#demandGradient)"
              name="Actual Demand"
            />
            <Area
              type="monotone"
              dataKey="forecast"
              stroke="#4f98cd"
              strokeWidth={2}
              strokeDasharray="5 5"
              fill="url(#forecastGradient)"
              name="ML Forecast"
            />
          </AreaChart>
        </ResponsiveContainer>
        
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-green-400">96.2%</p>
            <p className="text-xs text-blue-200">Forecast Accuracy</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-walmart-blue">$2.4M</p>
            <p className="text-xs text-blue-200">Cost Savings</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-yellow-400">18%</p>
            <p className="text-xs text-blue-200">Stock Reduction</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemandChart;
