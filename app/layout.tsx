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
        <meta name="facebook-domain-verification" content="vfmr7627y5foskjwhpnra4ap21ek7m" />

        {/* Enhanced Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "PhysicalTherapy",
                "name": "PhysioPhy - Dhantoli Branch",
                "alternateName": ["PhysioPhy", "PhysioPhy Clinic Nagpur"],
                "image": [
                  "https://www.physiophy.com/assets/hero.webp",
                  "https://www.physiophy.com/assets/about-img.jpg"
                ],
                "description": "Best physiotherapy clinic in Dhantoli, Nagpur offering expert treatments for back pain, neck pain, sports injuries, and rehabilitation.",
                "url": "https://www.physiophy.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Ground Floor, Hyatt Medicare, Besides Get Wel Hospital, Dhantoli",
                  "addressLocality": "Nagpur",
                  "addressRegion": "Maharashtra",
                  "postalCode": "440012",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 21.1288,
                  "longitude": 79.0825
                },
                "telephone": "+91-9970127614",
                "email": "contact@physiophy.com",
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
                "founder": {
                  "@type": "Person",
                  "name": "Dr. Tanvi Katariya",
                  "jobTitle": "Chief Physiotherapist"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "PhysicalTherapy",
                "name": "PhysioPhy - Kharbi Branch",
                "alternateName": ["PhysioPhy Kharbi", "PhysioPhy Clinic Kharbi"],
                "image": [
                  "https://www.physiophy.com/assets/hero.webp",
                  "https://www.physiophy.com/assets/about-img.jpg"
                ],
                "description": "Top-rated physiotherapy clinic in Kharbi, Nagpur. Expert care for orthopedic and neurological conditions.",
                "url": "https://www.physiophy.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Plot No 83, Beside Bhavan’s School Gate No 1, Shrikrishna Nagar, Kharbi",
                  "addressLocality": "Nagpur",
                  "addressRegion": "Maharashtra",
                  "postalCode": "440024",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 21.1297,
                  "longitude": 79.1332
                },
                "telephone": "+91-7020427614",
                "email": "contact@physiophy.com",
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
                ]
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
