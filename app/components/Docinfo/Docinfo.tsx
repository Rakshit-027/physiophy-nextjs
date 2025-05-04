import React from "react";
import Link from "next/link"; // Use Next.js Link for navigation
import Image from "next/image"; // Use next/image for optimized images
import "./Docinfo.css";

// Define interface for doctor data
interface Doctor {
  id: number;
  name: string;
  roleone: string;
  roletwo: string;
  rolethree: string;
  image: string;
  specialties: string[];
  slug: string;
}

const Docinfo = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "DR. VAGISH KATARIYA",
      roleone: "DIRECTOR",
      roletwo: "CONSULTANT PEDIATRIAN",
      rolethree: "PHYSIOPHY",
      image: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(4).png",
      specialties: ["Dermatology", "Cosmetic Surgery", "Skin Care"],
      slug: "DrVagesh",
    },
    {
      id: 2,
      name: "DR. GEET KATARIYA",
      roleone: "CHAIRMAN",
      roletwo:"CONSULTANT RADIOLOGIST",
      rolethree:"PHYSIOPHY",
      image: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(3).png",
      specialties: ["Dermatology", "Hair Treatment", "Laser Therapy"],
      slug: "DrGeet",
    },
    {
      id: 3,
      name: "DR. TANVI KATARIYA",
      roleone: "FOUNDER",
      roletwo:"SENIOR NEURO PHYSIOTHERAPIST",
      rolethree:"PHYSIOPY",
      image: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(1).png",
      specialties: ["Trichology", "Hair Transplant", "Dermatology"],
      slug: "DrTanvi",
    },
    {
      id: 4,
      name: "DR. URVASHI GAHUKAR",
      roleone: "BRANCH INCHARGE",
      roletwo:"ORTHO CONSULTANT PHYSIOTHERAPIST",
      rolethree:"PHYSIOPHY",
      image: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(2).png",
      specialties: ["Trichology", "Hair Transplant", "Dermatology"],
      slug: "DrUrvashi",
    },
    {
      id: 5,
      name: "DR. MEGHA LANJEWAR",
      roleone: "CONSULTANT",
      roletwo:"NEUROPHYSIOTHERAPIST",
      rolethree:"PHYSIOPHY",
      image: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/meghna-croped.png",
      specialties: [""],
      slug: "DrMegha",
    },
    {
      id: 6,
      name: "DR. SAGAR SAWLANI",
      roleone: "CONSULTANT",
      roletwo:"PHYSIOTHERAPIST",
      rolethree:"PHYSIOPHY",
      image: "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/sagar-crop.png",
      specialties: [""],
      slug: "DrSagar",
    },
  ];

  return (
    <>
      <div className="docinfo-container">
        <div className="docinfo-header">
          <span className="docinfo-subtitle-accent">Our Team</span>
          <h2 className="docinfo-title">MEET OUR EXPERTS</h2>
          <div className="docinfo-decorative-line">
            <span className="docinfo-line-left"></span>
            <span className="docinfo-diamond"></span>
            <span className="docinfo-line-right"></span>
          </div>
        </div>

        <div className="docinfo-cards-container">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="docinfo-card card">
              <div className="blob" />
              <div className="bg" />
              <div className="card-content">
                <div className="docinfo-image-wrapper">
                  <div className="docinfo-image-container">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={300} // Adjust based on your design
                      height={300} // Adjust based on your design
                      className="docinfo-image"
                    />
                    <div className="docinfo-image-overlay"></div>
                  </div>
                </div>
                <div className="docinfo-content">
                  <h4 className="docinfo-doctor-name">{doctor.name}</h4>
                  <p className="docinfo-doctor-role-1">{doctor.roleone}</p>
                  <p className="docinfo-doctor-role-2">{doctor.roletwo}</p>
                  <p className="docinfo-doctor-role">{doctor.rolethree}</p>
                  <Link href={`/Doctors/${doctor.slug}`} className="docinfo-view-more">
                    <span>VIEW MORE</span>
                    <svg className="docinfo-arrow" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

  


export default Docinfo;