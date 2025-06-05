
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const providers = [
    {
      id: 1,
      name: "Sarah Johnson",
      service: "Home Cleaning",
      rating: 4.9,
      reviews: 127,
      price: "$45/hour",
      location: "Downtown",
      availability: "Available Today",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      badges: ["Verified", "Top Rated"],
      description: "Professional house cleaning with eco-friendly products. 5+ years experience."
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      service: "Plumbing",
      rating: 4.8,
      reviews: 89,
      price: "$75/hour",
      location: "Westside",
      availability: "Available Tomorrow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      badges: ["Licensed", "Emergency Service"],
      description: "Licensed plumber specializing in residential repairs and installations."
    },
    {
      id: 3,
      name: "Emma Chen",
      service: "Tutoring",
      rating: 5.0,
      reviews: 156,
      price: "$60/hour",
      location: "University District",
      availability: "Available Today",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      badges: ["PhD", "Top Rated"],
      description: "Mathematics and Physics tutoring for high school and college students."
    },
    {
      id: 4,
      name: "David Thompson",
      service: "Handyman",
      rating: 4.7,
      reviews: 203,
      price: "$55/hour",
      location: "Northside",
      availability: "Available This Week",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      badges: ["Insured", "Same Day"],
      description: "General home repairs, furniture assembly, and small renovations."
    },
    {
      id: 5,
      name: "Lisa Park",
      service: "Graphic Design",
      rating: 4.9,
      reviews: 94,
      price: "$80/hour",
      location: "Creative District",
      availability: "Available Today",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      badges: ["Portfolio", "Fast Delivery"],
      description: "Brand identity, web design, and marketing materials. 7+ years experience."
    },
    {
      id: 6,
      name: "James Wilson",
      service: "Consulting",
      rating: 4.8,
      reviews: 67,
      price: "$120/hour",
      location: "Business District",
      availability: "Available Next Week",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      badges: ["MBA", "Enterprise"],
      description: "Business strategy and digital transformation consulting for SMBs."
    }
  ];

  const categories = [
    { value: "all", label: "All Services" },
    { value: "cleaning", label: "Home Cleaning" },
    { value: "plumbing", label: "Plumbing" },
    { value: "tutoring", label: "Tutoring" },
    { value: "handyman", label: "Handyman" },
    { value: "design", label: "Graphic Design" },
    { value: "consulting", label: "Consulting" }
  ];

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "downtown", label: "Downtown" },
    { value: "westside", label: "Westside" },
    { value: "university", label: "University District" },
    { value: "northside", label: "Northside" },
    { value: "creative", label: "Creative District" },
    { value: "business", label: "Business District" }
  ];

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           provider.service.toLowerCase().includes(selectedCategory);
    const matchesLocation = selectedLocation === "all" || 
                           provider.location.toLowerCase().includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Marketplace</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find verified professionals for all your service needs. AI-powered matching ensures you get the best fit for your requirements.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search services or providers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-6">
            <p className="text-gray-600">
              Found {filteredProviders.length} providers matching your criteria
            </p>
          </div>

          {/* Provider Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider) => (
              <Card key={provider.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                        {provider.name}
                      </CardTitle>
                      <CardDescription className="text-blue-600 font-medium mb-2">
                        {provider.service}
                      </CardDescription>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm font-medium ml-1">{provider.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({provider.reviews} reviews)</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {provider.badges.map((badge, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-4">{provider.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Price:</span>
                      <span className="font-semibold text-gray-900">{provider.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Location:</span>
                      <span className="text-sm text-gray-700">{provider.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Availability:</span>
                      <Badge className="bg-green-100 text-green-800">
                        {provider.availability}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      <User className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8">
              Load More Providers <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;
