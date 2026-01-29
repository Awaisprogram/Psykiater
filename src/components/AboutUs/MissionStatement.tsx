import { motion } from "motion/react";

const MissionStatement = () => {
  return (
    <section className="relative py-24 max-w-[1200px] mx-auto bg-white overflow-hidden">
      {/* Floating Labels */}
      <motion.div 
        className="absolute top-8 left-12 lg:left-24"
        initial={{ opacity: 0, x: -50, rotate: -12 }}
        whileInView={{ opacity: 1, x: 0, rotate: -12 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg">
          Accessibility
        </div>
      </motion.div>

      <motion.div 
        className="absolute top-16 right-12 lg:right-24"
        initial={{ opacity: 0, x: 50, rotate: 12 }}
        whileInView={{ opacity: 1, x: 0, rotate: 12 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-lime-300 text-gray-800 px-6 py-2.5 rounded-full text-sm font-medium shadow-lg">
          Care
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-12 lg:left-32"
        initial={{ opacity: 0, x: -50, rotate: -12 }}
        whileInView={{ opacity: 1, x: 0, rotate: -12 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="bg-blue-300 text-gray-800 px-6 py-2.5 rounded-full text-sm font-medium shadow-lg">
          Trust
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-16 right-12 lg:right-32"
        initial={{ opacity: 0, x: 50, rotate: 12 }}
        whileInView={{ opacity: 1, x: 0, rotate: 12 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="bg-blue-200 text-gray-800 px-6 py-2.5 rounded-full text-sm font-medium shadow-lg">
          Simplicity
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Title */}
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-teal-900 mb-12 tracking-wide uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Mission Statement
        </motion.h2>

        {/* Mission Text */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <motion.p 
            className="text-base lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Founded on the principle that mental health care should be as accessible as any other medical service. Psykiater.no was created to bridge the gap between those seeking help and the specialists who can provide it.
          </motion.p>
          
          <motion.p 
            className="text-base lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The traditional mental health services often involve long waiting times, complex referral processes, and limited options. Our mission is simple: provide fast access to board-certified psychiatrists and addiction specialists through flexible, modern service delivery
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
