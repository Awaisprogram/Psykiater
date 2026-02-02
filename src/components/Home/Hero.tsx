import { motion } from "motion/react";
import Marquee from "./Marquee";
import Button from "../ui/Button";
import React from "react";
const Banner = React.lazy(() => import("./Banner"));

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
              className="text-xl lg:text-[32px] text-[#454545] font-serif font-semibold italic mb-6 lg:w-[683px] lg:leading-[43.2px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Get Professional Help From Our Psychiatrist and Psychologist
              Online
            </motion.p>
            <motion.p
              className="text-ld text-[#595959] lg:text-[20px] leading-relaxed mb-8 lg:w-[639px] lg:h-[96px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              We perform clinical evaluations, diagnostic assessments, and offer
              treatment for a wide range of mental health and addiction
              conditions. You can access us online, by phone, or in person.
            </motion.p>

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
          <Banner/>
        </div>
      </div>
      <Marquee />
    </section>
  );
};

export default Hero;
