import Footer from "../components/Footer";
import Header from "../components/Header";
import MemberCards from "../components/MemberCards";
import keanaImg from "../assets/keana.jpg";
import louieImg from "../assets/louie.jpg";
import voltImg from "../assets/volt.jpg";
import { FaExpand, FaCalculator, FaSmile } from "react-icons/fa";
import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <>
      <Header />

      <div className="page-container">

        <div className="Heading-section">
          <h1>About This Website</h1>
          <p>
            This website was created by Computer Science students from FAITH Colleges as their final requirement for Linear Algebra. It provides an interactive platform for performing and visualizing matrix operations, making the study of matrices more accessible and engaging.
          </p>
        </div>

        <div className="features-wrapper">
        <div className="features-container">
          <div className="feature-icon">
            <FaExpand size={36} />
          </div>
          <h5>Dynamic Sizing</h5>
          <p>Customize the size of your matrices to fit your specific needs, from small 2x2 matrices to larger ones.</p>
        </div>

        <div className="features-container">
          <div className="feature-icon">
            <FaCalculator size={36} />
          </div>
          <h5>Multiple Operations</h5>
          <p>Perform a variety of matrix operations including addition, subtraction, multiplication, and division seamlessly.</p>
        </div>

        <div className="features-container">
          <div className="feature-icon">
            <FaSmile size={36} />
          </div>
          <h5>User-Friendly Interface</h5>
          <p>Enjoy an intuitive and easy-to-navigate interface designed to enhance your user experience.</p>
        </div>
        </div>


        <div className="about-team-container">
          <h1>About The Team</h1>
          <p>"Meet the talented individuals behind the project, each contributing their unique skills and expertise to bring it to life."</p>

          <div className="member-cards-wrapper">
            <MemberCards member={{name: "Keana Clarisse", role: "Frontend Developer", pfp: keanaImg, github: "https://github.com/KCnsbd", fb: "https://github.com/GarciaL-777"}} />
            <MemberCards member={{name: "Louie Garcia", role: "Frontend Developer", pfp: louieImg, github: "https://github.com/GarciaL-777", fb: "https://www.facebook.com/lx.louie"}} />
            <MemberCards member={{name: "Voltaire Punzalan", role: "Documentation", pfp: voltImg, github: "https://github.com/IpreferV", fb: "https://www.facebook.com/voltairejan.punzalan"}} />
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
