
const ContactBanner = () => {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-lg border border-sky-400 bg-teal-700 px-8 py-16 text-center">
          
          {/* subtle pattern effect */}
          <div className="absolute inset-0 opacity-20 bg-green-900 bg-[length:20px_20px] rounded-lg pointer-events-none" />

          <div className="relative flex flex-col justify-center items-center z-10 font-semibold text-lg md:text-2xl text-gray-700 leading-relaxed font-serif max-w-4xl mx-auto">
            <span className="font-semibold text-lg text-[#D5EB7B]">Psykiater.no</span> 
            <p className="font-semibold p-8 text-3xl text-white ">
            Do you need help from a psychiatrist?
            </p>
            
            <div className="flex flex-wrap gap-2 ">
              <button className="bg-[#D5EB7B] text-lg  text-teal-700 px-4 py-2 rounded-lg font-bold">
              View Available Hours
              </button>
              <p className="border-b text-[#D5EB7B] px-3 py-2 border-[#D5EB7B] font-medium text-lg">
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
