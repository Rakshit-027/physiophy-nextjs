"use client";

import React from "react";
import Link from "next/link";

export default function CancellationRefundPage() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Cancellation & Refund Policy</h1>
        
        <section>
          <h2>Overview</h2>
          <p>
            At Physiophy, we want to ensure customer satisfaction. This policy outlines our cancellation and refund procedures.
          </p>
        </section>

        <section>
          <h2>Cancellation Policy</h2>
          <p>
            Clients can cancel their physiotherapy appointments with a minimum notice of 24 hours before the scheduled appointment. Cancellations made within 24 hours of the appointment may be subject to a cancellation fee.
          </p>
          <ul>
            <li>For cancellations made 24 hours or more in advance: Full refund of appointment fees</li>
            <li>For cancellations made less than 24 hours before: 50% of the appointment fee may be retained</li>
            <li>For no-shows (without prior cancellation): Full appointment fee will be charged</li>
          </ul>
        </section>

        <section>
          <h2>Refund Policy</h2>
          <p>
            Refunds for cancelled appointments will be processed within 7-10 business days to the original payment method used during booking.
          </p>
          <p>
            For package memberships or pre-paid sessions, refunds will be calculated based on the number of sessions remaining and processed accordingly.
          </p>
        </section>

        <section>
          <h2>Payment Package Cancellations</h2>
          <p>
            If you have purchased a package of physiotherapy sessions:
          </p>
          <ul>
            <li>Packages can be cancelled within 30 days of purchase for a full refund</li>
            <li>After 30 days, refunds will be calculated for unused sessions minus an administrative fee</li>
            <li>Packages are non-transferable</li>
          </ul>
        </section>

        <section>
          <h2>Special Circumstances</h2>
          <p>
            If cancellations occur due to medical emergencies or unforeseen circumstances, please contact us directly. We will consider each case individually and work towards a satisfactory resolution.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            For any cancellation or refund-related queries, please contact us at:
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
