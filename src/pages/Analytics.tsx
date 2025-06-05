
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, ArrowDown, Calendar, User, Check, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Analytics = () => {
  const kpis = [
    { 
      label: "Platform Utilization", 
      value: "87%", 
      change: "+5%", 
      trend: "up",
      icon: Check,
      description: "Provider capacity being used"
    },
    { 
      label: "Avg Job Completion", 
      value: "2.3h", 
      change: "-12min", 
      trend: "up",
      icon: Clock,
      description: "Time to complete services"
    },
    { 
      label: "Customer Satisfaction", 
      value: "4.9", 
      change: "+0.1", 
      trend: "up",
      icon: User,
      description: "Average rating score"
    },
    { 
      label: "Revenue Growth", 
      value: "+23%", 
      change: "+8%", 
      trend: "up",
      icon: Calendar,
      description: "Month over month"
    }
  ];

  const demandMetrics = [
    { service: "House Cleaning", demand: 156, growth: "+15%", trend: "up" },
    { service: "Plumbing", demand: 89, growth: "+8%", trend: "up" },
    { service: "Tutoring", demand: 234, growth: "+22%", trend: "up" },
    { service: "Handyman", demand: 167, growth: "-3%", trend: "down" },
    { service: "Graphic Design", demand: 78, growth: "+45%", trend: "up" },
    { service: "Consulting", demand: 56, growth: "+12%", trend: "up" }
  ];

  const regionMetrics = [
    { region: "Downtown", bookings: 342, revenue: "$45,680", growth: "+18%" },
    { region: "Westside", bookings: 289, revenue: "$38,920", growth: "+12%" },
    { region: "University District", bookings: 234, revenue: "$29,450", growth: "+25%" },
    { region: "Northside", bookings: 198, revenue: "$26,340", growth: "+8%" },
    { region: "Creative District", bookings: 156, revenue: "$31,280", growth: "+35%" },
    { region: "Business District", bookings: 123, revenue: "$28,690", growth: "+22%" }
  ];

  const predictiveInsights = [
    {
      title: "Weather-Triggered Demand",
      description: "Rain forecast for next week likely to increase cleaning requests by 30%",
      impact: "High",
      action: "Recommend incentivizing additional cleaning providers"
    },
    {
      title: "Holiday Season Surge",
      description: "Expected 40% increase in tutoring demand before finals week",
      impact: "Medium",
      action: "Suggest promotional pricing for education services"
    },
    {
      title: "Weekend Maintenance Peak",
      description: "Handyman services show 60% higher demand on weekends",
      impact: "Medium",
      action: "Optimize weekend provider scheduling"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Real-time insights and predictive analytics for platform optimization</p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpis.map((kpi, index) => {
              const IconComponent = kpi.icon;
              const TrendIcon = kpi.trend === "up" ? ArrowUp : ArrowDown;
              const trendColor = kpi.trend === "up" ? "text-green-500" : "text-red-500";
              
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Live</Badge>
                    </div>
                    <h3 className="text-sm font-medium text-gray-600 mb-1">{kpi.label}</h3>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</p>
                    <p className="text-xs text-gray-500 mb-2">{kpi.description}</p>
                    <div className="flex items-center">
                      <TrendIcon className={`h-4 w-4 ${trendColor} mr-1`} />
                      <span className={`text-sm font-medium ${trendColor}`}>{kpi.change}</span>
                      <span className="text-sm text-gray-500 ml-1">vs last month</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Analytics */}
          <Tabs defaultValue="demand" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="demand">Demand Analysis</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="predictive">Predictive Insights</TabsTrigger>
              <TabsTrigger value="regional">Regional Metrics</TabsTrigger>
            </TabsList>

            <TabsContent value="demand" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Service Demand Analysis</CardTitle>
                  <CardDescription>Real-time demand trends across service categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {demandMetrics.map((metric, index) => {
                      const TrendIcon = metric.trend === "up" ? ArrowUp : ArrowDown;
                      const trendColor = metric.trend === "up" ? "text-green-500" : "text-red-500";
                      
                      return (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                              <span className="text-sm font-bold text-blue-600">
                                {metric.service.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">{metric.service}</h3>
                              <p className="text-sm text-gray-500">{metric.demand} requests this month</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendIcon className={`h-4 w-4 ${trendColor}`} />
                            <span className={`font-medium ${trendColor}`}>{metric.growth}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Provider Performance</CardTitle>
                    <CardDescription>Top performing providers this month</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Sarah Johnson", rating: 4.9, jobs: 32, earnings: "$1,440" },
                      { name: "Mike Rodriguez", rating: 4.8, jobs: 28, earnings: "$2,100" },
                      { name: "Emma Chen", rating: 5.0, jobs: 26, earnings: "$1,560" },
                      { name: "David Thompson", rating: 4.7, jobs: 24, earnings: "$1,320" }
                    ].map((provider, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{provider.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>★ {provider.rating}</span>
                            <span>{provider.jobs} jobs</span>
                          </div>
                        </div>
                        <p className="font-semibold text-green-600">{provider.earnings}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Customer Satisfaction</CardTitle>
                    <CardDescription>Recent feedback and ratings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
                      <div className="text-yellow-500 text-2xl mb-2">★★★★★</div>
                      <p className="text-gray-600">Average rating across all services</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>5 stars</span>
                        <span>78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>4 stars</span>
                        <span>18%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '18%'}}></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>3 stars</span>
                        <span>3%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '3%'}}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="predictive" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Predictive Insights</CardTitle>
                  <CardDescription>Machine learning forecasts and recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {predictiveInsights.map((insight, index) => (
                    <div key={index} className="p-6 border rounded-lg bg-gradient-to-r from-blue-50 to-green-50">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{insight.title}</h3>
                        <Badge className={
                          insight.impact === "High" ? "bg-red-100 text-red-800" :
                          insight.impact === "Medium" ? "bg-yellow-100 text-yellow-800" :
                          "bg-green-100 text-green-800"
                        }>
                          {insight.impact} Impact
                        </Badge>
                      </div>
                      <p className="text-gray-700 mb-4">{insight.description}</p>
                      <div className="bg-white/50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Recommended Action:</h4>
                        <p className="text-gray-700">{insight.action}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="regional" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Regional Performance Metrics</CardTitle>
                  <CardDescription>Service demand and revenue by geographic area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {regionMetrics.map((region, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-4">{region.region}</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Bookings</span>
                              <span className="font-medium">{region.bookings}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Revenue</span>
                              <span className="font-medium text-green-600">{region.revenue}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Growth</span>
                              <span className="font-medium text-green-600">{region.growth}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Analytics;
