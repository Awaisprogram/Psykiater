function ServicesHeader() {
  return (
    <div className="bg-[#D9EAFD] rounded-md p-8 lg:p-12 flex flex-col md:flex-row items-center gap-10 lg:gap-20">
      {/* Illustration */}
      <div className="w-full md:w-1/3 flex justify-center lg:justify-end">
        <img
          src="./treat.svg"
          alt="Addiction Treatment Illustration"
          className="w-full max-w-[382px] h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-2/3 text-left">
        <span className="text-[#1D6361] text-lg md:text-xl font-bold block mb-4">
          Treatments For:
        </span>

        {/* Using a serif font family for the heading to match the image */}
        <h2 className="text-3xl lg:text-[36px] font-bold text-[#454545] leading-[48px] mb-4">
          Addiction & Substance Abuse
        </h2>

        <p className="text-gray-600 leading-[28.8px]">
          We conduct examinations, diagnostic assessments and offer treatment
          for a wide range of mental illnesses and addiction disorders.
        </p>
      </div>
    </div>
  );
}

export default ServicesHeader;
