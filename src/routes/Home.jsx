import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

import HomeImg1 from "../assets/12.jpg";
// import HomeImg2 from "../assets/13.jpg";
// import HomeImg3 from "../assets/14.jpg";

const slides = [
  { img: HomeImg1, title: "Your Journey Your Story", text: "Choose your Favourite Destination.", buttonText: "Travel Plan", url: "/" },
  { img: HomeImg1, title: "Explore the Mountains", text: "Adventure awaits you.", buttonText: "Explore", url: "/" },
  { img: HomeImg1, title: "Relax by the Beach", text: "Find your calm.", buttonText: "Book Now", url: "/" },
];

function Home() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" slides={slides} btnClass="show" />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;