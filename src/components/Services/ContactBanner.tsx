import { motion } from "motion/react";

const ContactBanner = () => {
  return (
    <motion.section
      className="w-full bg-white py-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="relative rounded-lg border border-sky-400 bg-teal-700 px-8 py-16 text-center"
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* subtle pattern effect */}
          <div className="absolute inset-0 opacity-20 bg-green-900 bg-[length:20px_20px] rounded-lg pointer-events-none" />

          <div className="relative flex flex-col justify-center items-center z-10 font-semibold text-lg md:text-2xl text-gray-700 leading-relaxed font-serif max-w-4xl mx-auto">
            <span className="font-semibold text-lg text-[#D5EB7B]">Psykiater.no</span>
            <p className="font-semibold p-8 text-3xl text-white">
              Do you need help from a psychiatrist?
            </p>

            <div className="flex flex-wrap justify-center items-center gap-2">
              <motion.button
                className="bg-[#D5EB7B] lg:text-lg text-md text-teal-700 lg:px-4 lg:py-2 p-2 rounded-lg font-bold cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1 }}
              >
                View Available Hours
              </motion.button>
              <motion.p
                className="border-b text-[#D5EB7B] px-3 py-2 border-[#D5EB7B] font-medium text-lg cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.1 }}
              >
                Contact Us
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactBanner;

