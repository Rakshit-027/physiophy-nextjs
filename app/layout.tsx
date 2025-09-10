import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Whatsaap from "./components/Mini/Whatsapp/Whatsaap";

// SEO Metadata
export const metadata: Metadata = {
  title: "PhysioPhy | Best Physiotherapy Clinic in Nagpur",
  description:
    "PhysioPhy, Nagpur's trusted physiotherapy clinic. Expert therapists for pain relief, rehab, posture correction & sports injuries. Book an appointment today.",
  keywords: [
    "PhysioPhy",
    "best physiotherapy clinic in Nagpur",
    "physiotherapy clinic near me",
    "physiotherapy clinic Nagpur",
    "best physiotherapist Nagpur",
    "physiotherapy treatment Nagpur",
    "physiotherapy clinic near me Nagpur",
    "best physiotherapy clinic near me",
    "top physiotherapy clinic Nagpur",
    "physiotherapy center near me",
    "back pain treatment Nagpur",
    "neck pain treatment Nagpur",
    "sports injury physiotherapy Nagpur",
    "post surgery rehabilitation Nagpur",
    "physiotherapist in Dharampeth Nagpur",
    "physiotherapist near me Nagpur",
    "rehab center in Nagpur Maharashtra",
    "rehabilitation center near me",
    "posture correction therapy Nagpur",
    "joint pain treatment Nagpur",
    "Dr. Tanvi PhysioPhy",
    "wellness therapy Nagpur",
    "physical therapy clinic Nagpur",
    "physiotherapy clinic Dhantoli",
    "physiotherapy clinic Sitabuldi",
    "best physio near me",
    "top rated physiotherapy clinic Nagpur"
  ],
  authors: [{ name: "PhysioPhy Physiotherapy Clinic" }],
  creator: "PhysioPhy",
  publisher: "PhysioPhy",
  metadataBase: new URL("https://www.physiophy.com"),
  openGraph: {
    title: "PhysioPhy | Best Physiotherapy Clinic in Nagpur",
    description:
      "PhysioPhy, Nagpur's trusted physiotherapy clinic. Expert therapists for pain relief, rehab, posture correction & sports injuries. Book appointment today.",
    url: "https://www.physiophy.com",
    siteName: "PhysioPhy",
    images: [
      {
        url: "https://www.physiophy.com/assets/hero.webp",
        width: 1200,
        height: 630,
        alt: "PhysioPhy - Best Physiotherapy Clinic in Nagpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhysioPhy | Best Physiotherapy Clinic in Nagpur",
    description:
      "Expert physiotherapy and rehabilitation in Nagpur. Restore mobility, relieve pain, and recover faster at PhysioPhy.",
    images: ["https://www.physiophy.com/assets/hero.webp"],
    creator: "@physiophy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'google14cad34e038f98f1', // Google Search Console verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO elements */}
        <link rel="canonical" href="https://www.physiophy.com" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur" />
        <meta name="geo.position" content="21.1458;79.0882" />
        <meta name="ICBM" content="21.1458, 79.0882" />
        
        {/* Enhanced Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "PhysicalTherapy",
                "name": "PhysioPhy - Best Physiotherapy Clinic in Nagpur",
                "alternateName": ["PhysioPhy", "PhysioPhy Clinic Nagpur"],
                "image": [
                  "https://www.physiophy.com/assets/hero.webp",
                  "https://www.physiophy.com/assets/about-img.jpg"
                ],
                "description": "Best physiotherapy clinic in Nagpur offering expert treatments for back pain, neck pain, sports injuries, and rehabilitation. Top-rated physiotherapy center near me.",
                "url": "https://www.physiophy.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Dharampeth", // Replace with exact address
                  "addressLocality": "Nagpur",
                  "addressRegion": "Maharashtra",
                  "postalCode": "440010", // Replace with actual postal code
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 21.1458,
                  "longitude": 79.0882
                },
                "telephone": "+91-XXXXXXXXXX", // Replace with actual phone
                "email": "info@physiophy.com", // Replace with actual email
                "priceRange": "₹₹",
                "paymentAccepted": ["Cash", "Credit Card", "UPI", "Digital Payment"],
                "currenciesAccepted": "INR",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "200",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "servesCuisine": "Healthcare",
                "serviceArea": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 21.1458,
                    "longitude": 79.0882
                  },
                  "geoRadius": "50000"
                },
                "areaServed": [
                  "Nagpur",
                  "Dharampeth",
                  "Sitabuldi", 
                  "Dhantoli",
                  "Ramdaspeth",
                  "Civil Lines",
                  "Mahal",
                  "Sadar",
                  "Maharashtra"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Physiotherapy Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Back Pain Treatment"
                      }
                    },
                    {
                      "@type": "Offer", 
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Neck Pain Treatment"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service", 
                        "name": "Sports Injury Rehabilitation"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Post Surgery Rehabilitation"
                      }
                    }
                  ]
                },
                "founder": {
                  "@type": "Person",
                  "name": "Dr. Tanvi Katariya",
                  "jobTitle": "Chief Physiotherapist"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "PhysioPhy - Best Physiotherapy Clinic Near Me",
                "description": "Top-rated physiotherapy clinic in Nagpur for all your rehabilitation needs. Best physiotherapy center near me.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Nagpur", 
                  "addressRegion": "Maharashtra",
                  "addressCountry": "IN"
                }
              }
            ])
          }}
        />
      </head>
      <body className="relative">
        <Navbar />
        {children}
        {/* WhatsApp Floating Button */}
        <div className="fixed right-4 bottom-4 z-2000 hover:scale-110 transition-transform duration-200">
          <Whatsaap />
        </div>
      </body>
    </html>
  );
}
