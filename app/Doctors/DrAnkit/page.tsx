import React from 'react'
import DrAnkitViewMore from './DrAnkitViewMore'

export const metadata = {
    title: "Dr. Ankit Telang",
    description: "Consultant Physiotherapist",
    openGraph: {
        images: ["/DrAnkit.png"],
    },
    icons: {
        icon: '/DrAnkit.png',
    },
};

const page = () => {
    return (
        <DrAnkitViewMore />
    )
}

export default page
