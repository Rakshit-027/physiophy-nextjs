import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Physiotherapy Clinic Near Me | PhysioPhy Nagpur - Open Now',
  description: 'Looking for physiotherapy clinic near me? PhysioPhy is the closest & best physiotherapy center in Nagpur. Book appointment online or call now!',
  keywords: [
    'physiotherapy clinic near me',
    'physio clinic near me',
    'physiotherapy center near me',
    'best physiotherapy clinic near me',
    'rehabilitation center near me',
    'physiotherapy clinic near me Nagpur',
    'physiotherapy near me open now',
    'closest physiotherapy clinic'
  ],
  openGraph: {
    title: 'Physiotherapy Clinic Near Me | PhysioPhy Nagpur',
    description: 'Find the best physiotherapy clinic near you. PhysioPhy - conveniently located in Nagpur with expert care.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.physiophy.com/physiotherapy-clinic-near-me'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Physiotherapy Clinic Near Me',
  description: 'Find the best physiotherapy clinic near your location in Nagpur',
  mainEntity: {
    '@type': 'PhysicalTherapy',
    name: 'PhysioPhy - Physiotherapy Clinic Near Me',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nagpur',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.1458,
      longitude: 79.0882
    },
    openingHours: 'Mo-Sa 09:00-18:00'
  }
};

export default function PhysiotherapyClinicNearMe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Physiotherapy Clinic Near Me
            </h1>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="text-green-300 text-2xl mr-2">📍</span>
                <span className="text-xl font-semibold">Currently Open - Book Now!</span>
              </div>
              <p className="text-lg">
                <strong>PhysioPhy</strong> - Your closest physiotherapy center in Nagpur
              </p>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Don't waste time traveling far! Get expert physiotherapy treatment at PhysioPhy - conveniently located and easily accessible
            </p>
            <div className="space-x-4">
              <Link 
                href="/pages/Bookappoitment"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Book Appointment
              </Link>
              <Link 
                href="tel:+91-XXXXXXXXXX"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors inline-block"
              >
                Call Now: +91-XXXXXXXXXX
              </Link>
            </div>
          </div>
        </section>

        {/* Location Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose the Closest Physiotherapy Clinic to You?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                PhysioPhy is strategically located for maximum convenience and accessibility
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Benefit 1 */}
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy to Reach</h3>
                <p className="text-gray-600">
                  Located in the heart of Nagpur with excellent connectivity from all major areas.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🅿️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Parking</h3>
                <p className="text-gray-600">
                  Ample parking space available - no need to worry about finding a parking spot.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚌</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Public Transport</h3>
                <p className="text-gray-600">
                  Easily accessible by bus and auto-rickshaw from any part of Nagpur.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Save Time</h3>
                <p className="text-gray-600">
                  Less travel time means more time for recovery and your daily activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Distance Map */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                How Close Are We to You?
              </h2>
              <p className="text-xl text-gray-600">
                PhysioPhy is conveniently located to serve patients across Nagpur
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Distance Cards */}
              {[
                { area: 'Dharampeth', time: '5 minutes', distance: '2.5 km' },
                { area: 'Sitabuldi', time: '10 minutes', distance: '4.2 km' },
                { area: 'Civil Lines', time: '8 minutes', distance: '3.8 km' },
                { area: 'Dhantoli', time: '12 minutes', distance: '5.1 km' },
                { area: 'Ramdaspeth', time: '7 minutes', distance: '3.2 km' },
                { area: 'Mahal', time: '15 minutes', distance: '6.0 km' }
              ].map((location, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{location.area}</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {location.time}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">📍</span>
                    <span>{location.distance} from PhysioPhy</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/pages/Contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
              >
                Get Directions to PhysioPhy
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Physiotherapy Services Near You
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Cards */}
              {[
                {
                  title: 'Back Pain Treatment',
                  description: 'Expert care for chronic back pain, disc problems, and spinal issues.',
                  icon: '🦴'
                },
                {
                  title: 'Neck Pain Relief',
                  description: 'Specialized treatment for cervical pain and postural problems.',
                  icon: '🦵'
                },
                {
                  title: 'Sports Injury Recovery',
                  description: 'Comprehensive rehabilitation for sports-related injuries.',
                  icon: '⚽'
                },
                {
                  title: 'Post-Surgery Rehab',
                  description: 'Expert post-operative rehabilitation and recovery programs.',
                  icon: '🏥'
                },
                {
                  title: 'Joint Pain Treatment',
                  description: 'Advanced treatment for arthritis and joint mobility issues.',
                  icon: '🦴'
                },
                {
                  title: 'Posture Correction',
                  description: 'Modern solutions for work-related postural problems.',
                  icon: '🧘'
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-16 bg-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Visit Your Nearest Physiotherapy Clinic?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Don't let distance be a barrier to your recovery. PhysioPhy is here to help!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-green-800 mb-2">📞 Call Us</h3>
                <p className="text-gray-600">+91-XXXXXXXXXX</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-green-800 mb-2">📍 Visit Us</h3>
                <p className="text-gray-600">Dharampeth, Nagpur</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-green-800 mb-2">🕒 Timing</h3>
                <p className="text-gray-600">Mon-Sat: 9AM-6PM</p>
              </div>
            </div>
            
            <div className="space-x-4">
              <Link 
                href="/pages/Bookappoitment"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
              >
                Book Online Appointment
              </Link>
              <Link 
                href="/pages/Contact"
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-block"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
