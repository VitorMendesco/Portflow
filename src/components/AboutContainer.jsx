// react
import PropTypes from "prop-types";

// css
import "../styles/components/AboutContainer.scss";

function AboutContainer(props) {
  return (
    <section className="about_container">
      <h2>About</h2>
      <p>
        I am a tech lover, especially when it comes to integrating your areas,
        not limited to programming, but mixing different tools, such as
        activities/people management, video/image editing, website development,
        work methodologies and solution architecture. Always focusing on the
        problem and the people by my side.
      </p>
    </section>
  );
}

AboutContainer.propTypes = {};

export default AboutContainer;
