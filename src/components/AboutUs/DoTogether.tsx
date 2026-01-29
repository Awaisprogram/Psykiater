
import { motion } from "motion/react";
import DoTogetherImage from '../../assets/DoTogetherImage.jpg'
import { Check } from "lucide-react";


function DoTogether() {
  const targets = [
    "Relieve symptoms",
    "Overcoming addiction",
    "Improve your quality of life",
    "Overcoming Fear",
    "Better mental health"
  ];
  return (
    <>
      <div className=" bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:text-start text-center"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              What can we do together?
            </motion.h1>
            <motion.p 
              className="text-md text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We offer treatment to patients struggling with all types of mental illnesses and addiction disorders. Our offering extends beyond the usual services, and we provide follow-up both before and after treatment at our clinics for those who wish it with our psychiatrist. We use clinically tested techniques with the goal of increasing the patient's quality of life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 max-w-2xl">
                  {targets.map((text, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
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

                      <span className="text-[#374151] text-md font-medium tracking-tight">
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
          </div>
          <motion.div 
            className="aspect-square rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="w-full h-full flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={DoTogetherImage} 
                alt="Therapy Session - What We Can Do Together"
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
                className='rounded-lg aspect-3/4 object-cover'
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ willChange: 'transform' }} 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
    </>
  )
}

export default DoTogether
