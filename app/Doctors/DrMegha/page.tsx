import React from 'react'
import DrMeghalanViewMore from './DrMeghalanViewMore'
export const metadata = {
  title: "Dr. Megha Lanjewar",
  description: "MPTH Neuro | Consultant Neurophysiotherapist",
  openGraph: {
    images: ["https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/meghna-croped.png"],
  },
  icons: {
    icon: 'https://zlmsmdibvnnhxthvdhhf.supabase.co/storage/v1/object/public/ScrollSlider/docs/meghna-croped.png', // Path to your favicon in the public folder
  },
};

const page = () => {
  return (
   <DrMeghalanViewMore/>
  )
}

export default page
