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

          {/* Image Grid - Responsive Layout */}
          <div className="relative -mt-8 md:-mt-24 lg:-mt-96 lg:h-[90vh] overflow-hidden">
            {/* Mobile/Tablet View - Only 2 Images */}
            <div className="flex lg:hidden justify-center gap-4 px-4 pt-8">
              <div className="rounded-lg overflow-hidden shadow-xl w-[45%] max-w-[200px] h-[240px] md:h-[300px]">
                <img
                  src={therapy3}
                  alt="Meditation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl w-[45%] max-w-[200px] h-[240px] md:h-[300px]">
                <img
                  src={therapy1}
                  alt="Therapy Session"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Desktop View - Full Layout */}
            <div className="hidden lg:flex items-center justify-between gap-3 lg:gap-4">
              {/* Left Side - 2 images */}
              <div className="flex flex-col gap-4 justify-start">
                {/* Top Left - Meditation woman (tall) */}
                <div className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]">
                  <img
                    src={therapy3}
                    alt="Meditation"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom Left - Work stress */}
                <div className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]">
                  <img
                    src={therapy2}
                    alt="Work Stress"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Center - 3 columns */}
              <div className="flex-1 grid grid-cols-3 gap-4 pt-28 max-w-4xl mx-auto">
                {/* Column 1 - Depression */}
                <div className="flex flex-col gap-4 justify-start mt-40">
                  <div className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]">
                    <img
                      src={therapy4}
                      alt="Depression Support"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]">
                    <img
                      src={therapy1}
                      alt="Mental Health"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Column 2 - Anxiety (single centered image) */}
                <div className="flex justify-center mt-56">
                  <div className="rounded-lg overflow-hidden shadow-xl w-[220px] xl:w-[244px] h-[244px]">
                    <img
                      src={therapy1}
                      alt="Anxiety Treatment"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Column 3 - Couple Therapy */}
                <div className="flex flex-col gap-4 justify-start mt-40">
                  <div className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]">
                    <img
                      src={therapy3}
                      alt="Couple Therapy"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]">
                    <img
                      src={therapy2}
                      alt="Family Support"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - 2 images */}
              <div className="flex flex-col gap-4 justify-end">
                {/* Top Right - Sleep issues (tall) */}
                <div className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]">
                  <img
                    src={therapy2}
                    alt="Sleep Issues"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom Right - Trauma */}
                <div className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]">
                  <img
                    src={therapy4}
                    alt="Trauma Support"
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