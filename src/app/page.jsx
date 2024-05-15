import Image from "next/image";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <h2>Creative Thoughts Agency</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nihil vel quam, laborum deserunt unde natus officiis saepe culpa error.
        </p>
        <div className="home-btns">
          <button>Learn More</button>
          <button>Contact Us</button>
        </div>
        <div className="brands">
          <Image src="/brands.png" alt="brands" fill className="brands-img" />
        </div>
      </div>
      <div className="img-container">
        <Image src="/hero.gif" alt="hero" fill className="hero-img" />
      </div>
    </div>
  );
};

export default Home;
