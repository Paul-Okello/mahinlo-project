import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <div className="landing">
        <div className="landing__header">
          <h1>Wellness, delivered</h1>
        </div>
        <div className="landing__info">
          <p>
            Your one-stop solution to sort all your home needs ranging from
            beauty and wellness to cleaning and repairs, quickly, professionally
            and conveniently.
          </p>
        </div>
        <button className="landing__button">Book Now</button>
      </div>
    </>
  );
}

export default LandingPage;
