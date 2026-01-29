import  { useState } from 'react';
import { Video, MapPin, Mic, MicOff, Video as VideoIcon, Users, Shield, MessageSquare, Share2, Grid, Smile, PhoneOff } from 'lucide-react';
import contact1Image from '../../assets/Contact1.jpg';
import contact2Image from '../../assets/Contac2.jpg';
import OurSpecialist1 from "../../assets/OurSpecialist1.png";
import { SlOptionsVertical } from "react-icons/sl";
import { RiVoiceprintFill } from "react-icons/ri";
import { GoScreenFull } from "react-icons/go";
import { IoLinkOutline } from "react-icons/io5";






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
            <div className="flex items-center gap-12">
              <a 
                href="#" 
                className="text-teal-700 py-2 px-3 border-l-2 bg-[#D3E9FE] rounded-full hover:text-teal-800 text-sm font-medium flex items-center gap-3"
              >
                <span className='border-r-teal-700'> <IoLinkOutline/></span>
                sjm-jlmt-nsu
              </a>
              <div className="flex items-center gap-2">
                <img 
                  src={OurSpecialist1} 
                  alt="Dr. Nelson"
                  className="w-8 h-8 rounded-full border-2 border-teal-700"
                  style={{ willChange: 'transform' }} 
                />
                <span className="text-sm font-medium text-gray-700">Dr. Nelson</span>
                <SlOptionsVertical className="w-5 h-5 text-gray-700 cursor-pointer"/>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-4  p-6 rounded-b-2xl">
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
               <RiVoiceprintFill className="w-8 h-8 text-white cursor-pointer"/>
              </div>

              
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
                <RiVoiceprintFill className="w-8 h-8 text-white cursor-pointer"/>
              </div>

              {/* Corner expand button */}
              <span className="transition-colors opacity-0 group-hover:opacity-100 cursor-pointer">
                <GoScreenFull size={10} className="bg-black/60 backdrop-blur-sm rounded-full p-4 text-white absolute top-4 right-4 w-14 h-14 flex items-center justify-center " />
                </span>
            </div>
          </div>

          {/* Control Bar */}
          <div className="bg-white rounded-b-2xl p-4  -mt-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Left Controls */}
              <div className="flex justify-center items-center flex-wrap items-center gap-2 sm:gap-4 ">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="flex flex-col bg-white items-center gap-0.5 hover:opacity-70 transition-opacity group"
                >
                  {isMuted ? (
                    <MicOff className="w-4 h-4 text-gray-600" />
                  ) : (
                    <Mic className="w-4 h-4 text-gray-600" />
                  )}
                  <span className="text-[10px] text-gray-600 font-medium">Mute</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity bg-white">
                  <VideoIcon className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Start Video</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity bg-white">
                  <Shield className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Security</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity bg-white">
                  <Users className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Participants</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity bg-white">
                  <MessageSquare className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Chats</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity bg-white">
                  <Share2 className="w-4 h-4 text-teal-700" />
                  <span className="text-[10px] text-gray-600 font-medium">Share Screen</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity bg-white">
                  <Grid className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Polling</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity bg-white">
                  <VideoIcon className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Record</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity bg-white">
                  <Grid className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Breakpoints</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-opacity bg-white">
                  <Smile className="w-4 h-4 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-medium">Reaction</span>
                </button>
              </div>

              {/* End Call Button */}
              <button className="bg-teal-700 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2">
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