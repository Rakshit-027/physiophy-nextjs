import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Back Pain Physiotherapy in Nagpur | Expert Treatment | PhysioPhy',
  description: 'Effective back pain physiotherapy in Nagpur at PhysioPhy. Specialized treatment for lower back pain, sciatica, disc problems. 4.9⭐ rating. Book appointment!',
  keywords: [
    'back pain physiotherapy Nagpur',
    'lower back pain treatment Nagpur',
    'sciatica treatment Nagpur',
    'disc problem physiotherapy Nagpur',
    'back pain relief Nagpur',
    'spinal physiotherapy Nagpur'
  ],
  openGraph: {
    title: 'Back Pain Physiotherapy in Nagpur | PhysioPhy',
    description: 'Get relief from back pain with expert physiotherapy in Nagpur. Proven treatments for sciatica, disc issues, and chronic pain.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.physiophy.com/back-pain-physiotherapy-nagpur'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Back Pain Physiotherapy in Nagpur',
  description: 'Specialized physiotherapy treatment for back pain in Nagpur',
  mainEntity: {
    '@type': 'PhysicalTherapy',
    name: 'PhysioPhy - Back Pain Physiotherapy in Nagpur',
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

export default function BackPainPhysiotherapyNagpur() {
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
              Back Pain Physiotherapy in Nagpur
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400 text-2xl mr-4">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-xl">4.9/5 Rating | 200+ Reviews</span>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Expert Back Pain Physiotherapy in Nagpur. Get lasting relief from lower back pain, sciatica, and disc problems
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
                Specialized Back Pain Treatment
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive physiotherapy solutions for all types of back pain conditions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🦴</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Lower Back Pain
                </h3>
                <p className="text-gray-600">
                  Effective treatment for chronic and acute lower back pain using manual therapy and exercise rehabilitation.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Sciatica Treatment
                </h3>
                <p className="text-gray-600">
                  Specialized physiotherapy for sciatic nerve pain, including nerve mobilization and pain management techniques.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💿</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Disc Problems
                </h3>
                <p className="text-gray-600">
                  Conservative treatment for disc herniation, bulging discs, and degenerative disc disease.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Postural Correction
                </h3>
                <p className="text-gray-600">
                  Assessment and correction of poor posture habits that contribute to back pain.
                </p>
              </div>

              {/* Service 5 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pain Management
                </h3>
                <p className="text-gray-600">
                  Advanced pain relief techniques including electrotherapy, ultrasound, and manual therapy.
                </p>
              </div>

              {/* Service 6 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Core Strengthening
                </h3>
                <p className="text-gray-600">
                  Targeted exercises to strengthen core muscles and provide better spinal support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-30  text-white py-20 " style={{background: 'linear-gradient(to top, #ace0f9 100%, #cfccfe 0%'}}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Don't Let Back Pain Control Your Life
            </h2>
            <p className="text-xl mb-8">
              Get expert back pain physiotherapy treatment in Nagpur at PhysioPhy
            </p>
            <div className="space-x-4">
              <Link
                href="/pages/Bookappoitment"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Book Back Pain Treatment
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