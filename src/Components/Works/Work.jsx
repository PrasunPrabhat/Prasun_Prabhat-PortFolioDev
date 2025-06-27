import React, { useEffect, useState } from "react";
import { projects } from "../../Constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    // Scroll to top so modal is always visible
    window.scrollTo({ behavior: "smooth" });
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      // Lock scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="work"
        className="py-16 sm:py-20 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] font-sans relative z-10"
      >
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            PROJECTS
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#5BC0BE] mx-auto mt-3 sm:mt-4"></div>
          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg font-semibold px-2 sm:px-0">
            As a self-motivated learner and recent graduate, this section
            showcases the projects I've built to apply and grow my frontend
            development skills in real-world scenarios.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="border border-white bg-[#0B132B] backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(130,69,236,0.5)] overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-xl"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4 pt-2 text-sm sm:text-base line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal OUTSIDE clipped section */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B132B] bg-opacity-20 px-2 sm:px-4 py-6"
          role="dialog"
          aria-label="Project Details Modal"
          onClick={(e) => {
            // Close only if clicked on the backdrop, not the modal content
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div className="bg-[#0B132B] rounded-xl shadow-2xl w-full max-w-[39rem] overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-2xl sm:text-3xl font-bold hover:text-purple-500 transition duration-200"
                aria-label="Close Modal"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full sm:w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-xs sm:text-sm md:text-base text-justify">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-sm sm:text-base font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-sm sm:text-base font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Work;
