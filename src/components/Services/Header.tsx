import { motion } from "motion/react";

function ServicesHeader() {
  return (
    <motion.div
      className="bg-[#D9EAFD] rounded-t-md p-8 lg:p-12 flex flex-col md:flex-row items-center gap-10 lg:gap-20"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Illustration */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center lg:justify-end"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
      >
        <motion.img
          src="./treat.svg"
          alt="Addiction Treatment Illustration"
          className="w-full max-w-[382px] h-auto object-contain"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Content */}
      <div className="w-full md:w-2/3 text-left">
        <span className="text-[#1D6361] text-lg md:text-xl font-bold block mb-4">
          Treatments For:
        </span>

        <h2 className="text-3xl lg:text-[36px] font-bold text-[#454545] leading-[48px] mb-4">
          Addiction & Substance Abuse
        </h2>

        <p className="text-gray-600 leading-[28.8px]">
          We conduct examinations, diagnostic assessments and offer treatment
          for a wide range of mental illnesses and addiction disorders.
        </p>
      </div>
    </motion.div>
  );
}

export default ServicesHeader;

