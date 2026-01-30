import { motion } from "motion/react";

function ServicesHeader() {
  return (
    <motion.div
      className="bg-[#D9EAFD] rounded-md p-8 lg:p-12 flex flex-col md:flex-row items-center gap-10 lg:gap-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Illustration */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center lg:justify-end"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.img
          src="./treat.svg"
          alt="Addiction Treatment Illustration"
          className="w-full max-w-[382px] h-auto object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="w-full md:w-2/3 text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.span
          className="text-[#1D6361] text-lg md:text-xl font-bold block mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Treatments For:
        </motion.span>

        {/* Using a serif font family for the heading to match the image */}
        <motion.h2
          className="text-3xl lg:text-[36px] font-bold text-[#454545] leading-[48px] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Addiction & Substance Abuse
        </motion.h2>

        <motion.p
          className="text-gray-600 leading-[28.8px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          We conduct examinations, diagnostic assessments and offer treatment
          for a wide range of mental illnesses and addiction disorders.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default ServicesHeader;
