"use client";

import React, { useRef } from "react"; 
import "./Founder.css";
import ProFileCard from "@/app/components/ProFileCard/ProFileCard";

import ScrollReveal from "@/app/components/ScrollReveal/ScrollReveal";
import HomeCard from "@/app/components/HomeCard/HomeCard";

// Image imports with next/image


// Interface for photos array
interface Photo {
  id: number;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { id: 1, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/Dr.%20Tanu%20Jain%20(1).jpg", alt: "Photo 1" },
  { id: 2, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/With%20Dr.%20Ali%20Irani%20(1).jpg", alt: "Photo 2" },
  { id: 3, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/With%20Dr.%20Velumani%20sir%20(1).jpg", alt: "Photo 3" },
  { id: 4, src: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/media/celeb/With%20Paresh%20Rawal%20(1).jpg", alt: "Photo 4" },
];

const Founder = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="founder-container" ref={scrollContainerRef}>
      <div className="content-wrapper">
        <div className="story-section">
          <h2 className="story-title">The Story Of Founder From Passion To Practice</h2>

          <div className="story-content">
            <div className="text-section">
              <div className="story-paragraph">
                <ScrollReveal scrollContainerRef={scrollContainerRef}>
                  Physiophy is not just a rehabilitation center—it is a space of
                  transformation, resilience, and hope. Founded by Dr. Tanvi
                  Katariya, a renowned physiotherapist with over five years of
                  hands-on experience, Physiophy was built on the belief that
                  healing goes beyond recovery.
                </ScrollReveal>
              </div>
              <div className="story-paragraph">
                <ScrollReveal scrollContainerRef={scrollContainerRef}>
                  As a celebrity physiotherapist, Dr. Katariya has treated
                  esteemed personalities, yet her true passion lies in making world-class
                  physiotherapy accessible to all. With a deep commitment to
                  patient-centric care, she has redefined physiotherapy as
                  more than just treatment—it is a movement toward
                  strength, innovation, and excellence.
                </ScrollReveal>
              </div>
              
              <div className="story-paragraph">
                <ScrollReveal scrollContainerRef={scrollContainerRef}>
                  "Every patient is not just a case but a story, and at Physiophy,
                  every story is given the attention, expertise, and dedication
                  it deserves. This is a place where science meets compassion,
                  where barriers are broken, and where every step forward is a
                  victory."
                </ScrollReveal>
              </div>

              <p className="quote-text">
                -At Physiophy, we don't just heal we transform lives
              </p>
            </div>

            <div className="profile-section">
              <ProFileCard />
            </div>
          </div>
        </div>
        <HomeCard />
      </div>
    </div>
  );
};

export default Founder;