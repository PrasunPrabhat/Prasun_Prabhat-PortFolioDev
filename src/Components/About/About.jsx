import React from "react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/Prasun_Prabhat.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="py-6 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      id="about"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-[62%] text-center md:text-left mt-8 md:mt-0"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Prasun Prabhat
          </h2>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#34c1cb] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Front-End Developer",
                2000,
                "ReactJS Developer",
                2000,
                "API Integrator",
                2000,
                "Mobile-Responsive Designer",
                2000,
                "Web Developer in Progress",
                2000,
                "Learning Backend with Node.js",
                2000,
                "Learning Full-Stack Development",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              style={{
                display: "inline-block",
                color: "#5BC0BE",
                fontWeight: "bold",
                textDecoration: "underline",
                textDecorationColor: "#5BC0BE",
              }}
            />
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-[#a9caf2] mb-10 mt-8 leading-relaxed text-justify">
            I'm a{" "}
            <span className="text-[#6FFFE9] font-medium">
              Frontend Developer
            </span>{" "}
            skilled in{" "}
            <span className="text-[#6FFFE9] font-medium">React.js</span>,{" "}
            <span className="text-[#6FFFE9] font-medium">JavaScript</span>,{" "}
            <span className="text-[#6FFFE9] font-medium">HTML5</span>,{" "}
            <span className="text-[#6FFFE9] font-medium">CSS3</span>,{" "}
            <span className="text-[#6FFFE9] font-medium">Tailwind CSS</span>,
            and{" "}
            <span className="text-[#6FFFE9] font-medium">Redux Toolkit</span>. I
            transform UI/UX designs into responsive, scalable, and accessible
            web experiences.
            <br />
            <br />
            I'm currently expanding my skill set by{" "}
            <span className="text-[#6FFFE9] font-medium">
              learning Backend with Node.js
            </span>{" "}
            and exploring{" "}
            <span className="text-[#6FFFE9] font-medium">
              Full-Stack Development
            </span>
            . I'm committed to becoming a well-rounded{" "}
            <span className="text-[#6FFFE9] font-medium">
              Web Developer in Progress
            </span>
            .
            <br />
            <br />
            Passionate about clean code, performance optimization, and modern
            web standards, I strive to build seamless, impactful digital
            solutions.
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1MDGqPItSas6zrptd0TAh7uwS5-U3_rTs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-600 py-3 px-8 rounded-full text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #6FFFE9, #6FFFE9)",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-[31%] flex justify-center md:justify-end"
        >
          <Tilt
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-[24rem] md:h-[24rem] border-4 border-dark rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Prasun Prabhat"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(58,80,107,0.5)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
