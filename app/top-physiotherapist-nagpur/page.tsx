import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Physiotherapist in Nagpur | Best Physio Experts | PhysioPhy',
  description: 'Find the top physiotherapist in Nagpur at PhysioPhy. Expert treatment for back pain, neck pain, sports injuries with 4.9⭐ rating. Book appointment today!',
  keywords: [
    'top physiotherapist in Nagpur',
    'best physiotherapist Nagpur',
    'top rated physiotherapist Nagpur',
    'expert physiotherapist Nagpur',
    'leading physiotherapist Nagpur',
    'number 1 physiotherapist Nagpur'
  ],
  openGraph: {
    title: 'Top Physiotherapist in Nagpur | PhysioPhy',
    description: 'PhysioPhy - Home to Nagpur\'s top rated physiotherapists. Expert care, proven results, 4.9⭐ rating.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.physiophy.com/top-physiotherapist-nagpur'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Top Physiotherapist in Nagpur',
  description: 'Meet Nagpur\'s top physiotherapists at PhysioPhy',
  mainEntity: {
    '@type': 'PhysicalTherapy',
    name: 'PhysioPhy - Top Physiotherapist in Nagpur',
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

export default function TopPhysiotherapistNagpur() {
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
              Top Physiotherapist in Nagpur
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400 text-2xl mr-4">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-xl">4.9/5 Rating | 200+ Reviews</span>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              PhysioPhy - Home to Nagpur's Top Physiotherapists. Expert treatment for back pain, neck pain, sports injuries & rehabilitation
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

        {/* Why Top Section */}
        <section className="py-16" style={{background: 'linear-gradient(to top, #cfccfe 0%, #ace0f9 100%)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Nagpur's Top Physiotherapist at PhysioPhy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert physiotherapists are recognized as the top in Nagpur for their exceptional results and patient care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reason 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Top Rated Experts
                </h3>
                <p className="text-gray-600">
                  Our physiotherapists are consistently rated as the top in Nagpur with 4.9/5 stars and hundreds of success stories.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced Qualifications
                </h3>
                <p className="text-gray-600">
                  Masters in Physiotherapy with specialized training in manual therapy, sports rehabilitation, and pain management.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Proven Results
                </h3>
                <p className="text-gray-600">
                  95% success rate with patients reporting significant improvement within 4-6 sessions.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Years of Experience
                </h3>
                <p className="text-gray-600">
                  Combined experience of 15+ years treating complex cases and sports injuries.
                </p>
              </div>

              {/* Reason 5 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Continuous Learning
                </h3>
                <p className="text-gray-600">
                  Regular training and certification updates to stay at the forefront of physiotherapy techniques.
                </p>
              </div>

              {/* Reason 6 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Patient First Approach
                </h3>
                <p className="text-gray-600">
                  Personalized treatment plans with compassionate care and clear communication throughout recovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-30  text-white py-20 " style={{background: 'linear-gradient(to top, #ace0f9 100%, #cfccfe 0%'}}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Get Treated by Nagpur's Top Physiotherapist
            </h2>
            <p className="text-xl mb-8">
              Experience world-class physiotherapy care at PhysioPhy
            </p>
            <div className="space-x-4">
              <Link
                href="/pages/Bookappoitment"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Book Appointment
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