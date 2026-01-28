
import DoTogetherImage from '../../assets/DoTogetherImage.jpg'
import { Check } from "lucide-react";


function DoTogether() {
  const targets = [
    "Relieve symptoms",
    "Overcoming addiction",
    "Improve your quality of life",
    "Overcoming Fear",
    "Better mental health"
  ];
  return (
    <>
      <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:text-start text-center">What can we do together?</h1>
            <p className="text-md text-gray-600 mb-6">
            We offer treatment to patients struggling with all types of mental illnesses and addiction disorders. Our offering extends beyond the usual services, and we provide follow-up both before and after treatment at our clinics for those who wish it with our psychiatrist. We use clinically tested techniques with the goal of increasing the patient's quality of life.
            </p>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 max-w-2xl">
                  {targets.map((text, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center shadow-sm">
                        <Check
                          size={20}
                          strokeWidth={3}
                          className="text-white"
                        />
                      </div>

                      <span className="text-[#374151] text-md font-medium tracking-tight">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden ">
            <div className="w-full h-full  flex items-center justify-center">
              <img 
                src={DoTogetherImage} 
                alt="Therapy Session - What We Can Do Together"
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
                className='rounded-lg aspect-3/4 object-cover'
                style={{ willChange: 'transform' }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
    </>
  )
}

export default DoTogether
