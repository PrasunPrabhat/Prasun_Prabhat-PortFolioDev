import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold text-justify">
          As a self-motivated learner and a recent Computer Science graduate, I
          am <span className="font-bold text-[#6FFFE9]">Actively Looking for my first opportunity</span>  in the industry. This
          section showcases the practical experience I’ve gained through
          personal projects, where I’ve applied and strengthened my frontend
          development skills while continuously exploring new technologies.
        </p>
      </div>

      {/* Experience Card */}
      <div className="bg-white/10 border border-white/30 backdrop-blur-xl rounded-2xl shadow-lg p-8 sm:p-12 text-white space-y-6 transition-all duration-300 hover:shadow-[0_4px_20px_0_rgba(130,69,236,0.35)]">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#6FFFE9] underline decoration-[#6FFFE9]/50">
          Frontend Developer | React.js | JavaScript | HTML | CSS
        </h3>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4">
          My Self,{" "}
          <span className="text-white font-semibold">Prasun Prabhat</span>, a
          recent Computer Science graduate from Chandigarh University (B.E.,
          2025), actively Looking for a full-time opportunity as a{" "}
          <span className="text-[#6FFFE9] font-semibold">
            Frontend Developer
          </span>
          .
        </p>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
          I specialize in building responsive and performant web applications
          using modern technologies like{" "}
          <span className=" font-semibold text-[#6FFFE9]">
            React.js, JavaScript, Redux, Context API, HTML5, CSS3, and Tailwind
            CSS
          </span>
          . My learning is self-driven and project-based, which has strengthened
          my ability to integrate APIs, manage state efficiently, and implement
          scalable UI components.
        </p>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
          As a passionate and driven frontend developer, I am actively seeking
          opportunities to contribute to impactful Software Development
          Products.
        </p>

        {/* Optional Button or Call to Action */}
        <div className="pt-4">
          <a
            href="https://drive.google.com/file/d/1p-32e3lhQmdBIWiMvLLfPa-PZ3bPYOkE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#6FFFE9] text-black font-semibold py-2 px-6 rounded-full hover:scale-105 transition-transform duration-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
