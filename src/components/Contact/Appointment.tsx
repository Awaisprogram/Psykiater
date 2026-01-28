import  { useState } from 'react';
import { Video, MapPin, Mic, MicOff, Video as VideoIcon, Users, Shield, MessageSquare, Share2, Grid, Smile, PhoneOff } from 'lucide-react';
import contact1Image from '../../assets/Contact1.jpg';
import contact2Image from '../../assets/Contac2.jpg';
import OurSpecialist1 from "../../assets/OurSpecialist1.png";


const BookAppointment = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Book an Appointment & Check Prices
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-2">
            Are you struggling with your mental health or dealing with addiction to alcohol, pills, steroids, or other substances?
          </p>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            You can easily book an appointment with a psychiatrist by clicking{' '}
            <span className="font-bold italic">"Book Time"</span> in our calendar. You can also check psychiatrist prices directly in the{' '}
            <span className="font-bold italic">Portal</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
            <Video className="w-5 h-5" />
            Video Consultation
          </button>
          <button className="bg-white hover:bg-gray-50 text-teal-700 px-8 py-4 rounded-lg font-medium border-2 border-teal-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Meeting in Oslo & Ski
          </button>
        </div>

        {/* Video Consultation Interface */}
        <div className="max-w-6xl mx-auto">
          {/* Header Bar */}
          <div className="bg-white rounded-t-2xl p-4 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-gray-900">
              Psykiater's Video Consultation Session
            </h3>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="text-teal-700 hover:text-teal-800 text-sm font-medium flex items-center gap-1"
              >
                <span className="w-2 h-2 bg-teal-700 rounded-full"></span>
                app.100ms.live
              </a>
              <div className="flex items-center gap-2">
                <img 
                  src={OurSpecialist1} 
                  alt="Dr. Nelson"
                  className="w-8 h-8 rounded-full border-2 border-teal-700"
                  style={{ willChange: 'transform' }} 
                />
                <span className="text-sm font-medium text-gray-700">Dr. Nelson</span>
                <button className="text-gray-500 hover:text-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-4 bg-gray-900 p-6 rounded-b-2xl">
            {/* Psychiatrist Video */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden group">
              {/* Psychiatrist Image */}
              <img 
                src={contact1Image} 
                alt="Psychiatrist - Video Consultation"
                loading="lazy"
                decoding="async"
                width="800"
                height="450"
                className="w-full h-full object-cover"
                style={{ willChange: 'transform' }} 
              />
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <span className="text-white text-sm font-medium">Psychiatrist</span>
                </div>
                <button className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.06m2.828-9.9a9 9 0 012.121 2.121" />
                  </svg>
                </button>
              </div>

              {/* Corner expand button */}
              <button className="absolute top-4 right-4 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100">
                <Grid className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Patient Video */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden group">
              {/* Patient Image */}
              <img 
                src={contact2Image} 
                alt="Patient - Video Consultation"
                loading="lazy"
                decoding="async"
                width="800"
                height="450"
                className="w-full h-full object-cover"
                style={{ willChange: 'transform' }} 
              />
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <span className="text-white text-sm font-medium">You</span>
                </div>
                <button className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.06m2.828-9.9a9 9 0 012.121 2.121" />
                  </svg>
                </button>
              </div>

              {/* Corner expand button */}
              <button className="absolute top-4 right-4 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100">
                <Grid className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Control Bar */}
          <div className="bg-white rounded-b-2xl p-4 shadow-lg -mt-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Left Controls */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity group"
                >
                  {isMuted ? (
                    <MicOff className="w-4 h-4 text-gray-600" />
                  ) : (
                    <Mic className="w-4 h-4 text-gray-600" />
                  )}
                  <span className="text-[10px] text-gray-600 font-medium">Mute</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity">
                  <VideoIcon className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Start Video</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity">
                  <Shield className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Security</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity">
                  <Users className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Participants</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity">
                  <MessageSquare className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Chats</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity">
                  <Share2 className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Share Screen</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity">
                  <Grid className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Polling</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity">
                  <VideoIcon className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Record</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity">
                  <Grid className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Breakpoints</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity">
                  <Smile className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Reaction</span>
                </button>
              </div>

              {/* End Call Button */}
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2">
                <PhoneOff className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">End Call</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;