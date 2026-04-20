import React from "react";
import Link from "next/link"; // Use Next.js Link for navigation
import Image from "next/image"; // Use next/image for optimized images
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
} from "lucide-react";
import "./Footer.css";
import insta from '../../assets/My_Instagram_QR_Code.svg'

const Footer = () => {
  return (
    <footer className="physio-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">About Physiophy</h3>
          <p className="footer-text">
            We are dedicated to providing expert physiotherapy care with a
            personalized approach to help you achieve optimal health and
            wellness.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages/About">About Us</Link>
            </li>
            <li>
              <Link href="/pages/Services">Services</Link>
            </li>
            <li>
              <Link href="/pages/Bookappoitment">Book Now</Link>
            </li>
            <li>
              <Link href="/pages/Contact">Contact</Link>
            </li>
            <li>
              <Link href="/tanvi-shah-best-physiotherapist-nagpur">Dr. Tanvi Shah - Best Physiotherapist</Link>
            </li>
            <li>
              <Link href="/best-physiotherapy-center-nagpur">Best Physiotherapy Center</Link>
            </li>
            <li>
              <Link href="/top-physiotherapist-nagpur">Top Physiotherapist</Link>
            </li>
            <li>
              <Link href="/sports-physiotherapy-nagpur">Sports Physiotherapy</Link>
            </li>
            <li>
              <Link href="/back-pain-physiotherapy-nagpur">Back Pain Treatment</Link>
            </li>
            <li>
              <Link href="/home-visit-physiotherapy-nagpur">Home Visit Physiotherapy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <MapPin className="footer-icon location" />
              Ground Floor, Hyatt Medicare, Besides Get Wel Hospital, Dhantoli,
              Nagpur - 440012.
            </li>
            <li>
              <MapPin className="footer-icon location" />
              Pl no 83, beside Bhavan’s school Gate no 1, Shrikrishna Nagar,
              Kharbi, Nagpur, Maharashtra 440024
            </li>
            <li>
              <MapPin className="footer-icon phone" />
              +919970127614 +917020427614
            </li>
            <li>
              <MapPin className="footer-icon email" />
              contact@physiophy.com
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Scan & Follow</h3>
          <div className="qr-codes">
            <div className="qr-code">
              <Image
                src={insta}
                alt="Instagram QR Code"
                width={100} // Adjust based on your design
                height={100} // Adjust based on your design
              />
              {/* <span>Instagram</span> */}
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-linksss">
            <a
              href="https://www.facebook.com/PhysioPhyPhysiotherapyCentre/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={28} color="white" />
            </a>
            <a
              href="https://www.youtube.com/@PhysioPhy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={28} color="white" />
            </a>
            <a
              href="https://www.instagram.com/physio.phy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={28} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/physio-phy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={28} color="white" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Policies</h3>
          <ul className="footer-links">
            <li>
              <Link href="/cancellation-refund">Cancellation & Refund</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/shipping-policy">Shipping Policy</Link>
            </li>
            <li>
              <Link href="/account-deletion">Account Data Deletion</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Physiophy. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="/components/Privacypolicy">Privacy Policy</Link>
          <Link href="/components/TermsAndConditions">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;