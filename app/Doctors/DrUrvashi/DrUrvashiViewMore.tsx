'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import './DrTanviProfile.css';

const DrUrvashiViewMore = () => {
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  return (
    <div className={`tanvi-profile-container ${isVisible ? 'fade-in' : ''}`} ref={profileRef}>
      <div className="tanvi-decorative-circle tanvi-circle-1"></div>
      <div className="tanvi-decorative-circle tanvi-circle-2"></div>
      <div className="tanvi-decorative-circle tanvi-circle-3"></div>

      <div className="tanvi-profile-card">
        <div className="tanvi-card-header">
          <div className="tanvi-profile-image-container">
            <div className="tanvi-profile-image-wrapper">
              <Image
                src="https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(2).png"
                alt="Dr. Urvashi"
                width={200}
                height={200}
                className="tanvi-profile-image"
              />
            </div>
          </div>

          <div className="tanvi-profile-intro">
            <h1 className="tanvi-profile-name">Dr. Urvashi Gahukar</h1>
            <p className="tanvi-profile-title">
              BPTH | Consultant Orthopedic Physiotherapist, Shri Krishnanagar Branch
            </p>
          </div>
        </div>

        <div className="tanvi-profile-content">
          <div className="tanvi-bio-section">
            <p className="tanvi-profile-bio">
              A graduate of GMC Bhopal, Dr. Urvashi is a seasoned orthopedic physiotherapist
              managing our Shri Krishnanagar branch. Her approach combines thorough assessment with
              customized intervention — from post-fracture rehabilitation to posture correction and
              chronic joint pain management. Her clinical eye and structured execution allow
              patients to recover with confidence.
            </p>
            <p className="tanvi-profile-bio">
              Dr. Urvashi ensures continuity of care and maintains the highest standards in
              musculoskeletal therapy. Her presence in the branch has become a pillar of trust for
              the local community, especially for those navigating orthopedic challenges.
            </p>
          </div>

          <div className="tanvi-action-section">
            <div className="tanvi-social-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="tanvi-social-link"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="tanvi-social-link"
              >
                <Twitter size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="tanvi-social-link"
              >
                <Instagram size={22} />
              </a>
            </div>

            <a
              href="https://physiophy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tanvi-cta-button"
            >
              Visit PhysioPhy
              <ExternalLink size={16} className="tanvi-cta-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrUrvashiViewMore;
