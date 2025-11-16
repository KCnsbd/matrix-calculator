import "../styles/MemberCards.css";

function MemberCards({member}) {
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
                <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={member.fb} target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
        </div>
    );
}

export default MemberCards;