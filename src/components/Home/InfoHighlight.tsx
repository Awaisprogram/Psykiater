
import { motion } from "motion/react";

const InfoHighlight = () => {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="relative rounded-lg border border-sky-400 bg-sky-100 px-8 py-16 text-center cursor-default"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
        >
          {/* subtle pattern effect */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_#94a3b8_1px,_transparent_1px)] bg-[length:20px_20px] rounded-lg pointer-events-none" />

          <motion.p
            className="relative z-10 font-semibold text-lg md:text-2xl text-gray-700 leading-relaxed font-serif max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="font-semibold inline-block"
              whileHover={{ scale: 1.05, color: "#0ea5e9" }}
              transition={{ duration: 0.2 }}
            >
              Psykiater.no
            </motion.span>{" "}
            is one of Norway's leading private psychiatric clinics, offering
            treatment throughout the country through physical clinics and video
            consultations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoHighlight;
