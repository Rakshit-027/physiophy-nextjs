import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Physiotherapy Clinic in Nagpur | Top Rated PhysioPhy',
  description: 'PhysioPhy is the best physiotherapy clinic in Nagpur with 4.9⭐ rating. Expert treatment for back pain, neck pain, sports injuries. Book appointment today!',
  keywords: [
    'best physiotherapy clinic in Nagpur',
    'best physiotherapy clinic near me',
    'top physiotherapy clinic Nagpur',
    'best physiotherapist Nagpur',
    'top rated physiotherapy clinic',
    'physiotherapy clinic near me Nagpur',
    'best physio clinic Nagpur',
    'number 1 physiotherapy clinic Nagpur'
  ],
  openGraph: {
    title: 'Best Physiotherapy Clinic in Nagpur | PhysioPhy',
    description: 'PhysioPhy - Nagpur\'s #1 rated physiotherapy clinic. Expert care, proven results, 4.9⭐ rating.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.physiophy.com/best-physiotherapy-clinic-nagpur'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Best Physiotherapy Clinic in Nagpur',
  description: 'Discover why PhysioPhy is considered the best physiotherapy clinic in Nagpur',
  mainEntity: {
    '@type': 'PhysicalTherapy',
    name: 'PhysioPhy - Best Physiotherapy Clinic in Nagpur',
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

export default function BestPhysiotherapyClinicNagpur() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Best Physiotherapy Clinic in Nagpur
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400 text-2xl mr-4">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-xl">4.9/5 Rating | 200+ Reviews</span>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              PhysioPhy - Nagpur's #1 Rated Physiotherapy Clinic. Expert treatment for back pain, neck pain, sports injuries & rehabilitation
            </p>
            <div className="space-x-4">
              <Link 
                href="/pages/Bookappoitment"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Book Appointment Now
              </Link>
              <Link 
                href="tel:+91-XXXXXXXXXX"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Call: +91-XXXXXXXXXX
              </Link>
            </div>
          </div>
        </section>

        {/* Why Best Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why PhysioPhy is the Best Physiotherapy Clinic in Nagpur
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
                  Consistently rated as the best physiotherapy clinic in Nagpur with 4.9/5 stars across all review platforms.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">👨‍⚕️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Led by Dr. Tanvi Katariya, our team of certified physiotherapists has 5+ years experience treating complex cases.
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
                  Convenient Location
                </h3>
                <p className="text-gray-600">
                  Easily accessible location in Nagpur with ample parking and public transport connectivity.
                </p>
              </div>

              {/* Reason 6 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Affordable Rates
                </h3>
                <p className="text-gray-600">
                  Best quality treatment at competitive prices with flexible payment options and insurance support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Best Physiotherapy Services in Nagpur
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Back & Neck Pain Treatment</h3>
                <p className="text-blue-700 mb-4">
                  Specialized treatment for chronic back pain, cervical spondylosis, disc problems, and postural issues.
                </p>
                <Link href="/services/back-neck-pain-physiotherapy-nagpur" className="text-blue-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Sports Injury Recovery</h3>
                <p className="text-green-700 mb-4">
                  Comprehensive sports injury rehabilitation for athletes and active individuals.
                </p>
                <Link href="/pages/Services" className="text-green-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Post-Surgery Rehabilitation</h3>
                <p className="text-purple-700 mb-4">
                  Expert post-operative care to ensure optimal recovery and return to normal function.
                </p>
                <Link href="/pages/Services" className="text-purple-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-orange-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Posture Correction</h3>
                <p className="text-orange-700 mb-4">
                  Modern workplace solutions for computer-related pain and postural problems.
                </p>
                <Link href="/pages/Services" className="text-orange-600 font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Makes Us the Best - Patient Reviews
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex text-yellow-400 text-lg mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  "Best physiotherapy clinic in Nagpur! Dr. Tanvi completely cured my chronic back pain in just 6 sessions. Highly recommended!"
                </p>
                <div className="font-semibold text-gray-800">- Rajesh Kumar</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex text-yellow-400 text-lg mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  "Excellent treatment and care. The best physiotherapy center in Nagpur. Professional staff and modern equipment."
                </p>
                <div className="font-semibold text-gray-800">- Priya Sharma</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex text-yellow-400 text-lg mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  "PhysioPhy is definitely the best physiotherapy clinic near me. Quick recovery from sports injury. Amazing results!"
                </p>
                <div className="font-semibold text-gray-800">- Vikram Patel</div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Best Physiotherapy Clinic Near You in Nagpur
              </h2>
              <p className="text-xl text-gray-600">
                Conveniently located and easily accessible from all major areas of Nagpur
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800">Dharampeth</h3>
                <p className="text-blue-600">5 min drive</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800">Sitabuldi</h3>
                <p className="text-blue-600">10 min drive</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800">Civil Lines</h3>
                <p className="text-blue-600">8 min drive</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800">Dhantoli</h3>
                <p className="text-blue-600">12 min drive</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Experience the Best Physiotherapy Treatment in Nagpur
            </h2>
            <p className="text-xl mb-8">
              Join 200+ satisfied patients who chose PhysioPhy for their recovery journey
            </p>
            <div className="space-x-4">
              <Link 
                href="/pages/Bookappoitment"
                className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Book Your Appointment Today
              </Link>
              <Link 
                href="/pages/Contact"
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
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
