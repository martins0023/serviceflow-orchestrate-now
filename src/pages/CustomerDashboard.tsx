
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, User, Check, Clock, Plus, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Total Bookings", value: "24", icon: Calendar },
    { label: "Favorite Providers", value: "8", icon: User },
    { label: "Completed Services", value: "22", icon: Check },
    { label: "Avg Response Time", value: "< 1h", icon: Clock }
  ];

  const recentBookings = [
    {
      id: 1,
      provider: "Sarah Johnson",
      service: "House Cleaning",
      date: "Today, 2:00 PM",
      status: "confirmed",
      price: "$135",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      provider: "Mike Rodriguez",
      service: "Plumbing Repair",
      date: "Yesterday, 10:00 AM",
      status: "completed",
      price: "$150",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      provider: "Emma Chen",
      service: "Math Tutoring",
      date: "Dec 3, 4:00 PM",
      status: "completed",
      price: "$60",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const favoriteProviders = [
    {
      name: "Sarah Johnson",
      service: "House Cleaning",
      rating: 4.9,
      bookings: 8,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mike Rodriguez",
      service: "Plumbing",
      rating: 4.8,
      bookings: 3,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Chen",
      service: "Tutoring",
      rating: 5.0,
      bookings: 12,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
              <p className="text-gray-600">Manage your bookings and find new services</p>
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 mt-4 md:mt-0">
              <Link to="/marketplace">
                <Plus className="h-4 w-4 mr-2" />
                Book New Service
              </Link>
            </Button>
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
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Bookings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>Your latest service appointments</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <img
                          src={booking.image}
                          alt={booking.provider}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-gray-900">{booking.provider}</h4>
                            <Badge 
                              className={booking.status === 'completed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                              }
                            >
                              {booking.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{booking.service}</p>
                          <p className="text-sm text-gray-500">{booking.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{booking.price}</p>
                          {booking.status === 'completed' ? (
                            <Button size="sm" variant="outline" className="mt-1">
                              Review
                            </Button>
                          ) : (
                            <Button size="sm" className="mt-1 bg-blue-600 hover:bg-blue-700">
                              Details
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      View All Bookings
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Popular services in your area</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start h-auto p-4">
                      <div className="text-left">
                        <p className="font-medium">House Cleaning</p>
                        <p className="text-sm text-gray-500">Starting from $45/hour</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-auto p-4">
                      <div className="text-left">
                        <p className="font-medium">Plumbing Services</p>
                        <p className="text-sm text-gray-500">Emergency available</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-auto p-4">
                      <div className="text-left">
                        <p className="font-medium">Handyman</p>
                        <p className="text-sm text-gray-500">Same-day service</p>
                      </div>
                    </Button>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link to="/marketplace">
                        Browse All Services
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>All Bookings</CardTitle>
                  <CardDescription>Complete history of your service appointments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-6 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-4">
                        <img
                          src={booking.image}
                          alt={booking.provider}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="text-lg font-medium text-gray-900">{booking.provider}</h4>
                            <Badge 
                              className={booking.status === 'completed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                              }
                            >
                              {booking.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-1">{booking.service}</p>
                          <p className="text-sm text-gray-500">{booking.date}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-xl font-semibold text-gray-900">{booking.price}</p>
                        <div className="space-x-2">
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          {booking.status === 'completed' ? (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Book Again
                            </Button>
                          ) : (
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              View Details
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Favorite Providers</CardTitle>
                  <CardDescription>Providers you've bookmarked for future services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteProviders.map((provider, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 text-center">
                          <img
                            src={provider.image}
                            alt={provider.name}
                            className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                          />
                          <h3 className="font-semibold text-gray-900 mb-1">{provider.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{provider.service}</p>
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm font-medium">{provider.rating}</span>
                          </div>
                          <p className="text-xs text-gray-500 mb-4">{provider.bookings} bookings with you</p>
                          <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                            Book Again
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="messages" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>Communicate with your service providers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                    <p className="text-gray-600 mb-4">
                      When you book a service, you'll be able to communicate with providers here.
                    </p>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link to="/marketplace">
                        Book Your First Service
                      </Link>
                    </Button>
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

export default CustomerDashboard;
