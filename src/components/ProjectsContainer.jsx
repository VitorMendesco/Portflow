// react
import PropTypes from "prop-types";

// css
import "../styles/components/ProjectsContainer.scss";

function ProjectsContainer(props) {
  return (
    <section className="projects_container">
      <h2>Projects</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        cupiditate iure dolore neque vitae adipisci eos eum. Sed soluta dolor
        maiores earum! Ipsa, labore alias sit fugiat temporibus accusantium
        quisquam.
      </p>
      <a href="#" className="btn">
        see
      </a>
    </section>
  );
}

ProjectsContainer.propTypes = {};

export default ProjectsContainer;
