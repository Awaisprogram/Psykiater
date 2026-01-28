
const MentalHealthSupport = () => {
  const disorders = [
    'ADHD', 'ADD', 'Anxiety', 'Depression', 'Bipolar Disorder', 'PTSD',
    'Insomnia or Sleep Difficulty', 'Eating Disorder', 'Personality Disorder', 
    'Psychosis', 'OCD and Obsessive Thoughts', 'Burnout & Exhaustion'
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-white">
      {/* Container with the light blue rounded background */}
      <div className="bg-[#E1F0FF] rounded-[40px] p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
        
        {/* Heading: Using a serif font for that clinical/elegant look */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6 leading-tight">
          Explore Support For Mental Health Disorder
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-5xl mb-10">
          Clinical psychiatrists and psychologists treat patients with mental health problems and addictions. 
          Our specialists in substance abuse and addiction medicine have extensive experience in{' '}
          <span className="underline cursor-pointer">mental health</span>, substance abuse and addiction. 
          We conduct examinations, diagnostic assessments and offer treatment for a wide range of mental 
          illnesses and addiction disorders. This is done via video/telephone consultation with our psychiatrist online.
        </p>

        {/* Pills Grid: Flex-wrap ensures it looks natural on all screens */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          {disorders.map((item, index) => (
            <button
              key={index}
              className="px-8 py-3 bg-white text-gray-900 font-bold text-sm md:text-base 
                         rounded-full border border-teal-600/20 shadow-sm 
                         hover:bg-teal-50 hover:border-teal-600 transition-all duration-200"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentalHealthSupport;