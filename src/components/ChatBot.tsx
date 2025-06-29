
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your AI assistant for demand analytics. Ask me about inventory trends, demand forecasts, or supply chain optimizations.",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses = [
    {
      keywords: ['demand', 'forecast', 'prediction'],
      response: "Based on current trends and ML models, I predict a 15% increase in electronics demand next month due to back-to-school season. The forecast accuracy is 96.2% with confidence intervals showing minimal risk."
    },
    {
      keywords: ['inventory', 'stock', 'overstock'],
      response: "Current inventory analysis shows Electronics category is overstocked by 650 units. I recommend redistributing to Store B which shows 23% higher demand. This could save $45K in carrying costs."
    },
    {
      keywords: ['anomaly', 'unusual', 'spike'],
      response: "I detected an unusual 40% demand spike in Winter Clothing last week. Analysis indicates this was triggered by an unexpected weather forecast and social media viral trend. Similar patterns occurred in 2022."
    },
    {
      keywords: ['optimization', 'efficiency', 'cost'],
      response: "AI optimization suggests 3 key actions: 1) Redistribute 1,200 units across categories, 2) Adjust reorder points by 12%, 3) Implement dynamic pricing. Expected annual savings: $2.4M."
    }
  ];

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const response of predefinedResponses) {
      if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return response.response;
      }
    }
    
    return "I understand you're asking about retail analytics. Let me analyze the data... Based on current patterns, I recommend focusing on demand forecasting accuracy and inventory optimization. Would you like specific insights about any category?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getAIResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Card className="glass-effect text-white h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-walmart-blue flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          AI Analytics Assistant
        </CardTitle>
        <CardDescription className="text-blue-200">
          Ask questions about demand patterns, inventory optimization, and supply chain insights
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 space-y-4 mb-4 overflow-y-auto max-h-80 pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.type === 'user' 
                  ? 'bg-walmart-blue' 
                  : 'bg-gradient-to-r from-purple-500 to-blue-500'
              }`}>
                {message.type === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              
              <div className={`flex-1 max-w-xs ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-walmart-blue text-white'
                    : 'bg-slate-800/50 text-blue-100 border border-white/10'
                }`}>
                  <p className="text-sm">{message.content}</p>
                </div>
                <p className="text-xs text-blue-300 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-800/50 p-3 rounded-lg border border-white/10">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-walmart-blue rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-walmart-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-walmart-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mb-4">
          <p className="text-xs text-blue-200 mb-2">Quick Actions:</p>
          <div className="flex flex-wrap gap-2">
            <Badge 
              className="cursor-pointer hover:bg-walmart-blue/30 transition-colors bg-walmart-blue/20 text-walmart-blue border-walmart-blue/30"
              onClick={() => setInputValue("Show me demand anomalies")}
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Anomalies
            </Badge>
            <Badge 
              className="cursor-pointer hover:bg-walmart-blue/30 transition-colors bg-walmart-blue/20 text-walmart-blue border-walmart-blue/30"
              onClick={() => setInputValue("Optimize inventory levels")}
            >
              Optimize
            </Badge>
            <Badge 
              className="cursor-pointer hover:bg-walmart-blue/30 transition-colors bg-walmart-blue/20 text-walmart-blue border-walmart-blue/30"
              onClick={() => setInputValue("Forecast next month demand")}
            >
              Forecast
            </Badge>
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about demand trends, inventory optimization..."
            className="flex-1 bg-slate-800/30 border-white/20 text-white placeholder:text-blue-300"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-walmart-gradient hover:scale-105 transition-transform"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;
