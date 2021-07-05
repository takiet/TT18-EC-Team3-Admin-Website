import React from "react";
import "./Footer.scss";

export const Footer: React.FC<IHeader> = ({}) => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-about">
          <h2>About us</h2>
          <ul>
            <li>
              <a href="#">Introduction</a>
            </li>
            <li>
              <a href="#">Tutors</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>
        <div className="footer-join">
          <h2>Join with us</h2>
          <ul>
            <li>
              <a href="#">Our tutors</a>
            </li>
            <li>
              <a href="#">Become a tutor</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact us</h2>
          <div className="footer-contact__socials">
            <ul>
              <div className="socials-icon">
                <img src="./images/facebook.png" alt="facebook icon" />
              </div>
              <div className="socials-icon">
                <img src="./images/instagram.png" alt="instagram icon" />
              </div>
              <div className="socials-icon">
                <img src="./images/twitter.png" alt="twitter icon" />
              </div>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright">©copyright 2021. all rights reserved.</div>
    </div>
  );
};
