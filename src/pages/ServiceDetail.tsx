
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, BarChart3, Brain, Shield, Database } from 'lucide-react';

const ServiceDetail = () => {
  const { service } = useParams();

  const services = {
    'data-analytics': {
      title: 'Data Analytics Solutions',
      description: 'Transform raw data into actionable insights with ethical data processing and transparent methodologies.',
      icon: BarChart3,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Predictive Analytics & Forecasting',
        'Interactive Data Visualization',
        'Statistical Modeling & Analysis',
        'Real-time Dashboard Creation',
        'Business Intelligence Solutions',
        'Data Mining & Pattern Recognition'
      ],
      benefits: [
        'Increase decision-making speed by 60%',
        'Improve operational efficiency by 40%',
        'Reduce costs through data-driven insights',
        'Identify new revenue opportunities'
      ],
      process: [
        'Data Assessment & Strategy Planning',
        'Data Collection & Quality Assurance',
        'Analysis & Model Development',
        'Visualization & Dashboard Creation',
        'Implementation & Training',
        'Ongoing Support & Optimization'
      ]
    },
    'ai-ml': {
      title: 'AI/ML Development',
      description: 'Custom AI solutions built with responsibility, fairness, and transparency at their core.',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Machine Learning Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Deep Learning Applications',
        'Automated Decision Systems',
        'Intelligent Process Automation'
      ],
      benefits: [
        'Automate complex business processes',
        'Enhance customer experience with AI',
        'Reduce manual work by up to 80%',
        'Scale operations intelligently'
      ],
      process: [
        'AI Readiness Assessment',
        'Use Case Definition & Planning',
        'Data Preparation & Model Training',
        'Testing & Validation',
        'Deployment & Integration',
        'Monitoring & Continuous Learning'
      ]
    },
    'consulting': {
      title: 'Ethical AI Consulting',
      description: 'Comprehensive AI governance frameworks to ensure responsible and compliant AI deployment.',
      icon: Shield,
      gradient: 'from-emerald-500 to-teal-500',
      features: [
        'AI Ethics Assessment & Auditing',
        'Bias Detection & Mitigation',
        'Compliance Framework Development',
        'Risk Management & Governance',
        'Ethical AI Training & Education',
        'Regulatory Compliance Guidance'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Build trust with stakeholders',
        'Mitigate AI-related risks',
        'Establish ethical AI practices'
      ],
      process: [
        'Current State Assessment',
        'Risk & Ethics Analysis',
        'Framework Development',
        'Policy & Procedure Creation',
        'Team Training & Implementation',
        'Ongoing Monitoring & Updates'
      ]
    },
    'governance': {
      title: 'Data Governance',
      description: 'Establish robust data governance practices that prioritize privacy, security, and compliance.',
      icon: Database,
      gradient: 'from-orange-500 to-red-500',
      features: [
        'Data Privacy & Protection',
        'GDPR & CCPA Compliance',
        'Data Quality Management',
        'Security Protocol Implementation',
        'Data Lineage & Cataloging',
        'Access Control & Permissions'
      ],
      benefits: [
        'Ensure data privacy compliance',
        'Improve data quality by 85%',
        'Reduce security risks',
        'Streamline data operations'
      ],
      process: [
        'Data Landscape Assessment',
        'Governance Strategy Design',
        'Policy & Standard Creation',
        'Tool Implementation & Integration',
        'Team Training & Adoption',
        'Continuous Monitoring & Improvement'
      ]
    }
  };

  const currentService = services[service as keyof typeof services];

  if (!currentService) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = currentService.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r ${currentService.gradient} rounded-full mix-blend-multiply filter blur-xl opacity-20`}></div>
          <div className={`absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-r ${currentService.gradient} rounded-full mix-blend-multiply filter blur-xl opacity-20`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${currentService.gradient} rounded-2xl shadow-xl`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
              {currentService.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {currentService.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className={`bg-gradient-to-r ${currentService.gradient} hover:opacity-90 px-8`}>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Features */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-2 h-2 bg-gradient-to-r ${currentService.gradient} rounded-full mt-2`}></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <Card className="p-6 border-0 shadow-lg">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0 space-y-4">
                  {currentService.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService.process.map((step, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="px-0 pb-0">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${currentService.gradient} text-white rounded-xl font-bold text-lg mb-4`}>
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our {currentService.title.toLowerCase()} can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className={`bg-gradient-to-r ${currentService.gradient} hover:opacity-90 px-8`}>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
