
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, User, Check, Clock, ArrowUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Total Bookings", value: "127", change: "+12%", icon: Calendar },
    { label: "Average Rating", value: "4.9", change: "+0.1", icon: User },
    { label: "Completed Jobs", value: "98%", change: "+2%", icon: Check },
    { label: "Response Time", value: "< 2h", change: "-15min", icon: Clock }
  ];

  const upcomingBookings = [
    {
      id: 1,
      customer: "Alice Johnson",
      service: "House Cleaning",
      date: "Today, 2:00 PM",
      duration: "3 hours",
      price: "$135",
      status: "confirmed",
      address: "123 Main St, Downtown"
    },
    {
      id: 2,
      customer: "Bob Smith",
      service: "Deep Cleaning",
      date: "Tomorrow, 10:00 AM",
      duration: "4 hours",
      price: "$180",
      status: "confirmed",
      address: "456 Oak Ave, Westside"
    },
    {
      id: 3,
      customer: "Carol Davis",
      service: "Office Cleaning",
      date: "Friday, 6:00 PM",
      duration: "2 hours",
      price: "$90",
      status: "pending",
      address: "789 Business Blvd, Downtown"
    }
  ];

  const recentEarnings = [
    { date: "Dec 4", amount: "$135", service: "House Cleaning" },
    { date: "Dec 3", amount: "$90", service: "Office Cleaning" },
    { date: "Dec 2", amount: "$180", service: "Deep Cleaning" },
    { date: "Dec 1", amount: "$75", service: "Kitchen Cleaning" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Provider Dashboard</h1>
            <p className="text-gray-600">Manage your services, bookings, and earnings</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500 font-medium">{stat.change}</span>
                      <span className="text-sm text-gray-500 ml-1">vs last month</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upcoming Bookings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Bookings</CardTitle>
                    <CardDescription>Your next scheduled services</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingBookings.slice(0, 3).map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-gray-900">{booking.customer}</h4>
                            <Badge 
                              className={booking.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                              }
                            >
                              {booking.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{booking.service}</p>
                          <p className="text-sm text-gray-500">{booking.date} • {booking.duration}</p>
                          <p className="text-sm text-gray-500">{booking.address}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{booking.price}</p>
                          <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent Earnings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Earnings</CardTitle>
                    <CardDescription>Your latest payment history</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentEarnings.map((earning, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{earning.service}</h4>
                          <p className="text-sm text-gray-500">{earning.date}</p>
                        </div>
                        <p className="font-semibold text-green-600">{earning.amount}</p>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-4">
                      View All Earnings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>All Bookings</CardTitle>
                  <CardDescription>Manage your upcoming and past bookings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-6 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-medium text-gray-900">{booking.customer}</h4>
                          <Badge 
                            className={booking.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                            }
                          >
                            {booking.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-1">{booking.service}</p>
                        <p className="text-sm text-gray-500 mb-1">{booking.date} • {booking.duration}</p>
                        <p className="text-sm text-gray-500">{booking.address}</p>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-xl font-semibold text-gray-900">{booking.price}</p>
                        <div className="space-x-2">
                          <Button size="sm" variant="outline">Message</Button>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Details</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="earnings" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">This Week</h3>
                    <p className="text-3xl font-bold text-gray-900">$485</p>
                    <p className="text-sm text-green-600 mt-1">+15% from last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">This Month</h3>
                    <p className="text-3xl font-bold text-gray-900">$2,140</p>
                    <p className="text-sm text-green-600 mt-1">+8% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">Total Earned</h3>
                    <p className="text-3xl font-bold text-gray-900">$12,590</p>
                    <p className="text-sm text-gray-500 mt-1">Since joining</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Earnings History</CardTitle>
                  <CardDescription>Detailed breakdown of your earnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentEarnings.map((earning, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <Check className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{earning.service}</h4>
                            <p className="text-sm text-gray-500">{earning.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">{earning.amount}</p>
                          <p className="text-xs text-gray-500">Completed</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Manage your provider profile and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Sarah Johnson</h3>
                      <p className="text-gray-600">Professional House Cleaner</p>
                      <Badge className="bg-green-100 text-green-800 mt-1">Verified Provider</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Services Offered</h4>
                      <div className="space-y-2">
                        <Badge variant="outline">House Cleaning</Badge>
                        <Badge variant="outline">Deep Cleaning</Badge>
                        <Badge variant="outline">Office Cleaning</Badge>
                        <Badge variant="outline">Move-in/out Cleaning</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Availability</h4>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-sm text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                        <p className="text-sm text-gray-600">Sunday: Unavailable</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">Edit Profile</Button>
                    <Button variant="outline">Manage Services</Button>
                    <Button variant="outline">Update Availability</Button>
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

export default ProviderDashboard;
