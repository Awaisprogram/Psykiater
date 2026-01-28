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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-serif text-gray-800">
              Most Read Articles
            </h2>
            <p className="text-gray-500 mt-2">
              Take a look at our most read articles on psychiatry, mental health
              and well-being.
            </p>
          </div>

          <button className="self-start md:self-auto px-5 py-2 rounded-md bg-emerald-700 text-white text-sm font-medium hover:bg-emerald-800 transition">
            View All
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="group">
            {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="224"
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Low Quality Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 -z-10" />
              </div>

              {/* Content */}
              <div className="mt-4 space-y-3">
                <h3 className="text-lg font-serif text-gray-800 leading-snug">
                  {article.title}
                </h3>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition"
                >
                  Read More
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-emerald-700 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostReadArticles;
