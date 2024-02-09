import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/section/About";
import Hero from "./components/section/Hero";
import Movie from "./components/section/Movie";
import Rsvp from "./components/section/Rsvp";
import Teaser from "./components/section/Teaser";
import Theme from "./components/section/Theme";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Teaser />
      <Theme />
      <Movie />
      <Rsvp />
      <Footer />
    </>
  );
}
