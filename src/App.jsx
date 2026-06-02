import { useCallback, useState } from "react";
import About from "./components/About";
import Cast from "./components/Cast";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IntroAnimation from "./components/IntroAnimation";
import KeyMessage from "./components/KeyMessage";
import MediaSection from "./components/MediaSection";
import Navigation from "./components/Navigation";
import Podcast from "./components/Podcast";
import PromotionalVideo from "./components/PromotionalVideo";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}

      <Navigation visible={introComplete} />

      <main id="main">
        <Hero />
        <About />
        <PromotionalVideo />
        <MediaSection
          id="trailer"
          title="Official Trailer"
          videoLabel="Official Trailer"
          description="A glimpse into the realities of academic pressure."
          vimeoId="1197600491"
        />
        <MediaSection
          id="film"
          title="Short Film"
          videoLabel="Full Short Film"
          description="A visual story about performance, expectation, and self-worth."
          vimeoId="1197599576"
          altBg
        />
        <Podcast />
        <KeyMessage />
        <Cast />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
