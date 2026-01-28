const Marquee = () => {
  const services = [
    "Depression Treatment",
    "Anxiety Management",
    "Stress Counseling",
    "ADHD Assessment",
    "Addiction Support",
    "Trauma Therapy",
    "Sleep Disorders",
    "Relationship Counseling",
    "Burnout Prevention",
    "OCD Treatment"
  ];

  return (
    <section className="relative py-4 bg-lime-100 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        {services.map((service, index) => (
          <div key={`first-${index}`} className="inline-flex items-center mx-8">
            <span className="text-gray-700 text-2xl font-medium">{service}</span>
            <div className="ml-8 text-2xl text-green-900 ">✦ </div>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {services.map((service, index) => (
          <div key={`second-${index}`} className="inline-flex items-center mx-8">
            <span className="text-white text-lg font-medium">{service}</span>
          <div className="ml-8 w-2 h-2 bg-teal-300 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
