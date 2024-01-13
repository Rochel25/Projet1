import React from "react";
import "../Styles/achievement.css";

export const Achievements = () => {
  return (
    <div className="achievements">
      <div className="section-heading">
        <div className="section-title-wrapper">
          <p className="section-title">
            <span className="text-wrapper">Helping a local </span>
            <span className="span">business reinvent itself</span>
          </p>
        </div>
        <p className="description">We reached here with our hard work and dedication</p>
      </div>
      <div className="counts">
        <div className="row">
          <div className="element">
            <img className="icon" alt="Icon" src="image.svg" />
            <div className="details">
              <div className="number">2,245,341</div>
              <div className="label">Members</div>
            </div>
          </div>
          <div className="element">
            <img className="icon" alt="Icon" src="icon.svg" />
            <div className="details">
              <div className="number">46,328</div>
              <div className="label">Clubs</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="element">
            <img className="icon" alt="Icon" src="icon-2.svg" />
            <div className="details">
              <div className="number">828,867</div>
              <div className="label">Event Bookings</div>
            </div>
          </div>
          <div className="element">
            <img className="icon" alt="Icon" src="icon-3.svg" />
            <div className="details">
              <div className="number">1,926,436</div>
              <div className="label">Payments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};