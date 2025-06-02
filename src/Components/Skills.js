import React from 'react';
import { FaPython, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { 
  SiVercel, 
  SiMysql, 
  SiPowerbi, 
  SiJupyter, 
  SiPostgresql, 
  SiTableau, 
  SiMicrosoftoffice, 
  SiAmazonaws 
} from "react-icons/si";

import "./about.css";

const Skills = ({ skill }) => {
  return (
    <>
      <div className="skill-box">
        <div className="skillset">
          <abbr title="NextJS">
            <SiVercel className="techLogo" />
            <h3 className="techContent">Vercel</h3>
          </abbr>

          <abbr title="NextJS">
            <SiMysql className="techLogo" />
            <h3 className="techContent">MYSQL</h3>
          </abbr>

          <abbr title="NextJS">
            <SiPowerbi className="techLogo" />
            <h3 className="techContent">PowerBI</h3>
          </abbr>

          <abbr title="NextJS">
            <SiJupyter className="techLogo" />
            <h3 className="techContent">Jupyter</h3>
          </abbr>

          <abbr title="NextJS">
            <SiPostgresql className="techLogo" />
            <h3 className="techContent">PostgreSQL</h3>
          </abbr>

          <abbr title="NextJS">
            <SiTableau className="techLogo" />
            <h3 className="techContent">NextJS</h3>
          </abbr>

          <abbr title="NextJS">
            <SiMicrosoftoffice className="techLogo" />
            <h3 className="techContent">MS Office</h3>
          </abbr>

          <abbr title="NextJS">
            <SiAmazonaws className="techLogo" />
            <h3 className="techContent">AWS</h3>
          </abbr>
        </div>
      </div>
    </>
  );
};

export default Skills;
