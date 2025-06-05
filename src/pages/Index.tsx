
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "AI-Powered Matching",
      description: "Our machine learning algorithm matches you with the perfect service provider based on your needs, location, and preferences."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Real-time calendar integration and auto-scheduling optimization for efficient service delivery and minimal wait times."
    },
    {
      icon: User,
      title: "Verified Providers",
      description: "All service providers are thoroughly vetted with ratings, certifications, and background checks for your peace of mind."
    }
  ];

  const services = [
    { name: "Home Cleaning", count: "150+ providers", color: "bg-blue-100 text-blue-800" },
    { name: "Plumbing", count: "89+ providers", color: "bg-green-100 text-green-800" },
    { name: "Tutoring", count: "200+ providers", color: "bg-purple-100 text-purple-800" },
    { name: "Graphic Design", count: "75+ providers", color: "bg-orange-100 text-orange-800" },
    { name: "Handyman", count: "120+ providers", color: "bg-blue-100 text-blue-800" },
    { name: "Consulting", count: "50+ providers", color: "bg-green-100 text-green-800" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🚀 Cloud-Native Service Orchestration
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Service<span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Flow</span>
            </h1>
            <p className="mb-8 text-xl text-gray-600 md:text-2xl leading-relaxed">
              Seamlessly match, schedule, and manage gig and professional services via our AI-driven cloud platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <Link to="/marketplace">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                <Link to="/provider-dashboard">
                  Become a Provider
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ServiceFlow?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform leverages cutting-edge AI and cloud technology to revolutionize how services are discovered, booked, and delivered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with verified professionals across a wide range of services, from home maintenance to creative consulting.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <Badge className={service.color}>
                    {service.count}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Link to="/marketplace">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100">Active Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100">Services Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4.9</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
