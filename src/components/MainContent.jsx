// react
import PropTypes from "prop-types";

// components
import AboutContainer from "../components/AboutContainer";
import TechnologiesContainer from "../components/TechnologiesContainer";
import ProjectsContainer from "../components/ProjectsContainer";

// css
import "../styles/components/MainContent.scss";

function MainContent(props) {
  return (<div id="main_content">
    <AboutContainer />
    <TechnologiesContainer />
    <ProjectsContainer />
  </div>);
}

MainContent.propTypes = {
  
};

export default MainContent;
