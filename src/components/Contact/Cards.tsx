import { Calendar, UserCheck, Heart } from 'lucide-react';

const Cards = () => {
  const bookingSteps = [
    {
      id: 1,
      icon: Calendar,
      title: 'Book An Appointment',
      description: 'Online booking with preferred format',
      bgColor: 'bg-teal-700',
      textColor: 'text-white',
    },
    {
      id: 2,
      icon: UserCheck,
      title: 'Consult a Specialist',
      description: 'Video, phone, or in-person',
      bgColor: 'bg-blue-100',
      textColor: 'text-gray-800',
      borderColor: 'border-blue-200',
    },
    {
      id: 3,
      icon: Heart,
      title: 'Receive Care & Follow Up',
      description: 'Personalised plan and continued support',
      bgColor: 'bg-lime-200',
      textColor: 'text-gray-800',
      borderColor: 'border-lime-300',
    },
  ];



  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Booking Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {bookingSteps.map((step) => (
            <div
              key={step.id}
              className={`${step.bgColor} ${step.borderColor ? `border-2 ${step.borderColor}` : ''} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className={`w-16 h-16 ${step.id === 1 ? 'bg-white/20' : 'bg-white'} rounded-2xl flex items-center justify-center`}>
                  <step.icon className={`w-8 h-8 ${step.id === 1 ? 'text-white' : 'text-teal-700'}`} />
                </div>
                
                {/* Title */}
                <h3 className={`text-xl font-bold ${step.textColor}`}>
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className={`text-sm ${step.textColor} opacity-90`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
        </section>
  );
};

export default Cards;