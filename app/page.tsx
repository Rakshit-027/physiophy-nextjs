import HomeClient from "./HomeClient"; // Adjust path as needed

export async function generateMetadata() {
  return {
    title: "Physiophy | Home",
    description: "Welcome to Physiophy, your trusted partner in physiotherapy and rehabilitation.",
  };
}

export default function Home() {
  return <HomeClient />;
}