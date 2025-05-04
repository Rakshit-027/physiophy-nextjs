"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Navbar from "@/app/components/Navbar/page";
import Homee from "@/app/pages/Home/page";
import PatientVideos from "@/app/components/PatientVideos/PatientVideos";
import About from "@/app/pages/About/page";
import InfiniteCardSlider from "@/app/components/InfiniteCardSlider/InfiniteCardSlider";
import Services from "@/app/pages/Services/page";
import Contact from "@/app/pages/Contact/page";
import FAQ from "@/app/pages/FAQ/page";
import Footer from "@/app/components/Footer/Footer";
import BookAppointment from "../app/pages/Bookappoitment/page"; // Corrected typo
import Whatsapp from "@/app/components/Mini/Whatsapp/Whatsaap";
import "./globals.css";

export async function generateMetadata() {
  return {
    title: "Physiophy | Home",
    description: "Welcome to Physiophy, your trusted partner in physiotherapy and rehabilitation.",
  };
}

export default function HomeClient() {
  // Define refs and inView states for each section
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: videosRef, inView: videosInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: sliderRef, inView: sliderInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: appointmentRef, inView: appointmentInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: faqRef, inView: faqInView } = useInView({ threshold: 0.3, triggerOnce: false });

  // Debugging logs to verify inView states
  useEffect(() => {
    console.log("Home in view:", homeInView);
    console.log("Patient Videos in view:", videosInView);
    console.log("About in view:", aboutInView);
    console.log("Infinite Slider in view:", sliderInView);
    console.log("Services in view:", servicesInView);
    console.log("Book Appointment in view:", appointmentInView);
    console.log("Contact in view:", contactInView);
    console.log("FAQ in view:", faqInView);
  }, [homeInView, videosInView, aboutInView, sliderInView, servicesInView, appointmentInView, contactInView, faqInView]);

  // Update document title based on visible section
  useEffect(() => {
    let activeTitle = "Physiophy | Best Neurophysiotherapy in Nagpur"; // Fallback title
    if (homeInView) {
      activeTitle = "Physiophy | Home";
    } else if (videosInView) {
      activeTitle = "Physiophy | Patient Videos";
    } else if (aboutInView) {
      activeTitle = "Physiophy | Why Choose Us";
    } else if (sliderInView) {
      activeTitle = "Physiophy | Images ";
    } else if (servicesInView) {
      activeTitle = "Physiophy | Services";
    } else if (appointmentInView) {
      activeTitle = "Physiophy | Book Appointment";
    } else if (contactInView) {
      activeTitle = "Physiophy | Contact Us";
    } else if (faqInView) {
      activeTitle = "Physiophy | FAQ";
    }

    document.title = activeTitle;
    console.log("Updated title:", activeTitle); // Debug title changes

    // Persist title during hydration
    const persistTitle = () => {
      if (document.title !== activeTitle) {
        document.title = activeTitle;
        console.log("Persisted title:", activeTitle);
      }
    };

    // Check title periodically to prevent override
    const interval = setInterval(persistTitle, 1000);
    return () => clearInterval(interval);
  }, [homeInView, videosInView, aboutInView, sliderInView, servicesInView, appointmentInView, contactInView, faqInView]);

  return (
    <>
      <Navbar />
      <div className="page-container">
        <section id="home" ref={homeRef}>
          <Homee />
        </section>
        <section id="patient-videos" ref={videosRef}>
          <PatientVideos />
        </section>
        <section id="About" ref={aboutRef}>
          <About />
        </section>
        <section id="infinite-slider" ref={sliderRef}>
          <InfiniteCardSlider />
        </section>
        <section id="services" ref={servicesRef}>
          <Services />
        </section>
        <section id="bookappointment" ref={appointmentRef}>
          <BookAppointment />
        </section>
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
        <section id="faq" ref={faqRef}>
          <FAQ />
        </section>
        <Footer />
      </div>
    </>
  );
}
