import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skill from "./Components/Skills/Skill";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Works/Work";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import BlurBlob from "./Components/About/BlurBlob";
import Leetcode from "./Components/Leetcode/Leetcode";
// import Leetcode from "./Components/Leetcode/Leetcode";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="bg-[#0B132B]">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Show SplashScreen first */}
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <div className="relative pt-20">
          <Navbar />
          <About />
          <Skill />
          <Experience />
          <Work />
          <Education />
          <Leetcode/>
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
