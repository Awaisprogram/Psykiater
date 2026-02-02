import { motion } from "motion/react";
import article1 from "../../assets/article1.jpg";
import Marquee from "./Marquee";
import Button from "../ui/Button";
import LazyImage from "../ui/LazyImage";

// Static imports for image paths (these don't create separate chunks)
import therapy1Img from "../../assets/therapy1.jpg";
import therapy2Img from "../../assets/therapy2.jpg";
import therapy3Img from "../../assets/therapy3.jpg";
import therapy4Img from "../../assets/therapy4.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[1,024px] overflow-hidden pt-20 bg-white overflow-hidden">
      <div className="max-w-[1,440px] mx-auto px-6 lg:px-8 py-4">
        {/* Content and Images Container */}
        <div className="relative ">
          {/* Center Content */}
          <motion.div
            className="text-center pt-12 mb-8 relative z-10 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl lg:text-[64px] xl:text-6xl font-medium text-[#1D6361] leading-tight mb-4 py-[16px] px-[8px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Psychiatrist Online
            </motion.h1>
            <motion.p
              className="text-lg lg:text-[32px] text-[#454545] font-serif font-semibold italic mb-6 lg:w-[683px] lg:leading-[43.2px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Get Professional Help From Our Psychiatrist and Psychologist
              Online
            </motion.p>
            <p
              className="text-ld text-[#595959] lg:text-[20px] leading-relaxed mb-8 lg:w-[639px] lg:h-[96px]"
            >
              We perform clinical evaluations, diagnostic assessments, and offer
              treatment for a wide range of mental health and addiction
              conditions. You can access us online, by phone, or in person.
            </p>

            {/* CTA Buttons with decorative line */}
            <div className="relative inline-block">
              <motion.div
                className="flex flex-wrap justify-center gap-4 lg:mb-32 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button text={" Video Consultation"} />

                <motion.p
                  className="text-teal-700 px-8 py-3.5 font-medium border-b border-b-teal-700 cursor-default"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Meeting in Oslo & Ski
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Grid - Responsive Layout */}
          <motion.div
            className="relative -mt-8 md:-mt-24 lg:-mt-96 max-w-[1200px] mx-auto lg:h-[562px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Mobile/Tablet View - Only 2 Images */}
            <motion.div
              className="flex lg:hidden justify-center gap-4 px-4 md:pt-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl w-[45%] max-w-[200px] h-[240px] md:h-[300px]"
                whileHover={{ scale: 1.05 }}
              >
                <LazyImage
                  src={therapy3Img}
                  alt="Meditation"
                  priority={true}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl w-[45%] max-w-[200px] h-[240px] md:h-[300px]"
                whileHover={{ scale: 1.05 }}
              >
                <LazyImage
                  src={therapy1Img}
                  alt="Therapy Session"
                  priority={true}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Desktop View - Full Layout */}
            <div className="hidden lg:flex items-center justify-between gap-3 lg:gap-4">
              {/* Left Side - 2 images */}
              <div className="flex flex-col gap-4 justify-start">
                {/* Top Left - Meditation woman (tall) */}
                <motion.div
                  className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={article1}
                    alt="Meditation"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Bottom Left - Work stress */}
                <motion.div
                  className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <LazyImage
                    src={therapy2Img}
                    alt="Work Stress"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Center - 3 columns */}
              <div className="flex-1 grid grid-cols-3 gap-4 pt-28 max-w-4xl mx-auto">
                {/* Column 1 - Depression */}
                <div className="flex flex-col gap-4 justify-start mt-40">
                  <motion.div
                    className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <LazyImage
                      src={therapy4Img}
                      alt="Depression Support"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <LazyImage
                      src={therapy1Img}
                      alt="Mental Health"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Column 2 - Anxiety (single centered image) - PRIMARY LCP IMAGE */}
                <motion.div
                  className="flex justify-center mt-56"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <motion.div
                    className="rounded-lg overflow-hidden shadow-xl w-[220px] xl:w-[244px] h-[244px]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <LazyImage
                      src={therapy1Img}
                      alt="Anxiety Treatment"
                      priority={true}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>

                {/* Column 3 - Couple Therapy */}
                <div className="flex flex-col gap-4 justify-start mt-40">
                  <motion.div
                    className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <LazyImage
                      src={therapy3Img}
                      alt="Couple Therapy"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <LazyImage
                      src={therapy2Img}
                      alt="Family Support"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Right Side - 2 images */}
              <div className="flex flex-col gap-4 justify-end">
                {/* Top Right - Sleep issues (tall) */}
                <motion.div
                  className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.9 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <LazyImage
                    src={therapy2Img}
                    alt="Sleep Issues"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Bottom Right - Trauma */}
                <motion.div
                  className="rounded-lg overflow-hidden shadow-xl w-[180px] xl:w-[220px] h-[244px]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <LazyImage
                    src={therapy4Img}
                    alt="Trauma Support"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Bottom gradient fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
      <Marquee />
    </section>
  );
};

export default Hero;
