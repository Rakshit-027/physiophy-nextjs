import HomeClient from "./HomeClient"; // Adjust path as needed

export async function generateMetadata() {
  return {
    title: "Best Physiotherapy Clinic in Nagpur Near Me | PhysioPhy",
    description: "PhysioPhy - Best physiotherapy clinic in Nagpur near you. Expert therapists for back pain, sports injuries, rehab & posture correction. Book appointment today!",
    keywords: [
      "best physiotherapy clinic in Nagpur",
      "physiotherapy clinic near me",
      "best physiotherapist Nagpur",
      "physiotherapy clinic near me Nagpur",
      "physio clinic near me",
      "physiotherapy treatment Nagpur",
      "back pain treatment Nagpur",
      "sports injury physiotherapy Nagpur",
      "post surgery rehabilitation Nagpur",
      "physiotherapist in Dharampeth Nagpur",
      "rehab center in Nagpur Maharashtra",
      "neck pain treatment Nagpur",
      "posture correction therapy Nagpur",
      "physiotherapy center near me",
      "closest physiotherapy clinic"
    ],
    openGraph: {
      title: "Best Physiotherapy Clinic in Nagpur Near Me | PhysioPhy",
      description: "PhysioPhy - Best physiotherapy clinic in Nagpur near you. Expert care for pain relief, rehabilitation & sports injuries.",
      url: "https://www.physiophy.com",
      type: "website",
      locale: "en_IN",
    },
    alternates: {
      canonical: "https://www.physiophy.com",
    },
  };
}

export default function Home() {
  return <HomeClient />;
}