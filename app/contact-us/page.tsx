"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        
        <section>
          <h2>Get in Touch</h2>
          <p>
            Have questions? We'd love to hear from you. Contact Physiophy using the information below.
          </p>
        </section>

        <section className="contact-info">
          <div className="info-item">
            <Phone className="icon" size={24} />
            <div>
              <h3>Phone</h3>
              <p><a href="tel:+919970127614">+919970127614</a></p>
              <p><a href="tel:+917020427614">+917020427614</a></p>
            </div>
          </div>

          <div className="info-item">
            <Mail className="icon" size={24} />
            <div>
              <h3>Email</h3>
              <p><a href="mailto:contact@physiophy.com">contact@physiophy.com</a></p>
            </div>
          </div>
        </section>

        <section>
          <h2>Our Locations</h2>
          
          <div className="location">
            <MapPin className="location-icon" size={24} />
            <div>
              <h3>Dhantoli Branch</h3>
              <p>
                Ground Floor, Hyatt Medicare, Besides Get Wel Hospital, Dhantoli,
                Nagpur - 440012, Maharashtra, India
              </p>
            </div>
          </div>

          <div className="location">
            <MapPin className="location-icon" size={24} />
            <div>
              <h3>Kharbi Branch</h3>
              <p>
                Plot No. 83, Beside Bhavan's School Gate No. 1, Shrikrishna Nagar,
                Kharbi, Nagpur, Maharashtra 440024, India
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Business Hours</h2>
          <div className="hours">
            <Clock className="hours-icon" size={24} />
            <div>
              <p><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM</p>
              <p><strong>Saturday:</strong> 8:00 AM - 6:00 PM</p>
              <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Quick Response Form</h2>
          <p>You can also book an appointment or send us a message through our <Link href="/pages/Bookappoitment">appointment booking page</Link>.</p>
        </section>

        <div className="contact-footer">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background-color: #f9f9f9;
          padding: 40px 20px;
        }

        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          background-color: white;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #1a1a1a;
          margin-bottom: 30px;
          border-bottom: 3px solid #007bff;
          padding-bottom: 15px;
        }

        section {
          margin-bottom: 30px;
        }

        h2 {
          color: #333;
          margin-bottom: 15px;
          font-size: 1.3rem;
        }

        p {
          color: #555;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .info-item .icon {
          color: #007bff;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .info-item h3 {
          color: #333;
          margin-bottom: 5px;
        }

        .info-item a {
          color: #007bff;
          text-decoration: none;
        }

        .info-item a:hover {
          text-decoration: underline;
        }

        .location {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          padding: 15px;
          background-color: #f5f5f5;
          border-radius: 6px;
        }

        .location-icon {
          color: #007bff;
          flex-shrink: 0;
        }

        .location h3 {
          color: #333;
          margin-bottom: 8px;
        }

        .location p {
          color: #555;
          line-height: 1.6;
        }

        .hours {
          display: flex;
          gap: 15px;
          padding: 15px;
          background-color: #f5f5f5;
          border-radius: 6px;
        }

        .hours-icon {
          color: #007bff;
          flex-shrink: 0;
        }

        .hours p {
          margin-bottom: 5px;
        }

        .contact-footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }

        .contact-footer a {
          color: #007bff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .contact-footer a:hover {
          color: #0056b3;
        }

        @media (max-width: 600px) {
          .contact-container {
            padding: 20px;
          }

          h1 {
            font-size: 1.5rem;
          }

          h2 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}
