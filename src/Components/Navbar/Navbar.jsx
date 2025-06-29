import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuitems = [
    {
      id: "about",
      label: "About",
    },
    {
      id: "skills",
      label: "Skill",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "work",
      label: "Projects",
    },
    {
      id: "education",
      label: "Education",
    },
  ];

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="top"
      className={`fixed top-0 w-full z-50 transition duration-300 px-4 sm:px-6 md:px-[7vw] lg:px-[10vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-base sm:text-lg font-semibold cursor-pointer"
          onClick={() => {
            setActiveSection("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">&nbsp;Prasun</span>
          <span className="text-white">&nbsp;Prabhat&nbsp;</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 font-bold font-mono text-aqua-500">
          {menuitems.map((item) => (
            <li key={item.id} className="relative cursor-pointer group">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative transition duration-200 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:scale-x-0 after:bg-[#6FFFE9] after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100 ${
                  activeSection === item.id
                    ? "text-[#6FFFE9] after:scale-x-100"
                    : "text-aqua-500"
                }`}
              >
                {item.label}

                {/* Optional Glowing Dot */}
                <span
                  className={`absolute bottom-[0.9rem] -right-[0.5rem] w-2 h-2 rounded-full transition-all duration-300
            ${
              activeSection === item.id
                ? "bg-[#13d6f0] shadow-[0_0_10px_3px_#6FFFE9]"
                : "bg-gray-500 opacity-0 group-hover:opacity-0"
            }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons & Hire Me Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/PrasunPrabhat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#6FFFE9]"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/prasun-prabhat-859838230/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#6FFFE9]"
          >
            <FaLinkedin size={30} />
          </a>
          <button
            onClick={() => {
              setActiveSection("contact");
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="ml-4 bg-[#6FFFE9] hover:bg-[#4ccac4] text-black px-4 py-2 rounded-xl font-semibold text-sm transition duration-300"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-aqua-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-aqua-500 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] bg-[#0B132B] bg-opacity-[2.6] backdrop-blur-md z-40 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-aqua-500 font-mono font-bold text-base">
            {menuitems.map((item) => (
              <li
                key={item.id}
                className="relative flex items-center justify-center"
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`cursor-pointer hover:text-white ${
                    activeSection === item.id ? "text-[#6FFFE9]" : ""
                  } relative`}
                >
                  {item.label}
                  {/* Glowing Dot */}
                  <span
                    className={`absolute -bottom-2 -right-3 w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-[#13d6f0] shadow-[0_0_10px_3px_#6FFFE9]"
                        : "bg-gray-500 opacity-0 group-hover:opacity-50"
                    }`}
                  ></span>
                </button>
              </li>
            ))}

            {/* Social icons (mobile) */}
            <div className="flex flex-col items-center space-y-4 pt-2">
              <div className="flex space-x-4">
                <a
                  href="https://github.com/PrasunPrabhat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#6FFFE9]"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prasun-prabhat-859838230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#6FFFE9]"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>

              {/* Hire Me Button (Mobile) */}
              <button
                onClick={() => {
                  setActiveSection("contact");
                  setIsOpen(false);
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-[#6FFFE9] hover:bg-[#4ccac4] text-black px-6 py-2 rounded-xl font-semibold text-sm transition duration-300"
              >
                Hire Me
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
