import Docinfo from "./Docinfo"; // Adjust path as needed

export async function generateMetadata() {
  return {
    title: "Physiophy",
    description: "Meet the expert physiotherapy team at Physiophy.",
  };
}

export default function DoctorsPage() {
  return <Docinfo />;
}