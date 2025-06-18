
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { BarChart3, Brain, Shield, Database, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPreview = () => {
  const services = [
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with ethical data processing and transparent methodologies.",
      features: ["Predictive Analytics", "Data Visualization", "Statistical Modeling", "Real-time Dashboards"],
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI/ML Development",
      description: "Custom AI solutions built with responsibility, fairness, and transparency at their core.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Deep Learning"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Ethical AI Consulting",
      description: "Comprehensive AI governance frameworks to ensure responsible and compliant AI deployment.",
      features: ["AI Ethics Assessment", "Bias Detection & Mitigation", "Compliance Frameworks", "Risk Management"],
      icon: Shield,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Data Governance",
      description: "Establish robust data governance practices that prioritize privacy, security, and compliance.",
      features: ["Data Privacy", "GDPR Compliance", "Data Quality", "Security Protocols"],
      icon: Database,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Comprehensive Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            End-to-End AI & Data
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From ethical AI development to data governance, we provide comprehensive solutions 
            that drive innovation while maintaining the highest standards of responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardHeader className="pb-6 relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-10 py-4 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
