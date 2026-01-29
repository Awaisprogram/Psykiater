import therapy1 from "../../assets/therapy1.jpg";
import therapy2 from "../../assets/therapy2.jpg";
import therapy3 from "../../assets/therapy3.jpg";
import therapy4 from "../../assets/therapy4.jpg";
import article1 from "../../assets/article1.jpg";
import Marquee from './Marquee'

const Hero = () => {
  return (
    <section className="relative min-h-[1,024px] overflow-hidden pt-20 bg-white overflow-hidden">
      <div className="max-w-[1,440px] mx-auto px-6 lg:px-8 py-4">
        {/* Content and Images Container */}
        <div className="relative ">
          {/* Center Content */}
          <div className="text-center   mb-8 relative z-10 flex flex-col items-center justify-center">
            <h1 className="text-4xl  lg:text-[64px] xl:text-6xl font-bold text-teal-900 leading-tight mb-4 py-[16px] px-[8px]">
              Psychiatrist Online
            </h1>
            <p className="text-[32px] text-[#454545] font-serif font-bold italic italic mb-6 lg:w-[683px] lg:h-[87px] leading-[43.2px]">
              Get Professional Help From Our Psychiatrist  and Psychologist Online
            </p>
            <p className="text-[#595959] text-[20px] leading-relaxed mb-8 lg:w-[639px] lg:h-[96px]">
              We perform clinical evaluations, diagnostic assessments, and offer treatment for a wide range of mental health and addiction conditions. You can access us online, by phone, or in person.
            </p>

            {/* CTA Buttons with decorative line */}
            <div className="relative inline-block">
              <div className="flex flex-wrap justify-center gap-4 lg:mb-32 mb-8">
                <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Video Consultation
                </button>
                <p className="text-teal-700 px-8 py-3.5 font-medium border-b border-b-teal-700">
                  Meeting in Oslo & Ski
                </p>
              </div>
             
            </div>
          </div>

          {/* Image Grid - Exact Layout with Overlapping Side Images */}
          <div className="relative -mt-8 md:-mt-24 lg:-mt-96 lg:h-[90vh] overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
              {/* Left Side - 2 images - hidden on small screens, visible on lg+ */}
              <div className="hidden lg:block w-full md:w-auto flex md:flex-col gap-3 md:gap-4 justify-center md:justify-start">
                {/* Top Left - Meditation woman (tall) */}
                <div className="rounded-lg overflow-hidden shadow-xl w-[calc(50%-6px)] md:w-[140px] lg:w-[180px] xl:w-[220px] h-[180px] md:h-[200px] lg:h-[244px]">
                  <img
                    src={therapy3}
                    alt="Meditation"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom Left - Work stress */}
                <div className="rounded-lg overflow-hidden shadow-xl w-[calc(50%-6px)] md:w-[140px] lg:w-[180px] xl:w-[220px] h-[180px] md:h-[200px] lg:h-[244px]">
                  <img
                    src={therapy2}
                    alt="Work Stress"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Center - 2 images in a row (always visible) */}
              <div className="w-full md:flex-1 grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 pt-8 md:pt-28">
                {/* First Center Image */}
                <div className="rounded-lg mt-4 md:mt-8 lg:mt-40 overflow-hidden shadow-xl h-[140px] md:h-[180px] lg:h-[220px] xl:h-[244px]">
                  <img
                    src={therapy4}
                    alt="Therapy"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Second Center Image */}
                <div className="rounded-lg mt-4 md:mt-8 lg:mt-56 overflow-hidden shadow-xl h-[140px] md:h-[180px] lg:h-[220px] xl:h-[244px]">
                  <img
                    src={therapy1}
                    alt="Anxiety"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Side - 2 images - hidden on small screens, visible on lg+ */}
              <div className="hidden lg:block w-full md:w-auto flex md:flex-col gap-3 md:gap-4 justify-center md:justify-end mt-3 md:mt-0">
                {/* Top Right - Sleep issues (tall) */}
                <div className="rounded-lg overflow-hidden shadow-xl w-[calc(50%-6px)] md:w-[140px] lg:w-[180px] xl:w-[220px] h-[180px] md:h-[200px] lg:h-[244px]">
                  <img
                    src={therapy2}
                    alt="Sleep Issues"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom Right - Trauma */}
                <div className="rounded-lg overflow-hidden shadow-xl w-[calc(50%-6px)] md:w-[140px] lg:w-[180px] xl:w-[220px] h-[180px] md:h-[200px] lg:h-[244px]">
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
            <Marquee/>
           
    </section>
  );
};



export default Hero

