import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

export default function App() {
  return <div className="w-5/6 m-auto">
  <Navbar/>
  <HeroSection/>
  <Testimonials/>
  </div>;
}
