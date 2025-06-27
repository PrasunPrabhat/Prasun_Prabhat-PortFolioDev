import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <div className="flex items-center space-x-2 border-2 border-gray-700 rounded-3xl py-2 px-4 text-center w-fit bg-transparent">
      <img
        src={skill.logo}
        alt={`${skill.name} logo`}
        className="w-6 h-6 sm:w-8 sm:h-8"
      />
      <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
    </div>
  );
};

export default SkillItem;
