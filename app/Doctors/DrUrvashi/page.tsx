import React from 'react'
import DrUrvashiViewMore from './DrUrvashiViewMore';


export const metadata = {
  title: "Dr. Urvashi Gahukar",
  description: "BPTH | Consultant Orthopedic Physiotherapist, Shri Krishnanagar Branch",
  openGraph: {
    images: ["https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(2).png"],
  },
  icons: {
    icon: 'https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(2).png', // Path to your favicon in the public folder
  },
};

const page = () => {
  return (
   <DrUrvashiViewMore/>
  )
}

export default page
