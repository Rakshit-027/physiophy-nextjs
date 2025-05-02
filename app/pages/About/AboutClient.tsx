"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Heart, Users } from "lucide-react";
import { supabase } from "@/app/components/SupabaseClient/SupabaseClient"; // Corrected import
import "./About.css";

// Define interface for team member data
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image_path: string;
  specialties?: string[];
}

const getImageUrl = (imagePath: string): string => {
  return `https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/doctor-photos/${imagePath}`;
};

const AboutClient = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const { data, error } = await supabase.from("doctors").select("*");
        if (error) throw error;
        setTeamMembers(data as TeamMember[]);
      } catch (error: unknown) { // Use unknown for catch clause
        // Safely handle the error
        if (error instanceof Error) {
          console.error("Error fetching team members:", error.message);
        } else {
          console.error("Unexpected error fetching team members:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchTeamMembers();
  }, []);

  return (
    <div className="about-page">
      <section id="hero" className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Choose Us?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Leading the way in physiotherapy excellence since 2024, providing innovative
            and personalized care for optimal recovery and wellness.
          </motion.p>
        </motion.div>
      </section>

      <section id="features">
        <motion.div
          className="feature-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.div className="feature-box" whileHover={{ scale: 1.02, translateY: -10 }}>
            <div className="icon">👨‍⚕️</div>
            <h3>One therapist, One patient</h3>
            <p>We provide individualized attention and care tailored to your specific needs and requirements.</p>
          </motion.div>

          <motion.div className="feature-box" whileHover={{ scale: 1.02, translateY: -10 }}>
            <div className="icon">🏆</div>
            <h3>Best Professional Doctor</h3>
            <p>Our team consists of highly qualified and experienced medical professionals dedicated to your health.</p>
          </motion.div>

          <motion.div className="feature-box" whileHover={{ scale: 1.02, translateY: -10 }}>
            <div className="icon">💰</div>
            <h3>Affordable & Quality Services</h3>
            <p>We offer high-quality medical services at competitive and reasonable prices.</p>
          </motion.div>

          <motion.div className="feature-box" whileHover={{ scale: 1.02, translateY: -10 }}>
            <div className="icon">📋</div>
            <h3>Customized Treatment Protocols</h3>
            <p>Treatment plans are customized to meet your specific health goals and conditions.</p>
          </motion.div>

          <motion.div className="feature-box" whileHover={{ scale: 1.02, translateY: -10 }}>
            <div className="icon">🔬</div>
            <h3>Advanced Equipment & Modalities</h3>
            <p>We utilize state-of-the-art medical equipment and modern treatment modalities.</p>
          </motion.div>

          <motion.div className="feature-box" whileHover={{ scale: 1.02, translateY: -10 }}>
            <div className="icon">🧑‍🤝‍🧑</div>
            <h3>Comprehensive Rehabilitation</h3>
            <p>We offer a holistic approach to rehabilitation, ensuring complete physical and mental well-being.</p>
          </motion.div>
        </motion.div>
      </section>

      <section id="why-choose-us" className="why-choose-us">
        <motion.div
          className="why-choose-us-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At Physiophy, rehabilitation is more than just therapy—it's a commitment to excellence, innovation, and patient-first care. We follow the principle of one patient, one therapist, ensuring undivided attention and a treatment plan that's as unique as you. Our approach blends scientific precision with human touch, focusing not just on recovery but on enhancing mobility, confidence, and quality of life.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            What sets us apart is our dedication to detail, hands-on expertise, and unwavering belief in every patient's potential. We combine cutting-edge rehabilitation technologies, advanced modalities, and evidence-based techniques to deliver the most effective treatments. We don't just guide recovery—we track it, update it, and celebrate every milestone with you. Healing is not just about the body but about restoring independence, rebuilding strength, and empowering individuals to live fully. At Physiophy, you are not just another case—you are our priority, and your journey to recovery is our mission.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutClient;