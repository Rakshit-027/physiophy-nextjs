import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Physiotherapy Center in Nagpur | Top Rated PhysioPhy',
  description: 'PhysioPhy is the best physiotherapy center in Nagpur with 4.9⭐ rating. Expert treatment for back pain, neck pain, sports injuries. Book appointment today!',
  keywords: [
    'best physiotherapy center in Nagpur',
    'best physiotherapy center near me',
    'top physiotherapy center Nagpur',
    'best physiotherapist center Nagpur',
    'top rated physiotherapy center',
    'physiotherapy center near me Nagpur',
    'best physio center Nagpur',
    'number 1 physiotherapy center Nagpur'
  ],
  openGraph: {
    title: 'Best Physiotherapy Center in Nagpur | PhysioPhy',
    description: 'PhysioPhy - Nagpur\'s #1 rated physiotherapy center. Expert care, proven results, 4.9⭐ rating.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.physiophy.com/best-physiotherapy-center-nagpur'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best Physiotherapy Center in Nagpur',
  description: 'Discover why PhysioPhy is considered the best physiotherapy center in Nagpur',
  mainEntity: {
    '@type': 'PhysicalTherapy',
    name: 'PhysioPhy - Best Physiotherapy Center in Nagpur',
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

export default function BestPhysiotherapyCenterNagpur() {
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
              Best Physiotherapy Center in Nagpur
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400 text-2xl mr-4">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-xl">4.9/5 Rating | 200+ Reviews</span>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              PhysioPhy - Nagpur's Premier Physiotherapy Center. Expert treatment for back pain, neck pain, sports injuries & rehabilitation
            </p>
            <div className="space-x-4">
              <Link
                href="/pages/Bookappoitment"
                className="bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-colors inline-block"
              >
                Book Appointment Now
              </Link>
              <Link
                href="tel:+919970127614"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors inline-block"
              >
                Call: +91-9970127614
              </Link>
            </div>
          </div>
        </section>

        {/* Why Best Section */}
        <section className="py-16" style={{background: 'linear-gradient(to top, #cfccfe 0%, #ace0f9 100%)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why PhysioPhy is the Best Physiotherapy Center in Nagpur
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With over 200+ successful treatments and 4.9⭐ rating, we're Nagpur's most trusted physiotherapy center
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reason 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  #1 Rated in Nagpur
                </h3>
                <p className="text-gray-600">
                  Consistently rated as the best physiotherapy center in Nagpur with 4.9/5 stars across all review platforms.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">👨‍⚕️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Led by Dr. Tanvi Shah, our team of certified physiotherapists has 5+ years experience treating complex cases.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Fastest Results
                </h3>
                <p className="text-gray-600">
                  95% of patients report significant improvement within 4-6 sessions using our advanced treatment protocols.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced Equipment
                </h3>
                <p className="text-gray-600">
                  State-of-the-art physiotherapy equipment and modern treatment techniques for optimal recovery.
                </p>
              </div>

              {/* Reason 5 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Convenient Locations
                </h3>
                <p className="text-gray-600">
                  Multiple locations across Nagpur including Dhantoli and Kharbi for easy access to our physiotherapy center.
                </p>
              </div>

              {/* Reason 6 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Home Visit Services
                </h3>
                <p className="text-gray-600">
                  Home physiotherapy services available for patients who cannot visit our center.
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
                Comprehensive Services at Our Physiotherapy Center
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete rehabilitation solutions for all your physiotherapy needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🦴</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Orthopedic Physiotherapy</h3>
                <p className="text-gray-600">Treatment for joint pains, fractures, and post-surgical rehabilitation</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">⚽</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sports Physiotherapy</h3>
                <p className="text-gray-600">Specialized care for athletes and sports injuries</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Neurological Physiotherapy</h3>
                <p className="text-gray-600">Rehabilitation for stroke, paralysis, and neurological conditions</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">👶</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pediatric Physiotherapy</h3>
                <p className="text-gray-600">Specialized physiotherapy for children and developmental disorders</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-30  text-white py-20 " style={{background: 'linear-gradient(to top, #ace0f9 100%, #cfccfe 0%'}}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Experience the Best Physiotherapy Center in Nagpur
            </h2>
            <p className="text-xl mb-8">
              Join hundreds of satisfied patients who have recovered at PhysioPhy
            </p>
            <div className="space-x-4">
              <Link
                href="/pages/Bookappoitment"
                className="bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-colors inline-block"
              >
                Book Appointment
              </Link>
              <Link
                href="tel:+919970127614"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors inline-block"
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