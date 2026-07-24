"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Privacy Policy</h1>
        
        <section>
          <h2>Introduction</h2>
          <p>
            At Physiophy, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Name, email address, phone number, address, and appointment details</li>
            <li><strong>Payment Information:</strong> Credit card or other payment method details (processed securely)</li>
            <li><strong>Medical Information:</strong> Health history and treatment preferences (with your consent)</li>
            <li><strong>Usage Data:</strong> How you interact with our website, IP address, browser type, and pages visited</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>Physiophy uses the information we collect in the following ways:</p>
          <ul>
            <li>To provide, operate, and maintain our physiotherapy services</li>
            <li>To process your appointments and payments</li>
            <li>To send you service-related announcements and updates</li>
            <li>To respond to your inquiries and customer support requests</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>Disclosure of Your Information</h2>
          <p>
            We may share your information with third-party service providers who assist us in operating our website and conducting our business, including payment processors and appointment management systems. We do not sell, trade, or rent your personal information to third parties without your consent, except as required by law.
          </p>
        </section>

        <section>
          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>Your Privacy Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2>Data Retention and Account Deletion Policy</h2>
          <p>
            <strong>Data Retention Period:</strong> We retain your personal data (including profile information, account credentials, and app usage data) only for as long as your account remains active or as needed to provide you with our services.
          </p>
          <p>
            <strong>Data Deletion Rights:</strong> You have the right to request the deletion of your personal data and account at any time. Upon receiving a valid request, we will permanently remove your data, subject to any legal or regulatory retention obligations.
          </p>
          <p>
            <strong>How to Request Deletion:</strong> You can submit a deletion request by emailing us at <a href="mailto:support@physiophy.com" style={{ color: '#007bff', textDecoration: 'none' }}>support@physiophy.com</a> or by visiting our online deletion request form at <a href="https://physiophy.com/account-deletion" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>https://physiophy.com/account-deletion</a>.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings. However, some features of our website may not function properly without cookies.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <ul>
            <li>Email: contact@physiophy.com</li>
            <li>Phone: +919970127614 or +917020427614</li>
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
