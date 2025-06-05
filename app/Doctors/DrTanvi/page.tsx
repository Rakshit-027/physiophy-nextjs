import React from 'react'
import DrTanviViewMore from './DrTanviViewMore';

export const metadata = {
  title: "Dr. Tanvi Geet Katariya",
  description: "MPTH Neuro | Founder, PhysioPhy",
  openGraph: {
    images: ["https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(1).png"],
  },
  icons: {
    icon: 'https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(1).png', // Path to your favicon in the public folder
  },
};

const page = () => {
  return (
   <DrTanviViewMore/>
  )
}

export default page
