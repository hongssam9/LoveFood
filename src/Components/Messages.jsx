import { Link } from "react-router-dom";
import "./Messages.css";

const Messages = (props) => {
  return (
    <div className="container-messages">
        <nav>
          <Link to="/Menu" style={{textDecoration:"none"}}>
            <button className="headerButton" id="mesBackButton">
              &#9665;
            </button>
          </Link>
        </nav>
          <h1>404</h1>
          <div id = "magnifying-glass"></div>
          <h3>Page Not Found</h3> 
          <p>This part of the App has not been completed yet. <br/>
          For more information, please contact <br/>
          Samuel Hong <br/>
          s248h176@gmail.com
          </p>
    </div>
  );
};

export default Messages;
