import React from 'react'
import DrVageshViewMore from './DrVageshViewMore';


export const metadata = {
  title: "Dr. Vagesh Katariya",
  description: "Pediatrician | Director, PhysioPhy",
  openGraph: {
    images: ["https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(4).png"],
  },
  icons: {
    icon: 'https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/cropped_image%20(4).png', // Path to your favicon in the public folder
  },
};

const page = () => {
  return (
   <DrVageshViewMore/>
  )
}

export default page
