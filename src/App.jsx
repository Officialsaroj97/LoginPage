import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import WhiteBg from "./components/WhiteBg";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [page, setPage] = useState("landing");
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });

    if (page === "landing") {
      const timer1 = setTimeout(() => {
        setTransitioning(true);
        const timer2 = setTimeout(() => {
          setPage("sides");
          setTransitioning(false);
        }, 2000);
        return () => clearTimeout(timer2);
      }, 1000);

      return () => clearTimeout(timer1);
      s;
    }

    if (page === "sides" && transitioning) {
      const timer3 = setTimeout(() => {
        setPage("whitebg");
      }, 3000);
      return () => clearTimeout(timer3);
    }

    if (page === "whitebg") {
      const timer4 = setTimeout(() => {
        setTransitioning(true);
        const timer5 = setTimeout(() => {
          setPage("landing");
          setTransitioning(false);
        }, 1000);
        return () => clearTimeout(timer1);
      }, 1000);

      return () => clearTimeout(timer1);
    }
  }, [page, transitioning]);

  const handleFormSubmit = () => {
    setTransitioning(true);
  };

  return (
    <div className={`App ${page} ${transitioning ? "transitioning" : ""}`}>
      {page === "landing" && <LandingPage />}
      {page === "sides" && (
        <div className={`sides-container ${transitioning ? "slide-out" : ""}`}>
          <LeftSide onSubmit={handleFormSubmit} />
          <RightSide />
        </div>
      )}
      {page === "whitebg" && <WhiteBg />}
    </div>
  );
}

export default App;
