// react
import PropTypes from "prop-types";

// css
import "../styles/components/TechnologiesContainer.scss";
import {
  DiReact,
  DiJsBadge,
  DiSass,
  DiCss3,
  DiHtml5,
  DiJava,
  DiMysql,
  DiPhotoshop,
} from "react-icons/di";

function TechnologiesContainer(props) {
  const techs = [
    { id: "react", name: "ReactJS", icon: <DiReact /> },
    { id: "javascript", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "java", name: "Java", icon: <DiJava /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "photoshop", name: "Photoshop", icon: <DiPhotoshop /> },
  ];
  return (
    <section className="technologies_container">
      <h2>Technologies</h2>
      <div className="technologies_container__grid">
        {techs.map((tech) => (
          <div className="tech_card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tech_info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

TechnologiesContainer.propTypes = {};

export default TechnologiesContainer;
