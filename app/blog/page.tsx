import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Physiotherapy Blog | Expert Tips & Health Advice - PhysioPhy Nagpur',
  description: 'Read expert physiotherapy advice, health tips, and treatment insights from PhysioPhy Nagpur. Stay updated on rehabilitation, pain management, and wellness.',
  keywords: [
    'physiotherapy blog Nagpur',
    'health tips physiotherapy',
    'back pain advice Nagpur',
    'sports injury prevention',
    'rehabilitation tips',
    'physiotherapy exercises',
    'posture correction tips',
    'PhysioPhy blog'
  ],
};

const blogPosts = [
  {
    id: '10-signs-you-need-physiotherapy-nagpur',
    title: '10 Common Signs You Need Physiotherapy Treatment in Nagpur',
    excerpt: 'Discover the warning signs that indicate you need professional physiotherapy care. Learn when to seek treatment in Nagpur.',
    date: '2024-01-15',
    category: 'Health Tips',
    readTime: '5 min read'
  },
  {
    id: 'sports-injury-recovery-maharashtra',
    title: 'How PhysioPhy Helps with Sports Injury Recovery in Maharashtra', 
    excerpt: 'Comprehensive guide to sports injury rehabilitation and recovery protocols used at PhysioPhy clinic.',
    date: '2024-01-10',
    category: 'Sports Medicine',
    readTime: '7 min read'
  },
  {
    id: 'physiotherapy-vs-home-remedies-back-pain',
    title: 'Physiotherapy vs Home Remedies – What Works Better for Back Pain?',
    excerpt: 'Professional physiotherapy treatment compared to home remedies for effective back pain relief.',
    date: '2024-01-05',
    category: 'Pain Management', 
    readTime: '6 min read'
  },
  {
    id: 'benefits-physiotherapy-clinic-near-you',
    title: 'Top 5 Benefits of Visiting a Physiotherapy Clinic Near You',
    excerpt: 'Why professional physiotherapy care is essential for your health and recovery journey.',
    date: '2023-12-28',
    category: 'Treatment Benefits',
    readTime: '4 min read'
  },
  {
    id: 'post-surgery-rehabilitation-nagpur',
    title: 'Post-Surgery Rehabilitation: Why Nagpur Residents Trust PhysioPhy',
    excerpt: 'Expert post-surgical rehabilitation services and recovery protocols at PhysioPhy Nagpur.',
    date: '2023-12-20',
    category: 'Rehabilitation',
    readTime: '8 min read'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Physiotherapy Blog & Health Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice from PhysioPhy's certified physiotherapists in Nagpur. 
            Get insights on pain relief, rehabilitation, and maintaining optimal health.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    {new Date(post.date).toLocaleDateString('en-IN', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Health Tips</h2>
          <p className="text-xl mb-6">Get weekly physiotherapy tips and health advice from PhysioPhy experts.</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
