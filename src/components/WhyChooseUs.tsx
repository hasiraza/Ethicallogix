
import { Shield, Target, CheckCircle, Search, Handshake, Building } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Ethical First Approach",
      description: "Every AI system we develop is built with ethics, fairness, and transparency as core principles.",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Proven Expertise",
      description: "Our team combines deep technical knowledge with extensive experience in responsible AI development.",
      icon: Target,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance Ready",
      description: "All solutions are designed to meet current and emerging regulatory requirements including GDPR, CCPA, and AI Act.",
      icon: CheckCircle,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Transparent Methodologies",
      description: "We provide clear documentation and explainable AI systems that you can understand and trust.",
      icon: Search,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Ongoing Support",
      description: "Continuous monitoring, updates, and support to ensure your AI systems remain ethical and effective.",
      icon: Handshake,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Industry Agnostic",
      description: "Experience across healthcare, finance, retail, manufacturing, and government sectors.",
      icon: Building,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/30 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
            <Shield className="w-4 h-4 mr-2" />
            Trusted Partner
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Why Choose
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              EthicalLogix?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're not just another AI company. We're your partners in building responsible, 
            trustworthy AI solutions that create lasting value and competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                      {reason.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Element */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${reason.gradient} rounded-full opacity-0 group-hover:opacity-80 transition-all duration-500 transform group-hover:scale-110`}></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-400 text-sm">AI Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">150+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
