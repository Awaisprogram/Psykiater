import { motion } from "motion/react";
import addiction1 from "../../assets/Addiction/addiction1.jpg"
import addiction2 from "../../assets/Addiction/addiction2.jpg"
import addiction3 from "../../assets/Addiction/addiction3.jpg"
import addiction5 from "../../assets/Addiction/addiction5.jpg"
import therapy1 from '../../assets/therapy1.jpg';


const cards = [
  {
    category: "Addiction & Substance Abuse",
    title: "Drug Addiction and Substance Abuse",
    description: "A One Liner Description could come here.",
    imageUrl: addiction1,
  },
  {
    category: "Addiction",
    title: "Addiction",
    description: "A One Liner Description could come here.",
    imageUrl: therapy1,
  },
  {
    category: "Addiction & Substance Abuse",
    title: "Drug Use and Addiction",
    description: "A One Liner Description could come here.",
    imageUrl: addiction2,
  },
  {
    category: "Addiction",
    title: "Alcohol Addiction",
    description: "A One Liner Description could come here.",
    imageUrl: addiction5,
  },
  {
    category: "Addiction",
    title: "Gambling Addiction",
    description: "A One Liner Description could come here.",
    imageUrl: addiction3,
  },
  {
    category: "Addiction & Substance Abuse",
    title: "Drug Card Cases and Follow-Ups",
    description: "A One Liner Description could come here.",
    imageUrl: addiction2,
  },
];

const AddictionGrid = () => {
  return (
    <motion.div
      className="p-4 sm:p-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start group cursor-pointer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
          >
            <div className="flex-1 pr-0 sm:pr-4 mb-4 sm:mb-0">
              <span className="text-[#A2C02B] text-base sm:text-[18px] font-semibold mb-2 block">
                {card.category}
              </span>
              <h3 className="text-lg sm:text-[20px] font-bold text-gray-800 mb-2 leading-tight sm:leading-[27px]">
                {card.title}
              </h3>
              <p className="text-[#595959] text-base sm:text-[18px] italic">
                {card.description}
              </p>
            </div>
            <motion.div
              className="w-full sm:w-28 lg:w-32 h-48 sm:h-28 lg:h-32 flex-shrink-0 overflow-hidden rounded-lg shadow-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.15 }}
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AddictionGrid;

