
const InfoHighlight = () => {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-lg border border-sky-400 bg-sky-100 px-8 py-16 text-center">
          
          {/* subtle pattern effect */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_#94a3b8_1px,_transparent_1px)] bg-[length:20px_20px] rounded-lg pointer-events-none" />

          <p className="relative z-10 font-semibold text-lg md:text-2xl text-gray-700 leading-relaxed font-serif max-w-4xl mx-auto">
            <span className="font-semibold">Psykiater.no</span> is one of Norway's
            leading private psychiatric clinics, offering treatment throughout
            the country through physical clinics and video consultations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoHighlight;
