
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Calendar, MapPin, TrendingUp, ExternalLink, Brain } from "lucide-react";

const anomalies = [
  {
    id: 1,
    category: "Winter Clothing",
    anomalyType: "Demand Spike",
    magnitude: "+340%",
    location: "Northeast Stores",
    trigger: "Unexpected cold front + viral TikTok trend",
    timeframe: "Last 3 days",
    impact: "High",
    recommendation: "Emergency restock from southern regions",
    confidence: 94
  },
  {
    id: 2,
    category: "Electronics",
    anomalyType: "Price Sensitivity",
    magnitude: "-25%",
    location: "Urban Markets",
    trigger: "Competitor flash sale + economic indicators",
    timeframe: "This week",
    impact: "Medium",
    recommendation: "Implement dynamic pricing strategy",
    confidence: 87
  },
  {
    id: 3,
    category: "Home Décor",
    anomalyType: "Seasonal Shift",
    magnitude: "+180%",
    location: "Suburban Stores",
    trigger: "Early spring weather + home improvement shows",
    timeframe: "Past week",
    impact: "Medium",
    recommendation: "Accelerate seasonal transition",
    confidence: 91
  }
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "High": return "bg-red-500/20 text-red-400 border-red-500/30";
    case "Medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Low": return "bg-green-500/20 text-green-400 border-green-500/30";
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

const AnomalyInsights = () => {
  return (
    <Card className="glass-effect text-white h-full">
      <CardHeader>
        <CardTitle className="text-walmart-blue flex items-center gap-2">
          <Brain className="w-5 h-5" />
          AI Anomaly Detection
        </CardTitle>
        <CardDescription className="text-blue-200">
          Real-time detection and explanation of demand anomalies
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {anomalies.map((anomaly) => (
          <div
            key={anomaly.id}
            className="p-4 bg-slate-800/30 rounded-lg border border-white/10 hover:border-walmart-blue/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                <h4 className="font-semibold text-white">{anomaly.category}</h4>
                <Badge variant="outline" className={getImpactColor(anomaly.impact)}>
                  {anomaly.impact} Impact
                </Badge>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-walmart-blue">{anomaly.magnitude}</p>
                <p className="text-xs text-blue-200">{anomaly.anomalyType}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-sm">
              <div className="flex items-center gap-2 text-blue-200">
                <MapPin className="w-3 h-3" />
                <span>{anomaly.location}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Calendar className="w-3 h-3" />
                <span>{anomaly.timeframe}</span>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm text-blue-100 mb-2">
                <strong>Root Cause Analysis:</strong>
              </p>
              <p className="text-sm text-blue-200 bg-slate-900/30 p-2 rounded italic">
                "{anomaly.trigger}"
              </p>
            </div>

            <div className="mb-4">
              <p className="text-sm text-green-400 mb-1">
                <strong>AI Recommendation:</strong>
              </p>
              <p className="text-sm text-blue-200">{anomaly.recommendation}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-full bg-slate-700 rounded-full h-2 w-24">
                  <div
                    className="bg-walmart-blue h-2 rounded-full transition-all duration-500"
                    style={{ width: `${anomaly.confidence}%` }}
                  ></div>
                </div>
                <span className="text-xs text-blue-200">{anomaly.confidence}% confidence</span>
              </div>
              
              <Button 
                size="sm" 
                variant="outline"
                className="border-walmart-blue/50 text-walmart-blue hover:bg-walmart-blue/10"
              >
                Details
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
        ))}

        <div className="mt-6 p-4 bg-walmart-blue/10 rounded-lg border border-walmart-blue/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-walmart-blue" />
            <h5 className="font-semibold text-walmart-blue">Insight Summary</h5>
          </div>
          <p className="text-sm text-blue-200 mb-3">
            3 significant anomalies detected this week. AI algorithms identified external triggers 
            including weather patterns, social media trends, and competitive actions.
          </p>
          <div className="flex gap-2">
            <Button size="sm" className="bg-walmart-gradient">
              Generate Report
            </Button>
            <Button size="sm" variant="outline" className="border-white/20 text-white">
              Set Alerts
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnomalyInsights;
