
import { CheckCircle, Shield, Zap, Users, Brain, Database, Target, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Ethical Compliance",
      description: "Built-in bias detection and mitigation ensures fair AI systems",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast Deployment",
      description: "Get your AI models production-ready in weeks, not months",
      color: "text-yellow-600"
    },
    {
      icon: Brain,
      title: "Explainable AI",
      description: "Complete transparency in AI decision-making processes",
      color: "text-purple-600"
    },
    {
      icon: Database,
      title: "Secure Data Handling",
      description: "Enterprise-grade security with GDPR compliance by design",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "24/7 Expert Support",
      description: "Dedicated AI ethics specialists at your service",
      color: "text-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Average 300% ROI within the first year of deployment",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Platform Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Why Choose Our
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              AI Platform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI platform combines cutting-edge technology with ethical principles 
            to deliver solutions that you can trust and rely on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>No setup fees</span>
            <span>•</span>
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>30-day money-back guarantee</span>
            <span>•</span>
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Free consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
