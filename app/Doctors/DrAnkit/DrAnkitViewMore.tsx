'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Twitter, Instagram, ExternalLink, Award, BookOpen, Users } from 'lucide-react';
import Image from 'next/image';
import './DrTanviProfile.css'; // Global CSS file

const DrAnkitViewMore = () => {
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

  const achievements = [
    { icon: <Award size={20} />, text: 'Consultant Physiotherapist' },
    { icon: <BookOpen size={20} />, text: 'Specialized Experience' },
    { icon: <Users size={20} />, text: 'PhysioPhy Team Member' },
  ];

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
                src="/DrAnkit.png"
                alt="Dr. Ankit Telang"
                width={200}
                height={200}
                className="tanvi-profile-image"
              />
            </div>
          </div>

          <div className="tanvi-profile-intro">
            <h1 className="tanvi-profile-name">Dr. Ankit Telang</h1>
            <p className="tanvi-profile-title">Consultant Physiotherapist</p>
          </div>
        </div>

        <div className="tanvi-profile-content">
          <div className="tanvi-bio-section">
            <p className="tanvi-profile-bio">
              Dr. Ankit Telang is a dedicated Consultant Physiotherapist at PhysioPhy. With a strong background in physiotherapy, he specializes in providing comprehensive care and rehabilitation for patients. His approach focuses on restoring function and improving quality of life through personalized treatment plans.
            </p>
            <p className="tanvi-profile-bio">
              He is committed to evidence-based practice and works closely with patients to achieve their recovery goals. His expertise and compassionate care make him a valued member of the PhysioPhy team.
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

export default DrAnkitViewMore;
