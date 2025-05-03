import { useState, useEffect } from 'react';
import Image from 'next/image';
import HomeCard from '../HomeCard/HomeCard';

export default function Founder() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-inherit font-sans">
      {/* Navigation Bar */}
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Left Content - 3 columns */}
          <div className="lg:col-span-3 space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">From Passion to Practice: The Founder's Journey</h1>
              <div className="h-1 w-24 bg-[#6c68dd] rounded mb-12"></div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#dcdaff]">
                <p className="text-lg text-gray-700 leading-relaxed">
                Physiophy is more than a rehabilitation center—it’s a sanctuary of transformation, resilience, and hope. Founded by Dr. Tanvi Katariya, a distinguished physiotherapist with over five years of expertise, Physiophy embodies the belief that healing transcends mere recovery.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#f0f0ff] to-[#dcdaff] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-lg text-gray-700 leading-relaxed">
                As a celebrity physiotherapist, Dr. Katariya has worked with renowned personalities, yet her heart lies in democratizing world-class physiotherapy. Her patient-centric approach redefines physiotherapy as a movement toward strength, innovation, and excellence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-[#6c68dd]">
                <p className="text-lg text-gray-700 leading-relaxed">
                "Every patient is a unique story. At Physiophy, we weave expertise, compassion, and dedication into every journey, breaking barriers and celebrating every step forward."
                </p>
              </div>
              <div className="bg-[#6c68dd] p-6 rounded-xl shadow-md transform hover:-translate-y-1 transition-all duration-300">
                <p className="text-xl text-white font-medium text-center">
                  — At Physiophy, we don't just heal, we transform lives.
                </p>
              </div>
            </div>
          </div>
          {/* Right Content - 2 columns */}
          <div className="lg:col-span-2 flex justify-center items-start">
            <div className={`bg-gradient-to-br from-white to-[#dcdaff] rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 transform ${isVisible ? 'translate-y-0' : 'translate-y-10'} hover:shadow-[0_20px_50px_rgba(108,104,221,0.2)] hover:scale-[1.02]`} style={{ maxWidth: '400px' }}>
              <div className="relative overflow-hidden group">
                <div className=" group-hover:opacity-75 transition-opacity duration-300"></div>
                <Image
                  src="https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/IMG_2805%20(1).JPG"
                  alt="Dr. Emma Richardson"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 relative">
  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full -mr-16 -mt-16 opacity-20"></div>
  <div className="relative text-center">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#6c68dd] to-[#8583e1] bg-clip-text text-transparent mb-2">Dr. Tanvi Katariya</h2>
    <p className="text-[#6c68dd] font-semibold mb-6 text-lg">Founder</p>
    <div className="space-y-3">
      <div className="flex items-center justify-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors duration-300">
        <i className="fas fa-award text-indigo-500"></i>
        <p>Master in Neurophysiotherapy</p>
      </div>
      <div className="flex items-center justify-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors duration-300">
        <i className="fas fa-university text-indigo-500"></i>
        <p>Fellowship in Neuro-Rehab, UK</p>
      </div>
      <div className="flex items-center justify-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors duration-300">
        <i className="fas fa-hospital text-indigo-500"></i>
        <p>Ex-Consultant Mission Walk, Hyderabad</p>
      </div>
      <div className="flex items-center justify-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors duration-300">
        <i className="fas fa-hospital-alt text-indigo-500"></i>
        <p>Ex-Consultant Nanavati Hospital, Mumbai</p>
      </div>
      <div className="flex items-center justify-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors duration-300">
        <i className="fas fa-certificate text-indigo-500"></i>
        <p>Internationally Certified Autism Therapist</p>
      </div>
      <div className="flex items-center justify-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors duration-300">
        <i className="fas fa-walking text-indigo-500"></i>
        <p>Internationally Certified Garbh Sanskar Coach</p>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </main>
      {/* Additional Content Section */}
      {/* <section className="bg-gradient-to-r from-[#f0f0ff] to-[#dcdaff] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
Volkswagen ID.4 
<div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-md p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-[#6c68dd] mb-4">
                <i className="fas fa-heartbeat text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Care</h3>
              <p className="text-gray-600">Every treatment plan is tailored to your unique needs, ensuring optimal recovery and long-term wellness.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-indigo-600 mb-4">
                <i className="fas fa-brain text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Techniques</h3>
              <p className="text-gray-600">We combine traditional methods with cutting-edge research to provide the most effective therapeutic interventions.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-indigo-600 mb-4">
                <i className="fas fa-users text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Holistic Approach</h3>
              <p className="text-gray-600">We address not just physical symptoms but emotional wellbeing, lifestyle factors, and long-term health goals.</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* Call to Action */}
      {/* Footer */}
      <HomeCard/>
      <section className="bg-[#6c68dd] text-white py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="mb-6 text-3xl font-bold">Begin Your Healing Journey Today</h2>
    <p className="mx-auto mb-8 max-w-3xl text-xl text-[#f0f0ff]">
      Experience the Physiophy difference with our expert team and personalized approach to rehabilitation and wellness.
    </p>
    <a
      href="tel:+919970127614"
      className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-medium text-[#6c68dd] shadow-lg transition duration-300 hover:bg-[#f0f0ff] focus:outline-none focus:ring-2 focus:ring-[#f0f0ff] focus:ring-offset-2 focus:ring-offset-[#6c68dd]"
      aria-label="Book your consultation by calling +91 99701 27614"
    >
      Book Your Consultation
    </a>
  </div>
</section>
      
    </div>
  );
}