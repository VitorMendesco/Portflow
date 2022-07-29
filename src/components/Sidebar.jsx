// react
import PropTypes from "prop-types";

// components
import SocialNetworks from "./SocialNetworks";
import InfoContainer from "./InfoContainer";

// css
import "../styles/components/Sidebar.scss";
import avatar from '../img/me.png';


function Sidebar(props) {
  return (
    <aside id='sidebar'>
      <img src={avatar} alt="me" />
      <p className="title">Front-end Developer</p>
      <SocialNetworks />
      <InfoContainer />
      <a href="" className="btn">
        Curriculum
      </a>
    </aside>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
