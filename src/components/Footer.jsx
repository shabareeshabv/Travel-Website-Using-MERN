import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
             <a href="/"> <h1>Travel-To-World</h1></a>
          <p>Explore your favorite destinations.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>About</h4>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
        <div>
          <h4>Support</h4>
         
          <a href="/Contact">Contact Us</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="https://github.com/shabareeshabv?tab=repositories">GitHub</a>
          <a href="/">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
