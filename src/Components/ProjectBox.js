import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const projects = {
    "Hotel Booking Analysis": {
      desc: "EDA on hotel bookings to analyze cancellations, guest behavior, and trends using Python and visualization tools.",
      github: "https://github.com/RaineJacob/Hotel_Booking",
    },
    "Delivery Delay Analysis": {
      desc: "Logistics data analysis to uncover delivery delay patterns and optimize supply chains with Python and SQL.",
      github: "https://github.com/RaineJacob/Delivery_delay_Analysis",
    },
    "Marketing Analysis": {
      desc: "Analyzed marketing campaign data to assess ROI, segment customers, and evaluate performance using Power BI.",
      github: "https://github.com/RaineJacob/Marketing_Analysis",
    },
    "Hr Analytics": {
      desc: "Exploratory analysis of employee attrition and satisfaction to drive data-based HR decisions.",
      github: "https://github.com/RaineJacob/Hr-analytics",
    },
  };

  const project = projects[projectName];

  if (!project) {
    return <div>Invalid project name: {projectName}</div>;
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <small>{project.desc}</small>

        <br />
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#000000",
                color: "#ffffff",
                marginTop: "10px",
                padding: "10px 16px",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                cursor: "pointer",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#1a1a1a";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#000000";
                e.currentTarget.style.boxShadow =
                  "0 2px 5px rgba(0, 0, 0, 0.2)";
              }}
            >
              <FaGithub size={18} />
              View on GitHub
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
