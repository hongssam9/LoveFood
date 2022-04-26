import React, { Link } from "react-router-dom";
import "./Info.css";

const Info = () => {
  return (
    <div className="info">
        <nav>
          <Link to="/Menu" style={{textDecoration:"none"}}>
            <button className="headerButton" id="infoBackButton">
              &#9665;
            </button>
          </Link>
        </nav>
      <h1>Welcome!</h1>

    
      <h3>
      Hungry and lonely? Welcome to Lood, a fun and interactive app that helps people with similar food cravings to meet, chat, or hook up!
      </h3>
      <p>
        All you have to do it either press Yah or Nah to the food pictures
        shown. Eventually, you will find someone with a similar taste as you and
        match, which will bring you two together to contact each other and talk!
        Enjoy!
      </p>
      <nav>
        <Link to="/Terms">Terms of Use</Link>
      </nav>
      <footer><p>app design / logo &copy; 2021 Lonely Food, LLC</p></footer>
    </div>
  );
};

export default Info;
