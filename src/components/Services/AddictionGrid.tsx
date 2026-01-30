
const cards = [
  {
    category: "Addiction & Substance Abuse",
    title: "Drug Addiction and Substance Abuse",
    description: "A One Liner Description could come here.",
    imageUrl: "https://images.unsplash.com/photo-1520242502100-3027b508f654?auto=format&fit=crop&q=80&w=300",
  },
  {
    category: "Addiction",
    title: "Addiction",
    description: "A One Liner Description could come here.",
    imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=300",
  },
  {
    category: "Addiction & Substance Abuse",
    title: "Drug Use and Addiction",
    description: "A One Liner Description could come here.",
    imageUrl: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=300",
  },
  {
    category: "Addiction",
    title: "Alcohol Addiction",
    description: "A One Liner Description could come here.",
    imageUrl: "https://images.unsplash.com/photo-1542125387-c71274d94f0a?auto=format&fit=crop&q=80&w=300",
  },
  {
    category: "Addiction",
    title: "Gambling Addiction",
    description: "A One Liner Description could come here.",
    imageUrl: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=300",
  },
  {
    category: "Addiction & Substance Abuse",
    title: "Drug Card Cases and Follow-Ups",
    description: "A One Liner Description could come here.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300",
  },
];

const AddictionGrid = () => {
  return (
    <div className="p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-10">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col sm:flex-row justify-between items-start group cursor-pointer">
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
            <div className="w-full sm:w-28 lg:w-32 h-48 sm:h-28 lg:h-32 flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddictionGrid;