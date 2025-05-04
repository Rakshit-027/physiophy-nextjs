import React from 'react'
import DrSagarViewmore from './DrSagarViewmore'
export const metadata = {
  title: "Dr. Sagar Sawlani",
  description: "BPTH | Consultant Physiotherapist",
  openGraph: {
    images: ["https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/sagar-crop.png"],
  },
  icons: {
    icon: 'https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/sagar-crop.png', // Path to your favicon in the public folder
  },
};

const page = () => {
  return (
   <DrSagarViewmore/>
  )
}

export default page
