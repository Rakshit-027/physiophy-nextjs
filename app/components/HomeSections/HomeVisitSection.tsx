"use client";

import React from "react";
import Image from "next/image";
import { FaCalendarCheck, FaUserMd, FaShieldVirus } from "react-icons/fa";
import styles from "./HomeVisitSection.module.css";
import image1 from './Gemini_Generated_Image_g3ckt2g3ckt2g3ck.png';

const keyPoints = [
  {
    icon: <FaCalendarCheck className={styles.icon} />,
    text: "Flexible scheduling to suit patient needs",
  },
  {
    icon: <FaUserMd className={styles.icon} />,
    text: "One-on-one attention in a familiar environment",
  },
  {
    icon: <FaShieldVirus className={styles.icon} />,
    text: "Safe, hygienic, and hassle-free service",
  },
];

export default function HomeVisitSection() {
  return (
    <section className={styles.section}>
      <div className={styles.visual}>
        <Image
          src={image1}
          alt="Therapist arriving at a patient's home"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.headline}>We Come to You</h2>
        <p className={styles.subtext}>
          Certified physiotherapists visit your home for assessments, treatments, and follow-ups—making care easy and accessible.
        </p>
        <div className={styles.featuresGrid}>
          {keyPoints.map((point, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.iconWrapper}>{point.icon}</div>
              <p className={styles.featureText}>{point.text}</p>
            </div>
          ))}
        </div>
        <button className={styles.cta} onClick={() => (window.location.href = "tel:+919970127614")}>Schedule a Home Visit Today</button>
      </div>
    </section>
  );
}
