import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Back & Neck Pain Physiotherapy in Nagpur | PhysioPhy Clinic',
  description: 'Expert back and neck pain physiotherapy treatment in Nagpur. PhysioPhy offers specialized care for chronic pain, disc problems, and posture correction.',
  keywords: [
    'back pain physiotherapy Nagpur',
    'neck pain treatment Nagpur',
    'cervical pain physiotherapy',
    'lumbar pain treatment',
    'disc problem physiotherapy Nagpur',
    'posture correction Nagpur',
    'physiotherapy clinic Dharampeth',
    'chronic back pain treatment'
  ],
  openGraph: {
    title: 'Back & Neck Pain Physiotherapy in Nagpur | PhysioPhy',
    description: 'Professional back and neck pain treatment with proven physiotherapy techniques at PhysioPhy Nagpur.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.physiophy.com/services/back-neck-pain-physiotherapy-nagpur'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'PhysioPhy - Back & Neck Pain Physiotherapy',
  description: 'Expert back and neck pain physiotherapy treatment in Nagpur',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nagpur',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN'
  },
  medicalSpecialty: [
    'Back Pain Treatment',
    'Neck Pain Physiotherapy', 
    'Spine Rehabilitation',
    'Posture Correction'
  ],
  priceRange: '$$'
};

export default function BackNeckPainService() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Back & Neck Pain Physiotherapy in Nagpur
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Expert treatment for chronic back pain, neck pain, and spinal conditions at PhysioPhy
              </p>
              <div className="space-x-4">
                <Link 
                  href="/pages/Bookappoitment"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Book Consultation
                </Link>
                <Link 
                  href="/pages/Contact"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2>Professional Back & Neck Pain Treatment in Nagpur</h2>
                  <p>
                    At PhysioPhy, we understand that back and neck pain can significantly impact your daily life. 
                    Our specialized physiotherapy treatments target the root cause of your pain, providing long-lasting 
                    relief and preventing future episodes.
                  </p>

                  <h3>Common Conditions We Treat</h3>
                  <ul>
                    <li><strong>Chronic Lower Back Pain:</strong> Comprehensive treatment for persistent lumbar pain</li>
                    <li><strong>Cervical Spondylosis:</strong> Specialized care for neck arthritis and stiffness</li>
                    <li><strong>Disc Herniation:</strong> Non-surgical treatment for disc problems</li>
                    <li><strong>Muscle Spasms:</strong> Relief from acute and chronic muscle tension</li>
                    <li><strong>Postural Pain:</strong> Correction of work-related neck and back issues</li>
                    <li><strong>Sciatica:</strong> Treatment for nerve pain radiating to legs</li>
                    <li><strong>Whiplash Injuries:</strong> Recovery from motor vehicle accidents</li>
                  </ul>

                  <h3>Our Treatment Approach</h3>
                  <p>
                    Dr. Tanvi Katariya and our expert team use evidence-based techniques to provide effective treatment:
                  </p>
                  
                  <h4>1. Comprehensive Assessment</h4>
                  <p>
                    We begin with a thorough evaluation to identify the exact cause of your pain, including 
                    postural analysis, movement assessment, and pain pattern evaluation.
                  </p>

                  <h4>2. Manual Therapy</h4>
                  <p>
                    Our hands-on techniques include spinal mobilization, soft tissue massage, and joint 
                    manipulation to restore proper movement and reduce pain.
                  </p>

                  <h4>3. Exercise Therapy</h4>
                  <p>
                    Customized exercise programs to strengthen core muscles, improve flexibility, and 
                    enhance spinal stability for long-term relief.
                  </p>

                  <h4>4. Posture Correction</h4>
                  <p>
                    Education and training on proper ergonomics and body mechanics to prevent future 
                    episodes of back and neck pain.
                  </p>

                  <h3>Why Choose PhysioPhy for Back & Neck Pain?</h3>
                  <ul>
                    <li>✓ Specialized expertise in spinal conditions</li>
                    <li>✓ State-of-the-art treatment equipment</li>
                    <li>✓ Personalized treatment plans</li>
                    <li>✓ Proven track record with hundreds of patients</li>
                    <li>✓ Convenient location in Nagpur</li>
                    <li>✓ Flexible appointment scheduling</li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">Treatment Duration:</span>
                      <span>4-8 weeks average</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Session Length:</span>
                      <span>45-60 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Success Rate:</span>
                      <span>95%+ improvement</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">Emergency Pain?</h3>
                  <p className="text-blue-700 mb-4">
                    Severe back or neck pain requires immediate attention. Contact us for urgent consultation.
                  </p>
                  <Link 
                    href="tel:+91-XXXXXXXXXX"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
                  >
                    Call Now: +91-XXXXXXXXXX
                  </Link>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-green-800">Prevention Tips</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Maintain good posture while sitting</li>
                    <li>• Take regular breaks from desk work</li>
                    <li>• Sleep on a supportive mattress</li>
                    <li>• Exercise regularly to strengthen core</li>
                    <li>• Use proper lifting techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  "After suffering from chronic back pain for months, Dr. Tanvi's treatment at PhysioPhy 
                  gave me complete relief in just 6 weeks. Highly recommended!"
                </p>
                <div className="font-semibold">- Rajesh Kumar, Nagpur</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  "The neck pain from my desk job was unbearable. PhysioPhy's posture correction program 
                  not only relieved my pain but taught me how to prevent it."
                </p>
                <div className="font-semibold">- Priya Sharma, IT Professional</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  "Professional service and excellent results. My sciatica pain is completely gone after 
                  treatment at PhysioPhy. Thank you Dr. Tanvi!"
                </p>
                <div className="font-semibold">- Vikram Patel, Business Owner</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Relief from Back & Neck Pain?
            </h2>
            <p className="text-xl mb-8">
              Don't let pain control your life. Book your consultation with PhysioPhy's experts today.
            </p>
            <div className="space-x-4">
              <Link 
                href="/pages/Bookappoitment"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Book Appointment
              </Link>
              <Link 
                href="/pages/Contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
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
