import { Hammer, Clock, Mail, ArrowRight, Check } from "lucide-react";

const UnderDevelopment = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeIn">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-100/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <Hammer size={18} className="text-teal-700" />
              <span className="text-teal-800 font-medium text-sm">Under Development</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Pricing Plans <span className="text-teal-700">Coming Soon</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're crafting transparent, flexible pricing options tailored to your mental health journey. Great things take time!
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Flexible session packages",
                "Insurance & out-of-pocket options",
                "Transparent pricing with no hidden fees",
                "Special rates for ongoing care"
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center">
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Estimated Time */}
            <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-teal-100">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Clock size={20} className="text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Estimated launch</p>
                <p className="text-gray-900 font-medium">Within the next few weeks</p>
              </div>
            </div>

            {/* Email Subscription */}
            <div className="space-y-3">
              <label className="text-gray-700 font-medium">
                Get notified when pricing is available:
              </label>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-1">
                  <Mail 
                    size={18} 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
                <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 group">
                  <span>Notify Me</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <p className="text-sm text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-slideUp delay-200">
            {/* Main Card */}
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/50 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              {/* Construction Icon Animation */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center animate-bounce">
                    <Hammer size={56} className="text-teal-700" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-amber-900 font-bold text-lg">!</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Something Amazing is in the Works
                  </h3>
                  <p className="text-gray-600 max-w-sm">
                    Our team is working hard to bring you clear, fair, and accessible pricing options for all our mental health services.
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-xs space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Development Progress</span>
                    <span className="font-medium text-teal-700">75%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-500 to-teal-700 rounded-full animate-pulse"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>

                {/* Contact Option */}
                <div className="pt-4 border-t border-gray-100 w-full">
                  <p className="text-gray-600 text-sm mb-3">
                    Need immediate assistance?
                  </p>
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-medium transition-colors"
                  >
                    Contact us directly
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Quality First</p>
                  <p className="text-xs text-gray-500">Worth the wait</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-float delay-150">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Coming Soon</p>
                  <p className="text-xs text-gray-500">Stay tuned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom keyframes for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default UnderDevelopment;

