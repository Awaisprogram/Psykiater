import { motion } from "motion/react";
import article1 from "../../assets/article1.jpg";
import article2 from "../../assets/article2.jpg";
import article3 from "../../assets/article3.jpg";

const articles = [
  {
    id: 1,
    title: "Depression and postpartum psychosis",
    image: article2,
  },
  {
    id: 2,
    title: "Cognitive behavioural therapy an self-help",
    image: article3,
  },
  {
    id: 3,
    title: "Sleep after trauma",
    image: article1,
  },
];

const MostReadArticles = () => {
  return (
    <motion.section
      className="bg-white py-20 content-visibility-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <h2 className="text-3xl font-serif text-gray-800">
              Most Read Articles
            </h2>
            <p className="text-gray-500 mt-2">
              Take a look at our most read articles on psychiatry, mental health
              and well-being.
            </p>
          </div>

          <button
            className="self-start md:self-auto px-5 py-2 rounded-md bg-[#1D6361] text-white text-sm font-medium hover:bg-emerald-800 transition hero-image-hover"
          >
            View All
          </button>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl hero-image-wrapper">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="224"
                  className="h-56 w-full object-cover hero-image-hover"
                />
              </div>

              {/* Content */}
              <div className="mt-4 space-y-3">
                <h3 className="text-lg font-serif text-gray-800 leading-snug">
                  {article.title}
                </h3>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <motion.span 
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-emerald-700 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition"
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MostReadArticles;
