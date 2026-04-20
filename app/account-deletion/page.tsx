"use client";

import React, { useState } from 'react';
import { ShieldAlert, Phone, KeyRound, AlertTriangle, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export default function AccountDeletionPage() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    
    setLoading(true);
    // Mock API call to send OTP
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return;

    setLoading(true);
    // Mock API call to verify OTP and delete account
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            <ShieldAlert size={48} className={styles.headerIcon} />
          </div>
          <h1 className={styles.title}>Account Data Deletion</h1>
          <p className={styles.subtitle}>
            Manage your personal data securely. Deleting your account will permanently remove all associated data.
          </p>
        </div>

        {step === 1 && (
          <form className={styles.formSection} onSubmit={handleSendOtp}>
            <div className={styles.warningBox}>
              <AlertTriangle size={24} className={styles.warningIcon} />
              <p>
                <strong>Warning:</strong> This action cannot be undone. All your appointments, records, and personal information will be permanently deleted.
              </p>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone">Enter Registered Phone Number</label>
              <div className={styles.inputWrapper}>
                <Phone className={styles.inputIcon} size={20} />
                <input
                  type="tel"
                  id="phone"
                  placeholder="e.g. +91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
            </div>

            <button type="submit" className={styles.primaryButton} disabled={loading || !phone}>
              {loading ? <span className={styles.loader}></span> : 'Send Verification OTP'}
            </button>
          </form>
        )}

        {step === 2 && (
          <form className={styles.formSection} onSubmit={handleVerifyOtp}>
            <div className={styles.infoBox}>
              <p>An OTP has been sent to <strong>{phone}</strong>. Please enter it below to confirm account deletion.</p>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="otp">Enter OTP</label>
              <div className={styles.inputWrapper}>
                <KeyRound className={styles.inputIcon} size={20} />
                <input
                  type="text"
                  id="otp"
                  placeholder="6-digit code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className={styles.inputField}
                  maxLength={6}
                  required
                />
              </div>
            </div>

            <button type="submit" className={styles.dangerButton} disabled={loading || !otp}>
              {loading ? <span className={styles.loader}></span> : 'Verify & Permanently Delete Account'}
            </button>
            <button 
              type="button" 
              className={styles.textButton} 
              onClick={() => setStep(1)}
              disabled={loading}
            >
              Cancel & Go Back
            </button>
          </form>
        )}

        {step === 3 && (
          <div className={styles.successSection}>
            <div className={styles.successIconContainer}>
              <CheckCircle2 size={64} className={styles.successIcon} />
            </div>
            <h2>Account Deletion Requested</h2>
            <p>
              Your account and all associated data have been queued for deletion. You will be logged out automatically.
              The complete removal process may take up to 24-48 hours.
            </p>
            <button 
              type="button" 
              className={styles.secondaryButton} 
              onClick={() => window.location.href = '/'}
            >
              Return Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
