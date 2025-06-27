import React from "react";
import { education } from "../../Constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 sm:px-[10vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white hidden sm:block"></div>

        {/* Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative mb-20 flex flex-col sm:flex-row items-center ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-14 h-14 border-4 border-[#0B132B] rounded-full bg-gray-500 justify-center items-center">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Box */}
            <div
              className={`relative z-20 w-full sm:w-[46%] bg-[#1C2541] border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-[0rem]" : "sm:mr-[0rem]"
              }`}
            >
              <div className="flex items-center space-x-4 sm:space-x-6 mb-4">
                {/* Logo */}
                <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#5BC0BE] font-extrabold">
                Grade: {edu.grade}
              </p>

              <p className="mt-2 text-gray-400 text-justify">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
