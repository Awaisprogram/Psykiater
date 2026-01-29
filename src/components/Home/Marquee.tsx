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
    
    <div >
    <section className="relative  bg-[#D5EB7C] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-8 px-8">
        {/* First set */}
        {services.map((service, index) => (
          <div key={`first-${index}`} className="inline-flex items-center mx-8">
            <div className="mr-2 text-[32px] text-[#1D6361] ">✦ </div>
            <span className="text-gray-700 text-[32px] font-bold font-serif ">{service}</span>
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
    </div>
  );
};

export default Marquee;
