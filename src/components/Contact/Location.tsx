import { MapPin, ArrowRight, Check } from 'lucide-react';
import Location from '../../assets/Location.jpg';

const BookingAndLocations = () => {
  

  const features = [
    'Same-week appointments available',
    'Online or in-person options',
    'Compassionate, experienced specialists',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Locations & Accessibility Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Locations & Accessibility
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We offer confidential online psychiatric consultations nationwide in Norway, plus in-person services
              </p>
            </div>

            {/* Location Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-teal-100 hover:bg-teal-200 text-teal-900 px-6 py-4 rounded-xl font-medium transition-all duration-200 group border-2 border-teal-200 hover:border-teal-300 shadow-sm hover:shadow-md">
                <MapPin className="w-5 h-5" />
                <span>Clinic in Oslo</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-3 bg-blue-100 hover:bg-blue-200 text-blue-900 px-6 py-4 rounded-xl font-medium transition-all duration-200 group border-2 border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md">
                <MapPin className="w-5 h-5" />
                <span>Clinic in Ski</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Recovery Message */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Take the first step toward <span className="italic font-medium">recovery</span> today. Our specialists provide judgment-free, confidential care designed around your needs.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Confidential Consultation
              </button>
              <button className="bg-white hover:bg-gray-50 text-teal-700 px-8 py-4 rounded-xl font-medium border-2 border-teal-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1">
                Call Us Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[3/3] rounded-3xl overflow-hidden shadow-2xl">
              {/* Replace this div with actual image */}
              
              {/* If using actual image: */}
              <img 
                src={Location} 
                alt="Comfortable therapy room with cozy chair and warm lighting"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
                style={{ willChange: 'transform' }} 
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-3xl -z-10 opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-3xl -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingAndLocations;