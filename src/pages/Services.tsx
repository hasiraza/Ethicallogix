
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Data Analytics Services",
      description: "Transform your data into actionable insights with ethical processing and transparent methodologies.",
      features: [
        "Predictive Analytics & Modeling",
        "Statistical Analysis & Reporting",
        "Data Visualization & Dashboards",
        "Real-time Analytics Platforms",
        "Business Intelligence Solutions",
        "Performance Metrics & KPIs"
      ],
      industries: ["Healthcare", "Finance", "Retail", "Manufacturing"]
    },
    {
      title: "AI/ML Model Development",
      description: "Custom artificial intelligence solutions built with responsibility, fairness, and transparency.",
      features: [
        "Machine Learning Model Design",
        "Natural Language Processing",
        "Computer Vision Systems",
        "Deep Learning Solutions",
        "Recommendation Systems",
        "Automated Decision Systems"
      ],
      industries: ["E-commerce", "Healthcare", "Financial Services", "Manufacturing"]
    },
    {
      title: "Ethical AI Consulting",
      description: "Comprehensive AI governance frameworks to ensure responsible and compliant AI deployment.",
      features: [
        "AI Ethics Assessment",
        "Bias Detection & Mitigation",
        "Algorithmic Auditing",
        "Compliance Framework Design",
        "Risk Management Strategies",
        "Stakeholder Impact Analysis"
      ],
      industries: ["Government", "Healthcare", "Finance", "Technology"]
    },
    {
      title: "Data Governance & Compliance",
      description: "Establish robust data governance practices that prioritize privacy, security, and regulatory compliance.",
      features: [
        "GDPR & CCPA Compliance",
        "Data Privacy Protection",
        "Data Quality Management",
        "Security Protocol Implementation",
        "Data Lifecycle Management",
        "Regulatory Reporting"
      ],
      industries: ["All Industries", "Government", "Healthcare", "Finance"]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant AI solutions for patient care, diagnosis assistance, and operational efficiency.",
      useCases: ["Medical imaging analysis", "Drug discovery", "Patient outcome prediction", "Clinical decision support"]
    },
    {
      name: "Financial Services",
      description: "Secure, transparent AI for fraud detection, risk assessment, and customer service.",
      useCases: ["Fraud detection", "Credit scoring", "Algorithmic trading", "Customer service automation"]
    },
    {
      name: "Retail & E-commerce",
      description: "Personalized, fair recommendation systems and supply chain optimization.",
      useCases: ["Recommendation engines", "Inventory optimization", "Price optimization", "Customer segmentation"]
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and process optimization solutions.",
      useCases: ["Predictive maintenance", "Quality inspection", "Supply chain optimization", "Production planning"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Our Services & Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and data solutions designed with ethics, transparency, 
              and your business success in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Industries Served:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, industryIndex) => (
                        <span
                          key={industryIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across multiple sectors with industry-specific 
              compliance and ethical considerations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Common Use Cases:</h4>
                  <ul className="space-y-1">
                    {industry.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss how our ethical AI solutions can drive your business forward 
              while maintaining the highest standards of responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                <Link to="/resources">Download Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
