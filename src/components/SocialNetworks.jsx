// react
import PropTypes from "prop-types";

// css
import "../styles/components/SocialNetworks.scss";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function SocialNetworks(props) {
  const social = [
    {
      name: "linkedin",
      icon: <FaLinkedin />,
      url: "linkedin.com/in/vitor-mendesco/",
    },
    {
      name: "github",
      icon: <FaGithub />,
      url: "github.com/VitorMendesco",
    },
    {
      name: "instagram",
      icon: <FaInstagram />,
      url: "instagram.com/_mendesco/",
    },
  ];

  return (
    <section id="social_networks">
      {social.map((sn) => (
        <a
          href={sn.url}
          id={sn.name}
          key={sn.name}
          className="social_btn"
        >
          {sn.icon}
        </a>
      ))}
    </section>
  );
}

SocialNetworks.propTypes = {};

export default SocialNetworks;
