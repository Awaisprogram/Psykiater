import OurSpecialist1 from "../../assets/OurSpecialist1.png";
import OurSpecialist2 from "../../assets/OurSpecialist2.png";

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
        <div className="text-center mb-16 bg-white">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Specialist
          </h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-3xl mx-auto">
            Our professional psychiatrists provide you with tailored services for your mental health and well-being.
          </p>
        </div>

        {/* Specialists Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {specialists.map((specialist) => (
            <div
              key={specialist.id}
              className=" overflow-hidden "
            >
              {/* Doctor Image */}
              <div className="aspect-[3/3] overflow-hidden max-w-lg  mx-auto">
                <img 
                  src={specialist.image} 
                  alt={specialist.name}
                  className="w-full h-full object-fit  "
                  style={{ willChange: 'transform' }}
                />
              </div>

              {/* Doctor Info */}
              <div className="p-8 text-center">
                {/* Name */}
                <h3 className="text-2xl font-bold text-teal-800 mb-3">
                  {specialist.name}
                </h3>

                {/* Title */}
                <p className="text-sm font-medium text-gray-800 italic mb-4">
                  {specialist.title}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {specialist.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:-translate-y-0.5">
                    Book An Appointment
                  </button>
                  <p className=" text-teal-700 px-6 py-3  font-medium border-b-2 border-teal-700 ">
                    View Profile
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpecialist;