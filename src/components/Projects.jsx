import React from "react";
import Project from "./Project";
import { projectsData } from "../data/projects";

function Projects() {
  return (
    <section id="project" className="bg-slate-100 py-10">
      <p className="text-center text-3xl font-bold text-primary py-3">
        My Recent Works
      </p>
      <div className="container">
        {projectsData &&
          projectsData.map((data, index) => {
            if (index % 2 === 1) {
              return <Project key={data.id} {...data} reverse={true} />;
            } else {
              return <Project key={data.id} {...data} />;
            }
          })}
      </div>
    </section>
  );
}

export default Projects;
