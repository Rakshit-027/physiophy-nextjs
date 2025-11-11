import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home Visit Physiotherapy in Nagpur | At-Home Treatment | PhysioPhy',
  description: 'Convenient home visit physiotherapy in Nagpur. Expert physiotherapy treatment at your doorstep. Book home physio sessions today!',
  keywords: [
    'home visit physiotherapy Nagpur',
    'at home physiotherapy Nagpur',
    'doorstep physiotherapy Nagpur',
    'home physio services Nagpur',
    'mobile physiotherapy Nagpur',
    'physiotherapy at home Nagpur'
  ],
  openGraph: {
    title: 'Home Visit Physiotherapy in Nagpur | PhysioPhy',
    description: 'Get professional physiotherapy treatment at home in Nagpur. Convenient, expert care at your doorstep.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.physiophy.com/home-visit-physiotherapy-nagpur'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Home Visit Physiotherapy in Nagpur',
  description: 'Convenient home visit physiotherapy services in Nagpur',
  mainEntity: {
    '@type': 'PhysicalTherapy',
    name: 'PhysioPhy - Home Visit Physiotherapy in Nagpur',
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

export default function HomeVisitPhysiotherapyNagpur() {
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
              Home Visit Physiotherapy in Nagpur
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400 text-2xl mr-4">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-xl">4.9/5 Rating | 200+ Reviews</span>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Convenient Home Visit Physiotherapy in Nagpur. Get expert physiotherapy treatment at your doorstep
            </p>
            <div className="space-x-4">
              <Link
                href="/pages/Bookappoitment"
                className="bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-colors inline-block"
              >
                Book Home Visit
              </Link>
              <Link
                href="tel:+919970127614"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors inline-block"
              >
                Call: +91-9970127614
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16" style={{background: 'linear-gradient(to top, #cfccfe 0%, #ace0f9 100%)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Home Visit Physiotherapy?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the convenience and comfort of professional physiotherapy treatment at home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Comfort of Home
                </h3>
                <p className="text-gray-600">
                  Receive treatment in the comfort and privacy of your own home, reducing stress and anxiety.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600">
                  Convenient appointment times that fit your schedule, including evenings and weekends.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Travel Required
                </h3>
                <p className="text-gray-600">
                  Perfect for elderly patients, those with mobility issues, or busy professionals.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">👨‍⚕️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Same Expert Care
                </h3>
                <p className="text-gray-600">
                  Receive the same high-quality physiotherapy treatment from our certified experts.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Portable Equipment
                </h3>
                <p className="text-gray-600">
                  Our physiotherapists bring all necessary portable equipment for effective treatment.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  City-wide Coverage
                </h3>
                <p className="text-gray-600">
                  Home visit services available across all areas of Nagpur and surrounding regions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Home Visit Physiotherapy Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive physiotherapy treatment available at your doorstep
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🦴</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Orthopedic Care</h3>
                <p className="text-gray-600">Post-surgical rehabilitation and joint pain treatment at home</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Neurological Rehab</h3>
                <p className="text-gray-600">Stroke recovery and neurological condition treatment</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">👶</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pediatric Therapy</h3>
                <p className="text-gray-600">Children's physiotherapy and developmental therapy</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🧓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Geriatric Care</h3>
                <p className="text-gray-600">Elderly care and age-related condition treatment</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-30  text-white py-20 " style={{background: 'linear-gradient(to top, #ace0f9 100%, #cfccfe 0%'}}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Get Professional Physiotherapy at Home
            </h2>
            <p className="text-xl mb-8">
              Experience the convenience of expert physiotherapy treatment without leaving your home
            </p>
            <div className="space-x-4">
              <Link
                href="/pages/Bookappoitment"
                className="bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-colors inline-block"
              >
                Book Home Visit
              </Link>
              <Link
                href="tel:+919970127614"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors inline-block"
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