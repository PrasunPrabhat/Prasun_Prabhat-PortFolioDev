import React, { useEffect, useState } from "react";
import Dev from "../../assets/Dev4.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [neonVisible, setNeonVisible] = useState(false);

  useEffect(() => {
    const neonTimer = setTimeout(() => {
      setNeonVisible(true); // Start neon animation
    }, 1800); // Show neon 700ms before splash exit
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 2500);
    return () => {
      clearTimeout(timer);
      clearTimeout(neonTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-[#0B132B] flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Hanging GitHub Icon */}
      <div className="absolute top-2 left-3 sm:left-6 flex flex-col items-center animate-swing">
        <div className="w-[2px] h-[30vh] sm:h-[50vh] bg-gray-400"></div>
        <a
          href="https://github.com/PrasunPrabhat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#6FFFE9] transition duration-300"
        >
          <FaGithub className="w-16 h-16 sm:w-[100px] sm:h-[100px]" />
        </a>
      </div>

      {/* Hanging LinkedIn Icon */}
      <div className="absolute top-2 right-3 sm:right-11 flex flex-col items-center animate-swing-delay">
        <div className="w-[2px] h-[45vh] sm:h-[80vh] bg-gray-400"></div>
        <a
          href="https://www.linkedin.com/in/prasun-prabhat-859838230/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#6FFFE9] transition duration-300"
        >
          <FaLinkedin className="w-16 h-16 sm:w-[100px] sm:h-[100px]" />
        </a>
      </div>

      {/* Neon Glow Flash */}
      {neonVisible && (
        <div className="absolute w-0 h-0 rounded-full neon-flash"></div>
      )}

      {/* Logo */}
      <img
        src={Dev}
        alt="Prasun Logo"
        className="h-28 sm:h-36 md:h-44 animate-stomp"
      />

      {/* Name */}
      <div className="flex mt-4 text-lg sm:text-xl md:text-2xl font-mono font-bold scrapbook-text text-center">
        <span className="scrap-piece text-[#8245ec]">&lt;</span>
        <span className="scrap-piece text-white">&nbsp;Prasun</span>
        <span className="scrap-piece text-white">&nbsp;Prabhat&nbsp;</span>
        <span className="scrap-piece text-[#8245ec]">/</span>
        <span className="scrap-piece text-[#8245ec]">&gt;</span>
      </div>
    </div>
  );
};

export default SplashScreen;
