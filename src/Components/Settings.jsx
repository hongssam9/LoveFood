import { Link } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  return (
    <div>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="headerButton" id="backButton">
            &#9665;
          </button>
        </Link>
      </nav>
      <div className="setting-container">
        <Link to="/Login" style={{ textDecoration: "none" }}>
          Login
        </Link>

        <footer>Version 0.0.1</footer>
      </div>
    </div>
  );
};

export default Settings;
