// react
import PropTypes from "prop-types";

// css
import "../styles/components/ProjectsContainer.scss";

function ProjectsContainer(props) {
  const projects = [
    {
      id: "arkade",
      name: "Arkade",
      gif: "./src/img/arkade.gif",
      url: "https://github.com/VitorMendesco/Arkade",
    },
    {
      id: "netflix",
      name: "Netflix",
      gif: "./src/img/netflix.gif",
      url: "https://github.com/VitorMendesco/Netflix",
    },
    {
      id: "costs",
      name: "Costs",
      gif: "./src/img/costs.gif",
      url: "https://github.com/VitorMendesco/Costs",
    },
  ];

  return (
    <section className="projects_container">
      <h2>Projects</h2>
      <div className="projects_container__grid">
        {projects.map((proj) => (
          <div className="tech_card" id={proj.id} key={proj.id}>
            <a href={proj.url} target="_blank">
              <img src={proj.gif} alt={proj.id} />
            </a>
          </div>
        ))}
        <div className="tech_card proj">
          <div>
            <a
              href="https://github.com/VitorMendesco?tab=repositories"
              target="_blank"
              className="btn"
            >
              all projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

ProjectsContainer.propTypes = {};

export default ProjectsContainer;
