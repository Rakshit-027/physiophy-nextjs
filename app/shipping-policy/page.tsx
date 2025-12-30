"use client";

import React from "react";
import Link from "next/link";

export default function ShippingPolicyPage() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Shipping Policy</h1>
        
        <section>
          <h2>Overview</h2>
          <p>
            This Shipping Policy applies to any physiotherapy products, merchandise, or other items that Physiophy may ship to customers. Our in-clinic services are delivered at our facilities and are not subject to shipping policies.
          </p>
        </section>

        <section>
          <h2>Service Delivery</h2>
          <p>
            Physiotherapy sessions are provided at our clinic locations:
          </p>
          <ul>
            <li>Dhantoli Branch: Ground Floor, Hyatt Medicare, Besides Get Wel Hospital, Dhantoli, Nagpur - 440012</li>
            <li>Kharbi Branch: Plot No. 83, Beside Bhavan's School Gate No. 1, Shrikrishna Nagar, Kharbi, Nagpur, Maharashtra 440024</li>
          </ul>
        </section>

        <section>
          <h2>Home Visit Services</h2>
          <p>
            For our home visit physiotherapy service, our therapists will visit you at your residential address within Nagpur. Home visit appointments must be scheduled at least 48 hours in advance.
          </p>
          <ul>
            <li>Service area: Nagpur and surrounding areas</li>
            <li>Scheduling: Book through our appointment system or contact us directly</li>
            <li>Confirmation: We will confirm your home visit appointment via phone/email</li>
          </ul>
        </section>

        <section>
          <h2>Product Shipping (if applicable)</h2>
          <p>
            If Physiophy ships any physiotherapy products or merchandise:
          </p>
          <ul>
            <li>Orders are processed within 2-3 business days</li>
            <li>We use standard courier services for shipping</li>
            <li>Shipping charges will be calculated based on delivery location and product weight</li>
            <li>Tracking information will be provided via email</li>
            <li>Delivery typically takes 3-7 business days within India</li>
          </ul>
        </section>

        <section>
          <h2>Damaged or Lost Shipments</h2>
          <p>
            If you receive damaged or incomplete products:
          </p>
          <ul>
            <li>Contact us within 24 hours of receipt with photographic evidence</li>
            <li>We will arrange for replacement or refund as applicable</li>
            <li>For lost packages, we will follow up with the courier and provide updates</li>
          </ul>
        </section>

        <section>
          <h2>International Shipping</h2>
          <p>
            Currently, Physiophy primarily operates within India. For international shipping inquiries, please contact us directly to discuss available options.
          </p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>
            For shipping-related questions or concerns, please contact us:
          </p>
          <ul>
            <li>Email: contact@physiophy.com</li>
            <li>Phone: +919970127614 or +917020427614</li>
            <li>Hours: Monday-Friday 8:00 AM - 8:00 PM, Saturday 8:00 AM - 6:00 PM, Sunday 10:00 AM - 4:00 PM</li>
          </ul>
        </section>

        <div className="policy-footer">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>

      <style jsx>{`
        .policy-page {
          min-height: 100vh;
          background-color: #f9f9f9;
          padding: 40px 20px;
        }

        .policy-container {
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

        ul {
          margin-left: 20px;
          color: #555;
          line-height: 1.8;
        }

        li {
          margin-bottom: 8px;
        }

        .policy-footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }

        .policy-footer a {
          color: #007bff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .policy-footer a:hover {
          color: #0056b3;
        }
      `}</style>
    </div>
  );
}
