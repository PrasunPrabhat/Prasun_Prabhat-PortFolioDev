import React from "react";
import Tilt from "react-parallax-tilt";
import SkillItem from "./SkillItem";

const SkillCategory = ({ category }) => {
  return (
    <div className="bg-gray-900 backdrop-blur-md px-4 sm:px-10 py-8 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
        {category.title}
      </h3>

      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
          {category.skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </Tilt>
    </div>
  );
};

export default SkillCategory;
