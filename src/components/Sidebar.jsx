// react
import PropTypes from "prop-types";

// css
import "../styles/components/sidebar.sass";
import avatar from '../img/me.png';


function Sidebar(props) {
  return (
    <aside id='sidebar'>
      <img src="../img/me.png" alt="me" />
      <p className="title">Front-end Developer</p>
      <p>social</p>
      <p>contact</p>
    </aside>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
