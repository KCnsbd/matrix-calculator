import "../styles/MemberCards.css";
import { FaGithub, FaFacebook } from "react-icons/fa"; // import icons

function MemberCards({ member }) {
  return (
    <div className="member-cards-container">
      <div className="member-pfp">
        <img src={member.pfp} alt={member.name} />
      </div>

      <div className="member-info">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>

      <div className="member-links">
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub size={32} />
        </a>
        <a
          href={member.fb}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaFacebook size={32} />
        </a>
      </div>
    </div>
  );
}

export default MemberCards;
