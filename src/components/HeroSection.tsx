
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Zap, Users, Sparkles, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-cyan-500/15 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Enhanced Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Enhanced Content */}
          <div className="space-y-10 text-white animate-fade-in-up">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full text-blue-200 text-sm font-semibold backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/15">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Trusted by 150+ Global Companies
              <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <div className="space-y-8">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block animate-fade-in-up">Ethical AI</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  Revolution
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-gray-300 font-light animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  Starts Here
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                Transform your business with transparent, compliant, and sustainable AI systems. 
                We make responsible artificial intelligence accessible for visionary organizations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <Button asChild size="lg" className="group relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-lg px-10 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <Link to="/contact">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative">Start Your AI Journey</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group text-lg px-10 py-6 rounded-2xl border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/50">
                <Link to="/services">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">70+</div>
                <div className="text-sm text-gray-400 font-medium">AI Models Deployed</div>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mt-2 opacity-60"></div>
              </div>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="text-sm text-gray-400 font-medium">Compliance Rate</div>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-2 opacity-60"></div>
              </div>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
                <div className="text-sm text-gray-400 font-medium">Happy Clients</div>
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mx-auto mt-2 opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Dashboard Mockup */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            {/* Floating decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full opacity-60 animate-float blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-indigo-400/30 to-blue-500/30 rounded-full opacity-60 animate-float blur-xl" style={{animationDelay: '1s'}}></div>
            
            <div className="relative bg-white/[0.08] backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="space-y-8">
                {/* Enhanced Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                    <h3 className="text-white font-bold text-xl">AI Ethics Dashboard</h3>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/20 rounded-full border border-green-400/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-sm font-medium">Live</span>
                  </div>
                </div>
                
                {/* Enhanced Metrics Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/[0.05] rounded-2xl p-6 border border-white/10 hover:bg-white/[0.08] transition-all duration-300 group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">98%</div>
                        <div className="text-xs text-gray-400 font-medium">Transparency Score</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full animate-pulse shadow-lg shadow-green-400/30" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/[0.05] rounded-2xl p-6 border border-white/10 hover:bg-white/[0.08] transition-all duration-300 group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">96%</div>
                        <div className="text-xs text-gray-400 font-medium">Fairness Index</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-3 rounded-full animate-pulse shadow-lg shadow-blue-400/30" style={{width: '96%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/[0.05] rounded-2xl p-6 border border-white/10 hover:bg-white/[0.08] transition-all duration-300 group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">94%</div>
                        <div className="text-xs text-gray-400 font-medium">Performance</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full animate-pulse shadow-lg shadow-yellow-400/30" style={{width: '94%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/[0.05] rounded-2xl p-6 border border-white/10 hover:bg-white/[0.08] transition-all duration-300 group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">92%</div>
                        <div className="text-xs text-gray-400 font-medium">Accountability</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-3 rounded-full animate-pulse shadow-lg shadow-purple-400/30" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Footer */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">
                      Real-time AI ethics monitoring
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                      <span className="text-xs text-blue-300 font-medium">Updated 2s ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-gradient-to-b from-white/80 to-transparent rounded-full mt-3 animate-bounce"></div>
        </div>
        <p className="text-white/60 text-xs mt-2 text-center font-medium">Scroll Down</p>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-8 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full animate-float blur-sm"></div>
      <div className="absolute bottom-1/4 right-8 w-12 h-12 bg-gradient-to-br from-indigo-400/20 to-pink-500/20 rounded-full animate-float blur-sm" style={{animationDelay: '3s'}}></div>
    </section>
  );
};

export default HeroSection;
