import React from 'react'
import DrGeetViewMore from './DrGeetViewMore'
// Define metadata with favicon
export const metadata = {
  title: "Dr. Geet Katariya",
  description: "MBBS, MD Radiology | Chairperson, PhysioPhy",
  openGraph: {
    images: [
      "https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(3).png",
    ],
  },
  icons: {
    icon: 'https://physiophy.com/_next/image?url=https%3A%2F%2Fzlmsmdibvnnhxthvdhhf.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2FScrollSlider%2Fdocs%2Fcropped_image%2520(3).png&w=384&q=75', // Path to your favicon in the public folder
  },
};


const page = () => {
  return (
   <DrGeetViewMore/>
  )
}

export default page
