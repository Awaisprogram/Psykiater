import { ArrowRight } from 'lucide-react';
import therapy1 from '../../assets/therapy1.jpg';
import therapy2 from '../../assets/therapy2.jpg';
import therapy3 from '../../assets/therapy3.jpg';
import therapy4 from '../../assets/therapy4.jpg';

const AllTherapies = () => {
  const therapies = [
    {
      id: 1,
      title: 'Individual Therapy',
      description: 'One-on-one sessions tailored to your personal needs',
      imageUrl: therapy1,
    },
    {
      id: 2,
      title: 'Cognitive Therapy',
      description: 'Evidence-based approach for mental wellness',
      imageUrl: therapy2,
    },
    {
      id: 3,
      title: 'Couple Therapy',
      description: 'Strengthen your relationship with professional guidance',
      imageUrl: therapy3,
    },
    {
      id: 4,
      title: 'Family Therapy',
      description: 'Build healthier family dynamics together',
      imageUrl: therapy4,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Therapies
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {therapies.map((therapy) => (
          <div
            key={therapy.id}
            className="group relative rounded-3xl overflow-hidden bg-gray-200" 
          >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={therapy.imageUrl} 
                alt={therapy.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ willChange: 'transform' }} 
              />
            </div>

            {/* Title Card */}
            <div className="absolute bottom-0 left-0 right-0 m-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg flex items-center justify-between transform transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    {therapy.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-1">{therapy.description}</p>
                </div>
                
                <button 
                  className="w-12 h-12 rounded-full bg-teal-700 hover:bg-teal-800 flex items-center justify-center transition-all duration-300 group-hover:rotate-[-45deg] shadow-md flex-shrink-0 ml-4"
                >
                  {/* Explicitly set size and stroke width */}
                  <ArrowRight size={48} strokeWidth={2.5} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default AllTherapies;