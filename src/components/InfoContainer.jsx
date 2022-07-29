// react
import PropTypes from "prop-types";

// css
import "../styles/components/InfoContainer.scss";
import { AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

function InfoContainer(props) {
  const contacts = [
    {
      name: "E-mail",
      content: "vitormendesco.js@gmail.com",
      icon: <AiOutlineMail id="email" />,
    },
    {
      name: "Location",
      content: "São Paulo, Brazil",
      icon: <AiFillEnvironment id="location" />,
    },
  ];
  return (
      <section id="information">
        {/* <AiOutlineMail /> */}
      {contacts.map((contact) => (
        <div className="information__card" key={contact.name}>
          {contact.icon}
          <div>
            <h3>{contact.name}</h3>
            <p>{contact.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

InfoContainer.propTypes = {};

export default InfoContainer;
