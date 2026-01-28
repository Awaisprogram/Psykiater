const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center jsustify-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Top Right - Various conditions */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {/*  Left - Grid images */}
            <div className="space-y-4 lg:space-y-6 animate-slideUp delay-100">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-teal-200 flex items-center justify-center">
                  <span className="text-white text-sm">Meditation</span>
                </div>
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                  <span className="text-white text-sm">Therapy Session</span>
                </div>
              </div>
            </div>

            {/* Top Right - Various conditions */}
            <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-20 animate-slideUp delay-200">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-slate-300 to-gray-300 flex items-center justify-center">
                  <span className="text-white text-sm">Depression Support</span>
                </div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-teal-300 to-emerald-300 flex items-center justify-center">
                  <span className="text-white text-sm">Anxiety Treatment</span>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Center Content */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-4 text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Psychiatrist <span className="text-teal-700">Online</span>
              </h1>
              <p className="text-xl text-center lg:text-2xl text-gray-600 font-light italic leading-relaxed">
                Get Professional Help From Our Psychiatrist and Psychologist Online
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-xl text-center">
              We perform clinical evaluations, diagnostic assessments, and offer treatment for a wide range of mental health and addiction conditions. You can access us online, by phone, or in person.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-2">
              <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Video Consultation
              </button>
              <button className="bg-white hover:bg-gray-50 text-teal-700 px-8 py-4 rounded-lg font-medium border-2 border-teal-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1">
                Meeting in Oslo & Ski
              </button>
            </div>
          </div>

          {/* Right Grid Images */}
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            {/* Top Left - Meditation */}
            <div className="space-y-4 lg:space-y-6 animate-slideUp delay-100">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-teal-200 flex items-center justify-center">
                  <span className="text-white text-sm">Meditation</span>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                  <span className="text-white text-sm">Therapy Session</span>
                </div>
              </div>
            </div>

            {/* Top Right - Various conditions */}
            <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-12 animate-slideUp delay-200">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-slate-300 to-gray-300 flex items-center justify-center">
                  <span className="text-white text-sm">Depression Support</span>
                </div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-teal-300 to-emerald-300 flex items-center justify-center">
                  <span className="text-white text-sm">Anxiety Treatment</span>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
                  <span className="text-white text-sm">Couple Therapy</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero