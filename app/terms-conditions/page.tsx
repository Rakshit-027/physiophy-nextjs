"use client";

import React from "react";
import Link from "next/link";

export default function TermsConditionsPage() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Terms & Conditions</h1>
        
        <section>
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the Physiophy website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Physiophy's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose or for any public display</li>
            <li>Attempting to decompile or reverse engineer any software contained on the website</li>
            <li>Removing any copyright or other proprietary notations from the materials</li>
            <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2>Disclaimer</h2>
          <p>
            The materials on Physiophy's website are provided on an 'as is' basis. Physiophy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2>Limitations</h2>
          <p>
            In no event shall Physiophy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Physiophy's website.
          </p>
        </section>

        <section>
          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on Physiophy's website could include technical, typographical, or photographic errors. Physiophy does not warrant that any of the materials on its website are accurate, complete, or current. Physiophy may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section>
          <h2>Links</h2>
          <p>
            Physiophy has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Physiophy of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section>
          <h2>Modifications</h2>
          <p>
            Physiophy may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Nagpur.
          </p>
        </section>

        <section>
          <h2>Appointment and Service Terms</h2>
          <p>
            When booking physiotherapy services with Physiophy:
          </p>
          <ul>
            <li>You agree to provide accurate and complete health information</li>
            <li>You confirm you are physically and mentally capable of receiving treatment</li>
            <li>You take full responsibility for medical decisions and treatment outcomes</li>
            <li>Physiotherapy is not a substitute for medical diagnosis or treatment by a physician</li>
            <li>You agree to comply with all clinic policies and therapist instructions</li>
            <li>You assume all risks associated with physiotherapy treatment</li>
          </ul>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us at:
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
