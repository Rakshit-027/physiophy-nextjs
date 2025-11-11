import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dr. Tanvi Shah - Best Physiotherapist in Nagpur | PhysioPhy',
  description: 'Dr. Tanvi Shah is the best physiotherapist in Nagpur at PhysioPhy. Expert treatment for back pain, neck pain, sports injuries with 4.9⭐ rating. Book appointment today!',
  keywords: [
    'Dr Tanvi Shah best physiotherapist Nagpur',
    'best physiotherapist in Nagpur',
    'top physiotherapist Nagpur',
    'Dr Tanvi Shah physiotherapy',
    'female physiotherapist Nagpur',
    'expert physiotherapist Nagpur',
    'best physio doctor Nagpur'
  ],
  openGraph: {
    title: 'Dr. Tanvi Shah - Best Physiotherapist in Nagpur | PhysioPhy',
    description: 'Dr. Tanvi Shah - Nagpur\'s top rated physiotherapist. Expert care, proven results, 4.9⭐ rating.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.physiophy.com/tanvi-shah-best-physiotherapist-nagpur'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dr. Tanvi Shah - Best Physiotherapist in Nagpur',
  description: 'Meet Dr. Tanvi Shah, Nagpur\'s best physiotherapist at PhysioPhy',
  mainEntity: {
    '@type': 'PhysicalTherapy',
    name: 'Dr. Tanvi Shah - Best Physiotherapist in Nagpur',
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

export default function TanviShahBestPhysiotherapistNagpur() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className=" text-black py-20 pt-30" style={{background: 'linear-gradient(to top,#ace0f9 100%, #cfccfe 0% )'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Dr. Tanvi Shah - Best Physiotherapist in Nagpur
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400 text-2xl mr-4">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-xl">4.9/5 Rating | 200+ Reviews</span>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Dr. Tanvi Shah - Nagpur's Leading Physiotherapist at PhysioPhy. Expert treatment for back pain, neck pain, sports injuries & rehabilitation
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
                Why Dr. Tanvi Shah is the Best Physiotherapist in Nagpur
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With over 200+ successful treatments and 4.9⭐ rating, Dr. Tanvi Shah leads Nagpur's most trusted physiotherapy center
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reason 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Top Rated Physiotherapist
                </h3>
                <p className="text-gray-600">
                  Dr. Tanvi Shah is consistently rated as the best physiotherapist in Nagpur with 4.9/5 stars across all review platforms.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">👩‍⚕️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expert Female Physiotherapist
                </h3>
                <p className="text-gray-600">
                  Specialized in women's health, sports injuries, and rehabilitation with 5+ years of clinical experience.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Proven Results
                </h3>
                <p className="text-gray-600">
                  95% of patients report significant improvement within 4-6 sessions using Dr. Shah's advanced treatment protocols.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced Qualifications
                </h3>
                <p className="text-gray-600">
                  Masters in Physiotherapy with specialized training in manual therapy, electrotherapy, and sports rehabilitation.
                </p>
              </div>

              {/* Reason 5 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Patient-Centered Care
                </h3>
                <p className="text-gray-600">
                  Personalized treatment plans tailored to individual needs with compassionate care and clear communication.
                </p>
              </div>

              {/* Reason 6 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Modern Clinic
                </h3>
                <p className="text-gray-600">
                  Works at PhysioPhy, Nagpur's best equipped physiotherapy clinic with state-of-the-art equipment.
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
                Dr. Tanvi Shah's Specializations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert treatment for various conditions by Nagpur's best physiotherapist
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🦴</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Back & Neck Pain</h3>
                <p className="text-gray-600">Advanced manual therapy for chronic pain relief</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">⚽</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sports Injuries</h3>
                <p className="text-gray-600">Specialized rehabilitation for athletes</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">👶</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pediatric Care</h3>
                <p className="text-gray-600">Gentle physiotherapy for children</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🧓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Geriatric Care</h3>
                <p className="text-gray-600">Specialized care for elderly patients</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-white py-16" style={{background: 'linear-gradient(to top,#ace0f9 100%, #cfccfe 0%)'}}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Better with Nagpur's Best Physiotherapist?
            </h2>
            <p className="text-xl mb-8">
              Book your appointment with Dr. Tanvi Shah today and start your journey to recovery
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