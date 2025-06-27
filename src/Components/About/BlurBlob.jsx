import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size }) => {
  // Destruction Position and Size

  const { top, left } = position;
  const { width, height } = size;
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50% , -50%)",
      }}
    >
      <div
        className="w-full h-full rounded-full blur-3xl opacity-60 animate-blob 
                   bg-gradient-to-r from-[#6FFFE9] via-[#5BC0BE] to-[#8245EC] 
                   mix-blend-lighten shadow-[0_0_80px_30px_rgba(111,255,233,0.3)]"
      ></div>
    </div>
  );
};
// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlurBlob;
