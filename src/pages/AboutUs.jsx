import Footer from "../components/Footer";
import Header from "../components/Header";
import MemberCards from "../components/MemberCards";
import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <>
      <Header />

      <div className="page-container">

        <div className="lesson-content-section">
          <h2>About This Website</h2>
          <p>
            Welcome to the Matrix Calculator! Our platform was created to make
            matrix computation simple, intuitive, and accessible. Whether you're
            learning the basics or tackling advanced topics, this website offers
            tools that help you compute and visualize matrix operations with ease.
          </p>
        </div>

        <div className="about-team-container">
          <h2>About The Team</h2>
          <p>
            Our team is composed of dedicated individuals passionate about
            mathematics, design, and modern web development. By combining our
            skills and creativity, we aim to build educational tools that make
            complex concepts easier to understand and more enjoyable to learn.
          </p>

          <div className="member-cards-wrapper">
            <MemberCards member={{name: "Keana Clarisse", role: "Frontend Developer", pfp: "/assets/keana.jpg", github: "https://github.com/KCnsbd", fb: "#"}} />
            <MemberCards member={{name: "Louie Garcia", role: "Frontend Developer", pfp: "/assets/louie.jpg", github: "#", fb: "#"}} />
            <MemberCards member={{name: "Voltaire Punzalan", role: "Documentation", pfp: "/assets/keana.jpg", github: "https://github.com/IpreferV", fb: "#"}} />
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
