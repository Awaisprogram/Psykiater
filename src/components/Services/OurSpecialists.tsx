import { motion } from "motion/react";
import OurSpecialist1 from "../../assets/OurSpecialist1.png";
import OurSpecialist2 from "../../assets/OurSpecialist2.png";
import Button from '../ui/Button'

const OurSpecialist = () => {
  const specialists = [
    {
      id: 1,
      name: 'Dr. Rehan Bin Nawaz',
      title: 'Physician, Psychiatrist & Specialist in Addiction Medicine',
      description: 'Experienced in both psychiatric care and addiction treatment. Worked in major Norwegian hospitals, including Oslo University Hospital, Ahus, and Lovisenberg',
      image: OurSpecialist1, // Replace with actual image path
      
    },
    {
      id: 2,
      name: 'Dr. Hamad Khan',
      title: 'Physician, Psychiatrist & Specialist in Addiction Medicine',
      description: 'Experienced in both psychiatric care and addiction treatment. Worked in major Norwegian hospitals, including Oslo University Hospital, Ahus, and Lovisenberg',
      image: OurSpecialist2, // Replace with actual image path
      
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 bg-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Specialist
          </h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-3xl mx-auto">
            Our professional psychiatrists provide you with tailored services for your mental health and well-being.
          </p>
        </motion.div>

        {/* Specialists Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {specialists.map((specialist, index) => (
            <motion.div
              key={specialist.id}
              className="overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Doctor Image */}
              <motion.div 
                className="aspect-[3/3] overflow-hidden max-w-lg mx-auto"
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={specialist.image} 
                  alt={specialist.name}
                  className="w-full h-full object-fit"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ willChange: 'transform' }}
                />
              </motion.div>

              {/* Doctor Info */}
              <div className="p-8 text-center">
                {/* Name */}
                <motion.h3 
                  className="text-2xl font-bold text-teal-800 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {specialist.name}
                </motion.h3>

                {/* Title */}
                <motion.p 
                  className="text-sm font-medium text-gray-800 italic mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  {specialist.title}
                </motion.p>

                {/* Description */}
                <motion.p 
                  className="text-gray-600 text-sm leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  {specialist.description}
                </motion.p>

                {/* Action Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <Button text={"Book An Appointment"}/>
                  <motion.p 
                    className="text-teal-700 px-6 py-3 font-medium border-b-2 border-teal-700 cursor-pointer"
                    whileHover={{ scale: 1.05, color: '#0d9488' }}
                    transition={{ duration: 0.2 }}
                  >
                    View Profile
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurSpecialist;
