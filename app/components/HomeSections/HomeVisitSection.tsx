"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home as HomeIcon,
  UserCheck,
  Heart,
  Calendar,
  MapPin,
  Activity,
  Video,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  TrendingUp,
  Sparkles,
  Clock,
  Search,
  Check,
  QrCode,
  Layers,
} from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa6";
import styles from "./HomeVisitSection.module.css";

// Official PhysioPhy App Graphics
import appHomeVisitImg from "./physiophy_app_home_visit.jpg";
import appDashboardImg from "./physiophy_app_dashboard.png";
import appTeleconsultImg from "./physiophy_app_teleconsult.png";

// Configuration links
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.physiophy";
const APP_STORE_URL = "#"; // iOS App Store (Coming Soon)

export default function HomeVisitSection() {
  const [activeTab, setActiveTab] = useState<"all" | "dashboard" | "homevisit" | "teleconsult">("all");

  const scrollToDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("download-app");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.appSectionWrapper} id="app-ecosystem">
      {/* ====================================================================
          1. APP HERO
          ==================================================================== */}
      <section className={styles.heroContainer} aria-labelledby="app-hero-title">
        <div className={styles.heroGlow} aria-hidden="true" />
        
        <div className={styles.heroBadge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>PhysioPhy Mobile Ecosystem • Live on Google Play</span>
        </div>

        <h2 id="app-hero-title" className={styles.heroHeadline}>
          PhysioPhy App — <span className={styles.heroHeadlineGradient}>Physiotherapy That Comes to You</span>
        </h2>

        <p className={styles.heroDescription}>
          Access physiotherapy services from wherever you are. With the PhysioPhy app, patients can discover
          physiotherapists, book home visits, schedule clinic appointments, connect for online consultations,
          and manage their complete physiotherapy journey.
        </p>

        <div className={styles.heroCtaGroup}>
          <a
            href="#download-app"
            onClick={scrollToDownload}
            className={styles.primaryBtn}
            id="hero-download-btn"
          >
            <Smartphone size={20} />
            <span>Download the PhysioPhy App</span>
          </a>

          <Link href="#bookappointment" className={styles.secondaryBtn} id="hero-book-home-btn">
            <HomeIcon size={19} />
            <span>Book a Home Visit</span>
          </Link>
        </div>
      </section>

      {/* ====================================================================
          2. HOME VISIT – MAIN FEATURE SPOTLIGHT
          ==================================================================== */}
      <section className={styles.homeVisitSpotlight} aria-labelledby="home-visit-spotlight-title">
        <div className={styles.spotlightContent}>
          <div className={styles.spotlightPill}>
            <Sparkles size={16} />
            <span>Signature In-App Feature</span>
          </div>

          <h3 id="home-visit-spotlight-title" className={styles.spotlightHeading}>
            Physiotherapy at Your Doorstep
          </h3>

          <p className={styles.spotlightCopy}>
            Don&apos;t want to travel to a clinic? Book a physiotherapy home visit through the PhysioPhy app
            and get professional physiotherapy care at your home.
          </p>

          {/* Visual Concept Chain */}
          <div className={styles.conceptChain} aria-label="Home Visit Process">
            <div className={styles.conceptNode}>
              <span className={styles.conceptEmoji} role="img" aria-label="Home">🏠</span>
              <span>Home</span>
            </div>
            <span className={styles.conceptArrow}>→</span>
            <div className={styles.conceptNode}>
              <span className={styles.conceptEmoji} role="img" aria-label="Physiotherapist">👨‍⚕️</span>
              <span>Physiotherapist</span>
            </div>
            <span className={styles.conceptArrow}>→</span>
            <div className={styles.conceptNode}>
              <span className={styles.conceptEmoji} role="img" aria-label="Care">❤️</span>
              <span>Physiotherapy Care</span>
            </div>
          </div>

          <div className={styles.homeVisitPerksGrid}>
            <div className={styles.perkCard}>
              <div className={styles.perkCardIcon}>
                <HomeIcon size={22} />
              </div>
              <h4 className={styles.perkCardTitle}>Comfort of Home</h4>
              <p className={styles.perkCardText}>
                Receive 1-on-1 personalized attention in your familiar, comfortable setting without clinic travel or waiting rooms.
              </p>
            </div>

            <div className={styles.perkCard}>
              <div className={styles.perkCardIcon}>
                <ShieldCheck size={22} />
              </div>
              <h4 className={styles.perkCardTitle}>Certified Experts</h4>
              <p className={styles.perkCardText}>
                Verified physiotherapists arrive equipped with specialized portable rehabilitation and assessment tools.
              </p>
            </div>

            <div className={styles.perkCard}>
              <div className={styles.perkCardIcon}>
                <Smartphone size={22} />
              </div>
              <h4 className={styles.perkCardTitle}>Fast App Booking</h4>
              <p className={styles.perkCardText}>
                Pick your preferred time slot, track therapist arrival, and manage follow-up sessions right from your phone.
              </p>
            </div>
          </div>

          <div className={styles.spotlightCtaWrapper}>
            <Link href="#bookappointment" className={styles.primaryBtn}>
              <Calendar size={18} />
              <span>Schedule a Home Visit</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. APP SCREENSHOTS / OFFICIAL IN-APP EXPERIENCES
          ==================================================================== */}
      <section className={styles.screenshotsSection} aria-labelledby="screenshots-title">
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionSubhead}>Real In-App Experience</span>
          <h3 id="screenshots-title" className={styles.sectionTitle}>
            Designed for Effortless Patient Care
          </h3>
          <p className={styles.sectionDescription}>
            Explore the official PhysioPhy mobile application screens. Discover verified physiotherapists,
            book home visits, attend tele-consultations, and track your daily rehabilitation progress.
          </p>
        </div>

        {/* Tab Filters */}
        <div className={styles.tabsBar}>
          <button
            className={`${styles.tabBtn} ${activeTab === "all" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <Layers size={16} />
            <span>All Screens</span>
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "dashboard" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <Smartphone size={16} />
            <span>Patient Dashboard</span>
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "homevisit" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("homevisit")}
          >
            <HomeIcon size={16} />
            <span>Home Visit Booking</span>
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "teleconsult" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("teleconsult")}
          >
            <Video size={16} />
            <span>Online Teleconsultation</span>
          </button>
        </div>

        <div className={styles.mockupsStage}>
          {/* Left Screen: Home Visit Booking */}
          {(activeTab === "all" || activeTab === "homevisit") && (
            <div
              className={`${styles.screenshotCard} ${activeTab === "all" ? styles.screenshotCardLeft : styles.screenshotCardCenter}`}
            >
              <Image
                src={appHomeVisitImg}
                alt="PhysioPhy Home Visit Service Selection"
                width={540}
                height={960}
                className={styles.screenshotImage}
              />
              <div className={styles.screenshotLabelBox}>
                <div>
                  <div className={styles.screenshotLabelTitle}>Home Visit Booking</div>
                  <div className={styles.screenshotLabelSub}>Physio comes directly to your home</div>
                </div>
                <HomeIcon size={20} color="#6c68dd" />
              </div>
            </div>
          )}

          {/* Center Screen: Patient Dashboard (Dominant) */}
          {(activeTab === "all" || activeTab === "dashboard") && (
            <div
              className={`${styles.screenshotCard} ${activeTab === "all" ? styles.screenshotCardCenter : styles.screenshotCardCenter}`}
            >
              <Image
                src={appDashboardImg}
                alt="PhysioPhy Patient Dashboard & Doctor Discovery"
                width={540}
                height={960}
                className={styles.screenshotImage}
                priority
              />
              <div className={styles.screenshotLabelBox}>
                <div>
                  <div className={styles.screenshotLabelTitle}>Patient Dashboard & Discovery</div>
                  <div className={styles.screenshotLabelSub}>Book verified physiotherapists & track care</div>
                </div>
                <Sparkles size={20} color="#6c68dd" />
              </div>
            </div>
          )}

          {/* Right Screen: Online Teleconsultation */}
          {(activeTab === "all" || activeTab === "teleconsult") && (
            <div
              className={`${styles.screenshotCard} ${activeTab === "all" ? styles.screenshotCardRight : styles.screenshotCardCenter}`}
            >
              <Image
                src={appTeleconsultImg}
                alt="PhysioPhy Online Video Consultation"
                width={540}
                height={960}
                className={styles.screenshotImage}
              />
              <div className={styles.screenshotLabelBox}>
                <div>
                  <div className={styles.screenshotLabelTitle}>Online Teleconsultation</div>
                  <div className={styles.screenshotLabelSub}>Face-to-face video therapy anywhere</div>
                </div>
                <Video size={20} color="#6c68dd" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ====================================================================
          4. EVERYTHING YOU CAN DO WITH THE APP (6 FEATURE CARDS)
          ==================================================================== */}
      <section className={styles.featuresSection} aria-labelledby="features-title">
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionSubhead}>Comprehensive Ecosystem</span>
          <h3 id="features-title" className={styles.sectionTitle}>
            More Than Just an Appointment App
          </h3>
          <p className={styles.sectionDescription}>
            PhysioPhy connects your entire recovery journey into one reliable mobile experience,
            delivering certified healthcare professionals right where you need them.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {/* 1. Home Physiotherapy */}
          <div className={styles.featureCard}>
            <div className={styles.featureIconBox}>
              <HomeIcon size={24} />
            </div>
            <h4 className={styles.featureCardTitle}>Home Physiotherapy</h4>
            <p className={styles.featureCardDescription}>
              Book a certified physiotherapist for personalized home visits with full diagnostic and treatment equipment.
            </p>
          </div>

          {/* 2. Clinic Appointments */}
          <div className={styles.featureCard}>
            <div className={styles.featureIconBox}>
              <Building2 size={24} />
            </div>
            <h4 className={styles.featureCardTitle}>Clinic Appointments</h4>
            <p className={styles.featureCardDescription}>
              Easily schedule in-clinic sessions at PhysioPhy centers for specialized electrotherapy and robotic rehab.
            </p>
          </div>

          {/* 3. Online Consultation */}
          <div className={styles.featureCard}>
            <div className={styles.featureIconBox}>
              <Video size={24} />
            </div>
            <h4 className={styles.featureCardTitle}>Online Consultation</h4>
            <p className={styles.featureCardDescription}>
              Connect securely with expert physiotherapists via high-definition video consultations wherever you are.
            </p>
          </div>

          {/* 4. Find Physiotherapists */}
          <div className={styles.featureCard}>
            <div className={styles.featureIconBox}>
              <MapPin size={24} />
            </div>
            <h4 className={styles.featureCardTitle}>Find Physiotherapists</h4>
            <p className={styles.featureCardDescription}>
              Discover verified, specialized physiotherapists tailored to your specific condition and location.
            </p>
          </div>

          {/* 5. Manage Appointments */}
          <div className={styles.featureCard}>
            <div className={styles.featureIconBox}>
              <Calendar size={24} />
            </div>
            <h4 className={styles.featureCardTitle}>Manage Appointments</h4>
            <p className={styles.featureCardDescription}>
              View upcoming sessions, reschedule with one tap, review completed treatments, and track dates seamlessly.
            </p>
          </div>

          {/* 6. Track Your Progress */}
          <div className={styles.featureCard}>
            <div className={styles.featureIconBox}>
              <TrendingUp size={24} />
            </div>
            <h4 className={styles.featureCardTitle}>Track Your Progress</h4>
            <p className={styles.featureCardDescription}>
              Monitor your rehabilitation journey, follow guided home exercises, and track mobility milestones.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. HOW HOME VISITS WORK (5 SIMPLE STEPS)
          ==================================================================== */}
      <section className={styles.stepsSection} aria-labelledby="steps-title">
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionSubhead}>Simple 5-Step Process</span>
          <h3 id="steps-title" className={styles.sectionTitle}>
            How Home Visits Work
          </h3>
          <p className={styles.sectionDescription}>
            Booking a professional home physiotherapy session through the PhysioPhy app is fast and seamless.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {/* Step 01 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <h4 className={styles.stepTitle}>Open PhysioPhy</h4>
            <p className={styles.stepDesc}>
              Open the PhysioPhy app and access your secure patient account.
            </p>
          </div>

          {/* Step 02 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <h4 className={styles.stepTitle}>Select Home Visit</h4>
            <p className={styles.stepDesc}>
              Choose the home visit option when booking your physiotherapy service.
            </p>
          </div>

          {/* Step 03 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <h4 className={styles.stepTitle}>Find a Physiotherapist</h4>
            <p className={styles.stepDesc}>
              View available certified physiotherapists based on your service and location.
            </p>
          </div>

          {/* Step 04 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>04</div>
            <h4 className={styles.stepTitle}>Book Appointment</h4>
            <p className={styles.stepDesc}>
              Choose a suitable date and time slot, and confirm your booking.
            </p>
          </div>

          {/* Step 05 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>05</div>
            <h4 className={styles.stepTitle}>Receive Care at Home</h4>
            <p className={styles.stepDesc}>
              The physiotherapist visits your home for the scheduled, customized session.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. PATIENT EXPERIENCE (CONNECTED JOURNEY)
          ==================================================================== */}
      <section className={styles.journeySection} aria-labelledby="journey-title">
        <div className={styles.sectionHeaderCenter}>
          <span className={styles.sectionSubhead}>End-to-End Care</span>
          <h3 id="journey-title" className={styles.sectionTitle}>
            Your Physiotherapy Journey, Connected
          </h3>
          <p className={styles.sectionDescription}>
            PhysioPhy guides and empowers you through every stage of physical recovery.
          </p>
        </div>

        <div className={styles.journeyFlow}>
          <div className={styles.journeyStepCard}>
            <div className={styles.journeyStepHeader}>
              <div className={styles.journeyStepDot}>1</div>
              <h4 className={styles.journeyStepTitle}>Find</h4>
            </div>
            <p className={styles.journeyStepDesc}>
              Discover physiotherapists and available services matching your rehabilitation needs.
            </p>
          </div>

          <div className={styles.journeyStepCard}>
            <div className={styles.journeyStepHeader}>
              <div className={styles.journeyStepDot}>2</div>
              <h4 className={styles.journeyStepTitle}>Book</h4>
            </div>
            <p className={styles.journeyStepDesc}>
              Choose home visit, clinic appointment, or online consultation in just a few taps.
            </p>
          </div>

          <div className={styles.journeyStepCard}>
            <div className={styles.journeyStepHeader}>
              <div className={styles.journeyStepDot}>3</div>
              <h4 className={styles.journeyStepTitle}>Attend</h4>
            </div>
            <p className={styles.journeyStepDesc}>
              Receive your scheduled physiotherapy session with one-on-one expert care.
            </p>
          </div>

          <div className={styles.journeyStepCard}>
            <div className={styles.journeyStepHeader}>
              <div className={styles.journeyStepDot}>4</div>
              <h4 className={styles.journeyStepTitle}>Exercise</h4>
            </div>
            <p className={styles.journeyStepDesc}>
              Follow the exercises and personalized rehabilitation plan provided by your physiotherapist.
            </p>
          </div>

          <div className={styles.journeyStepCard}>
            <div className={styles.journeyStepHeader}>
              <div className={styles.journeyStepDot}>5</div>
              <h4 className={styles.journeyStepTitle}>Track</h4>
            </div>
            <p className={styles.journeyStepDesc}>
              Monitor sessions, daily exercises, and recovery progress directly through the application.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. FOR PATIENTS & 8. CONNECTING PATIENTS & PHYSIOTHERAPISTS
          ==================================================================== */}
      <div className={styles.ecosystemGrid}>
        {/* For Patients */}
        <div className={styles.ecosystemCard} aria-labelledby="for-patients-title">
          <span className={styles.sectionSubhead}>Built For Your Recovery</span>
          <h3 id="for-patients-title" style={{ fontSize: "1.65rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.75rem" }}>
            With PhysioPhy, Patients Can:
          </h3>
          <p style={{ fontSize: "0.98rem", color: "#64748b", lineHeight: 1.6 }}>
            Gain direct control over your physiotherapy sessions and recovery roadmap:
          </p>

          <div className={styles.patientCapabilitiesList}>
            <div className={styles.capabilityItem}>
              <Check size={18} className={styles.capabilityIcon} />
              <span>Find physiotherapy services</span>
            </div>
            <div className={styles.capabilityItem}>
              <Check size={18} className={styles.capabilityIcon} />
              <span>Book home visits</span>
            </div>
            <div className={styles.capabilityItem}>
              <Check size={18} className={styles.capabilityIcon} />
              <span>Schedule clinic appointments</span>
            </div>
            <div className={styles.capabilityItem}>
              <Check size={18} className={styles.capabilityIcon} />
              <span>Access online consultations</span>
            </div>
            <div className={styles.capabilityItem}>
              <Check size={18} className={styles.capabilityIcon} />
              <span>Find available physiotherapists</span>
            </div>
            <div className={styles.capabilityItem}>
              <Check size={18} className={styles.capabilityIcon} />
              <span>Manage appointments</span>
            </div>
            <div className={styles.capabilityItem}>
              <Check size={18} className={styles.capabilityIcon} />
              <span>View past & upcoming sessions</span>
            </div>
            <div className={styles.capabilityItem}>
              <Check size={18} className={styles.capabilityIcon} />
              <span>Follow prescribed exercises</span>
            </div>
            <div className={styles.capabilityItem}>
              <Check size={18} className={styles.capabilityIcon} />
              <span>Track continuous progress</span>
            </div>
          </div>
        </div>

        {/* Connecting Patients & Physiotherapists */}
        <div className={styles.ecosystemCard} aria-labelledby="platform-title">
          <span className={styles.sectionSubhead}>Healthcare Technology</span>
          <h3 id="platform-title" style={{ fontSize: "1.65rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.75rem" }}>
            Connecting Patients With Physiotherapy Care
          </h3>
          <p style={{ fontSize: "0.98rem", color: "#64748b", lineHeight: 1.6 }}>
            PhysioPhy brings patients and physiotherapists together through one connected platform,
            making it easier to discover services, schedule appointments, and continue the rehabilitation journey.
          </p>

          <div className={styles.platformDiagram} aria-label="Platform Connection Flow">
            <div className={styles.diagramNode}>
              <UserCheck size={20} color="#6c68dd" />
              <span>Patient</span>
            </div>

            <div className={styles.diagramConnector}>
              <ArrowRight size={22} style={{ transform: "rotate(90deg)" }} />
            </div>

            <div className={`${styles.diagramNode} ${styles.diagramNodeHighlight}`}>
              <Smartphone size={22} color="#ffffff" />
              <span>PhysioPhy App (Unified Ecosystem)</span>
            </div>

            <div className={styles.diagramConnector}>
              <ArrowRight size={22} style={{ transform: "rotate(90deg)" }} />
            </div>

            <div className={styles.diagramNode}>
              <Heart size={20} color="#6c68dd" />
              <span>Certified Physiotherapist</span>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          9. DOWNLOAD SECTION (STRONG FINAL CTA)
          ==================================================================== */}
      <section
        className={styles.downloadCtaContainer}
        id="download-app"
        aria-labelledby="download-section-title"
      >
        <div className={styles.downloadCtaLeft}>
          <div className={styles.heroBadge} style={{ background: "rgba(108, 104, 221, 0.25)", color: "#c7d2fe", borderColor: "rgba(199, 210, 254, 0.4)" }}>
            <span className={styles.badgeDot} style={{ backgroundColor: "#818cf8" }} />
            <span>Get Started in Seconds</span>
          </div>

          <h3 id="download-section-title" className={styles.downloadHeadline}>
            Start Your Physiotherapy Journey With PhysioPhy
          </h3>

          <p className={styles.downloadDescription}>
            Download the PhysioPhy app and access physiotherapy services wherever you need them —
            from personalized home visits to guided recovery plans.
          </p>

          <div className={styles.storeButtonsRow}>
            {/* Google Play Store (Live) */}
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.playStoreBtn}
              id="google-play-cta"
            >
              <FaGooglePlay size={26} color="#6c68dd" />
              <div>
                <span className={styles.storeBtnSub}>Available Now On</span>
                <span className={styles.storeBtnMain}>Google Play</span>
              </div>
            </a>

            {/* Apple App Store (Coming Soon) */}
            <div
              className={styles.appStoreBtnDisabled}
              title="iOS app is currently in preparation for official launch"
              id="apple-app-store-cta"
            >
              <FaApple size={30} color="#cbd5e1" />
              <div>
                <span className={styles.storeBtnSubDisabled}>Coming Soon On</span>
                <span className={styles.storeBtnMainDisabled}>Apple App Store</span>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Quick Download Card */}
        <div className={styles.downloadCtaRight} aria-hidden="true">
          <div className={styles.qrCodeCard}>
            <QrCode size={110} color="#0f172a" />
            <div className={styles.qrCodeScanLabel}>Scan to Download</div>
            <div style={{ fontSize: "0.72rem", color: "#64748b", marginTop: "0.2rem" }}>Google Play Store</div>
          </div>
        </div>
      </section>
    </div>
  );
}
