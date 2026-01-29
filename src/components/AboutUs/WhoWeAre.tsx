import { motion } from "motion/react";
import WhoWeAreImage from "../../assets/WhoWeAreImage.png";
import { Check } from "lucide-react";

function DoTogether() {
  const targets = [
    "Non-Profit Organization.",
    "Companies",
    "Private Sector",
    "Individuals",
  ];
  return (
    <>
      <div className="bg-[#F0F8FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="aspect-square rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-full h-full flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={WhoWeAreImage}
                  alt="Who We Are - Our Team"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="600"
                  className="rounded-lg aspect-3/4 object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ willChange: "transform" }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Who We Are?
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Psykiater.no is a private psychiatric clinic offering fast
                access to psychiatrists, psychologists, and specialists in
                addiction medicine. We help individuals, companies, non-profits,
                and public sector clients. We provide flexible care through
                secure video or telephone consultations, as well as in-person
                visits in Oslo and Ski.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 max-w-2xl">
                  {targets.map((text, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center shadow-sm">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        >
                          <Check
                            size={20}
                            strokeWidth={3}
                            className="text-white"
                          />
                        </motion.div>
                      </div>

                      <span className="text-[#374151] text-lg font-medium tracking-tight">
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      )
    </>
  );
}

export default DoTogether;
