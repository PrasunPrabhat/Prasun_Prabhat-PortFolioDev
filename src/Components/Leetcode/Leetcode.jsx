import React, { useEffect, useState } from "react";
import { FaMedal, FaRankingStar, FaRegLightbulb } from "react-icons/fa6";
import { GiLaurelCrown } from "react-icons/gi";
import { PiMedalBold } from "react-icons/pi";
import { TbBrandLeetcode } from "react-icons/tb";

const Leetcode = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);

  useEffect(() => {
    const fetchLeetcodeStats = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/prasun_prabhat" // Replace with your actual LeetCode username
        );
        const data = await response.json();
        setLeetcodeData(data);
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };

    fetchLeetcodeStats();
  }, []);

  return (
    <section
      id="leetcode"
      className="text-white py-20 px-[12vw] font-sans relative z-10"
    >
      {/* LeetCode Logo Header */}
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="flex items-center gap-3">
          <TbBrandLeetcode size={42} className="text-[#FFA116]" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            LeetCode Achievements
          </h2>
        </div>
        <p className="text-center text-gray-400 mt-2 text-sm sm:text-base">
          Practicing Data Structures & Algorithms to build problem-solving
          mindset.
        </p>
      </div>

      {/* Stats Card */}
      {leetcodeData ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center bg-[#1e293b]/60 backdrop-blur-md p-10 rounded-3xl border border-[#334155] shadow-lg shadow-[#0f172a]/50">
          {/* Total Solved */}
          <div className="flex flex-col items-center">
            <PiMedalBold size={28} className="text-yellow-400 mb-2" />
            <p className="text-xl font-semibold text-white">Total Solved</p>
            <span className="text-3xl font-bold text-[#6FFFE9]">
              {leetcodeData.totalSolved}
            </span>
          </div>

          {/* Easy */}
          <div className="flex flex-col items-center">
            <FaRegLightbulb size={28} className="text-green-400 mb-2" />
            <p className="text-lg font-semibold text-white">Easy</p>
            <span className="text-xl font-bold text-green-300">
              {leetcodeData.easySolved} / {leetcodeData.totalEasy}
            </span>
          </div>

          {/* Medium */}
          <div className="flex flex-col items-center">
            <FaMedal size={28} className="text-yellow-400 mb-2" />
            <p className="text-lg font-semibold text-white">Medium</p>
            <span className="text-xl font-bold text-yellow-300">
              {leetcodeData.mediumSolved} / {leetcodeData.totalMedium}
            </span>
          </div>

          {/* Hard */}
          <div className="flex flex-col items-center">
            <GiLaurelCrown size={28} className="text-red-400 mb-2" />
            <p className="text-lg font-semibold text-white">Hard</p>
            <span className="text-xl font-bold text-red-300">
              {leetcodeData.hardSolved} / {leetcodeData.totalHard}
            </span>
          </div>

          {/* Ranking */}
          <div className="flex flex-col items-center">
            <FaRankingStar size={28} className="text-[#6FFFE9] mb-2" />
            <p className="text-lg font-semibold text-white">Global Ranking</p>
            <span className="text-xl font-bold text-[#6FFFE9]">
              #{leetcodeData.ranking}
            </span>
          </div>

          {/* Contribution */}
          <div className="flex flex-col items-center">
            <TbBrandLeetcode size={28} className="text-orange-400 mb-2" />
            <p className="text-lg font-semibold text-white">
              Contribution Points
            </p>
            <span className="text-xl font-bold text-orange-300">
              {leetcodeData.contributionPoints}
            </span>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400">Fetching stats...</p>
      )}
    </section>
  );
};

export default Leetcode;