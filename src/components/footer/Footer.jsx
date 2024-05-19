import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">Logo</div>
      <div className="footer-text">
        &copy;{new Date().getFullYear()} | All rights reserved | Terms Of
        Service | Privacy.
      </div>
    </div>
  );
};

export default Footer;
