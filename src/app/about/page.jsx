import Image from "next/image";
import "./about.css"

const About = () => {
  return (
    <div className="about">
      <div className="img-container" fill>
        <Image src="/about.png" alt="about image"/>
      </div>
    </div>
  );
};

export default About;
