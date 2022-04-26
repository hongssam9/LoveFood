import { Link } from "react-router-dom";
import "./Account.css";
const Account = () => {
  return (
    <div>
      <nav>
        <Link to="/Menu" style={{ textDecoration: "none" }}>
          <button className="headerButton" id="accountBackButton">
            &#9665;
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Account;
