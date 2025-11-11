import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sports Physiotherapy in Nagpur | Sports Injury Treatment | PhysioPhy',
  description: 'Expert sports physiotherapy in Nagpur at PhysioPhy. Specialized treatment for sports injuries, rehabilitation & performance enhancement. Book appointment today!',
  keywords: [
    'sports physiotherapy Nagpur',
    'sports injury treatment Nagpur',
    'sports physiotherapist Nagpur',
    'athletic rehabilitation Nagpur',
    'sports injury recovery Nagpur',
    'performance enhancement Nagpur'
  ],
  openGraph: {
    title: 'Sports Physiotherapy in Nagpur | PhysioPhy',
    description: 'Expert sports physiotherapy services in Nagpur. Get back to your game faster with professional rehabilitation.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.physiophy.com/sports-physiotherapy-nagpur'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sports Physiotherapy in Nagpur',
  description: 'Professional sports physiotherapy services in Nagpur for injury treatment and performance enhancement',
  mainEntity: {
    '@type': 'PhysicalTherapy',
    name: 'PhysioPhy - Sports Physiotherapy in Nagpur',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200',
      bestRating: '5'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nagpur',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN'
    }
  }
};

export default function SportsPhysiotherapyNagpur() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-30  text-white py-20 " style={{background: 'linear-gradient(to top, #ace0f9 100%, #cfccfe 0%'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sports Physiotherapy in Nagpur
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400 text-2xl mr-4">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-xl">4.9/5 Rating | 200+ Reviews</span>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Expert Sports Physiotherapy in Nagpur. Get back to your peak performance with professional injury treatment & rehabilitation
            </p>
            <div className="space-x-4">
              <Link
                href="/pages/Bookappoitment"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Book Appointment Now
              </Link>
              <Link
                href="tel:+919970127614"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Call: +91-9970127614
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16" style={{background: 'linear-gradient(to top, #cfccfe 0%, #ace0f9 100%)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Sports Physiotherapy Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional treatment for all types of sports injuries and performance enhancement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚽</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Injury Assessment
                </h3>
                <p className="text-gray-600">
                  Comprehensive evaluation of sports injuries including sprains, strains, fractures, and overuse injuries.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Rehabilitation Programs
                </h3>
                <p className="text-gray-600">
                  Structured rehabilitation programs to help athletes return to sport safely and stronger than before.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Strength Training
                </h3>
                <p className="text-gray-600">
                  Sport-specific strength and conditioning programs to prevent injuries and enhance performance.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Performance Enhancement
                </h3>
                <p className="text-gray-600">
                  Advanced techniques to improve athletic performance, speed, agility, and endurance.
                </p>
              </div>

              {/* Service 5 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🩹</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Taping & Bracing
                </h3>
                <p className="text-gray-600">
                  Professional taping techniques and bracing solutions for injury prevention and support.
                </p>
              </div>

              {/* Service 6 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Return to Play Testing
                </h3>
                <p className="text-gray-600">
                  Functional testing to ensure athletes are ready to return to their sport safely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-30  text-white py-20 " style={{background: 'linear-gradient(to top, #ace0f9 100%, #cfccfe 0%'}}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Get Back in the Game with Expert Sports Physiotherapy
            </h2>
            <p className="text-xl mb-8">
              Don't let injuries keep you on the sidelines. Contact PhysioPhy today!
            </p>
            <div className="space-x-4">
              <Link
                href="/pages/Bookappoitment"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Book Sports Physio
              </Link>
              <Link
                href="tel:+919970127614"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Call Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}