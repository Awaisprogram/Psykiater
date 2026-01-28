import therapy1 from "../../assets/therapy1.jpg";
import therapy2 from "../../assets/therapy2.jpg";
import therapy3 from "../../assets/therapy3.jpg";
import therapy4 from "../../assets/therapy4.jpg";
import article1 from "../../assets/article1.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-100vh lg:h-[120vh] overflow-hidden pt-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Content and Images Container */}
        <div className="relative">
          {/* Center Content */}
          <div className="text-center mb-8 relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-900 leading-tight mb-4">
              Psychiatrist Online
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-light italic leading-relaxed mb-6">
              Get Professional Help From Our Psychiatrist <br /> and Psychologist Online
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              We perform clinical evaluations, diagnostic assessments, and offer treatment for a wide range of mental health and addiction conditions. You can access us online, by phone, or in person.
            </p>

            {/* CTA Buttons with decorative line */}
            <div className="relative inline-block">
              <div className="flex flex-wrap justify-center gap-4 lg:mb-32 mb-8">
                <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Video Consultation
                </button>
                <button className="bg-white hover:bg-gray-50 text-teal-700 px-8 py-3.5 rounded-lg font-medium border-2 border-teal-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1">
                  Meeting in Oslo & Ski
                </button>
              </div>
             
            </div>
          </div>

          {/* Image Grid - Exact Layout with Overlapping Side Images */}
          <div className="relative -mt-32 md:-mt-24 lg:-mt-56">
            <div className="flex items-start justify-between gap-2 md:gap-4">
              {/* Left Side - 2 images (starts overlapping content) */}
              <div className="hidden md:block w-24 md:w-28 lg:w-40 flex-shrink-0 space-y-2 md:space-y-4">
                {/* Top Left - Meditation woman (tall) */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-48 md:h-64 lg:h-96">
                  <img
                    src={therapy3}
                    alt="Meditation"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom Left - Work stress */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-32 md:h-44 lg:h-64">
                  <img
                    src={therapy2}
                    alt="Work Stress"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Center - 3 images in a row */}
              <div className="flex-1 grid grid-cols-3 gap-2 md:gap-4 pt-24 md:pt-28">
                {/* Depression */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-40 md:h-52 lg:h-80">
                  <img
                    src={therapy4}
                    alt="Depression"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Anxiety */}
                <div className="rounded-2xl mt-8 md:mt-12 overflow-hidden shadow-xl h-40 md:h-52 lg:h-80">
                  <img
                    src={therapy1}
                    alt="Anxiety"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Couple Therapy */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-40 md:h-52 lg:h-80">
                  <img
                    src={article1}
                    alt="Couple Therapy"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Side - 2 images (starts overlapping content) */}
              <div className="hidden md:block w-24 md:w-28 lg:w-40 flex-shrink-0 space-y-2 md:space-y-4">
                {/* Top Right - Sleep issues (tall) */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-48 md:h-64 lg:h-96">
                  <img
                    src={therapy2}
                    alt="Sleep Issues"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom Right - Trauma */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-32 md:h-44 lg:h-64">
                  <img
                    src={therapy4}
                    alt="Trauma"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom gradient fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Hero