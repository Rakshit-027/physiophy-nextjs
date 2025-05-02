import React from "react";
import "./Founder.css";
import ProFileCard from "@/app/components/ProFileCard/ProFileCard";
import HomeCard from "@/app/components/HomeCard/HomeCard";

// Interface for photos array
interface Photo {
  id: number;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { id: 1, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/Dr.%20Tanu%20Jain%20(1).jpg", alt: "Dr. Tanu Jain" },
  { id: 2, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/With%20Dr.%20Ali%20Irani%20(1).jpg", alt: "With Dr. Ali Irani" },
  { id: 3, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/With%20Dr.%20Velumani%20sir%20(1).jpg", alt: "With Dr. Velumani" },
  { id: 4, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/With%20Paresh%20Rawal%20(1).jpg", alt: "With Paresh Rawal" },
];

const Founder = () => {
  return (
    <section className="founder-container">
      <div className="content-wrapper">
        <div className="story-section">
          <h2 className="story-title">From Passion to Practice: The Founder's Journey</h2>

          <div className="story-content">
            <div className="text-section">
              <p className="story-paragraph animate-fade-in">
                Physiophy is more than a rehabilitation center—it’s a sanctuary of transformation, resilience, and hope. Founded by Dr. Tanvi Katariya, a distinguished physiotherapist with over five years of expertise, Physiophy embodies the belief that healing transcends mere recovery.
              </p>
              <p className="story-paragraph animate-fade-in" style={{ animationDelay: "0.2s" }}>
                As a celebrity physiotherapist, Dr. Katariya has worked with renowned personalities, yet her heart lies in democratizing world-class physiotherapy. Her patient-centric approach redefines physiotherapy as a movement toward strength, innovation, and excellence.
              </p>
              <p className="story-paragraph animate-fade-in" style={{ animationDelay: "0.4s" }}>
                "Every patient is a unique story. At Physiophy, we weave expertise, compassion, and dedication into every journey, breaking barriers and celebrating every step forward."
              </p>
              <p className="quote-text animate-fade-in" style={{ animationDelay: "0.6s" }}>
                — At Physiophy, we don’t just heal; we transform lives.
              </p>
            </div>

            <div className="profile-section animate-slide-in">
              <ProFileCard />
            </div>
          </div>
        </div>
        <div className="home-card-wrapper animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <HomeCard />
        </div>
      </div>
    </section>
  );
};

export default Founder;