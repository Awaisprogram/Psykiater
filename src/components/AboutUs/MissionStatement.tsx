const MissionStatement = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Floating Labels */}
      <div className="absolute top-8 left-12 lg:left-24">
        <div className="bg-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transform -rotate-12 shadow-lg">
          Accessibility
        </div>
      </div>

      <div className="absolute top-16 right-12 lg:right-24">
        <div className="bg-lime-300 text-gray-800 px-6 py-2.5 rounded-full text-sm font-medium transform rotate-12 shadow-lg">
          Care
        </div>
      </div>

      <div className="absolute bottom-8 left-12 lg:left-32">
        <div className="bg-blue-300 text-gray-800 px-6 py-2.5 rounded-full text-sm font-medium transform -rotate-12 shadow-lg">
          Trust
        </div>
      </div>

      <div className="absolute bottom-16 right-12 lg:right-32">
        <div className="bg-blue-200 text-gray-800 px-6 py-2.5 rounded-full text-sm font-medium transform rotate-12 shadow-lg">
          Simplicity
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-12 tracking-wide uppercase">
          Mission Statement
        </h2>

        {/* Mission Text */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-base lg:text-lg">
            Founded on the principle that mental health care should be as accessible as any other medical service. Psykiater.no was created to bridge the gap between those seeking help and the specialists who can provide it.
          </p>
          
          <p className="text-base lg:text-lg">
            The traditional mental health services often involve long waiting times, complex referral processes, and limited options. Our mission is simple: provide fast access to board-certified psychiatrists and addiction specialists through flexible, modern service delivery
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;