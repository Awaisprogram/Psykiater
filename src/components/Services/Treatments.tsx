import ServicesHeader from "./Header";
import AddictionGrid from "./AddictionGrid";
const TreatmentsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Banner */}
        <ServicesHeader />
        {/* Treatment Cards Grid */}
        <AddictionGrid />
      </div>
    </section>
  );
};

export default TreatmentsSection;
