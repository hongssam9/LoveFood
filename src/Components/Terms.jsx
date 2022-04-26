import { Link } from "react-router-dom";
import './Terms.css';
const Terms = () => {
  return (
    <div className = "Terms">
       <nav>
        <Link to="/Info" style={{ textDecoration: "none" }}>
          <button className="headerButton" id="termsBackButton">
            &#9665;
          </button>
        </Link>
      </nav>
      <h1>Terms of Use</h1>
      <p>
        Welcome to Lood, operated by Lonely Food, LLC ("us", "we", the "Company"
        or "Lood")
      </p>
      <h2>(1) Acceptance of Terms of Use Agreement</h2>
      <p>
        By creating a Lood account or by using any Lood service, whether through
        a mobile device, mobile application or computer (colletively, the
        "Service") you agree to be bound by (i) these Terms of Use, (ii) our
        Privacy Policy, Cookie Policy, Arbitration Procedures, Safety Tips, and
        Community Guidelines, each of which is incorporated by reference into
        this Agreement, and (iii) any terms disclosed to you if you purchase of
        have purchased additional features, products or services we offer on the
        Service (collectively, this "Agreement"). If you do not accept and agree
        to be bound by all of the terms of this Agreement, you should not use
        the Service.
      </p>
      <h2>(2) Eligibility</h2>
      <p>
        You must be at least 18 years of age to create an account on Lood and
        use the Service. By creating an account and using the service, you
        represent and warrant that:{" "}
      </p>
      <ul>
        <li>You can form a binding contract with Lood</li>
        <li>
          you are not a person who is barred from using the Service under the
          laws of the United States or any other applicable jurisdiction (for
          example, you do not appear on the U.S. Treasury Department's list of
          Specially Designated Nationals or face any similar prohibition)
        </li>
        <li>
          You will comply with this Agreement and all applicable local, state,
          national, and international laws, rules and regulations
        </li>
        <li>
          You have never been convicted of or pled no contest to a felony, a sex
          crime, or any crime involving violence, and that you are not required
          to register as a sex offender with any state, federal, or local sex
          offender registry
        </li>
      </ul>
    </div>
  );
};

export default Terms;
