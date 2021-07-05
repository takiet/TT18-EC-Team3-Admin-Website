import React from "react";
import "./Banner.scss";
import { Button } from "../common";

export const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>Solving problems is easier than ever!</h1>
        <p>Learning subjects you need with top tutors on our platform.</p>
        <div className="banner-button">
          <Button width={150} height={50} fontSize={20}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};
