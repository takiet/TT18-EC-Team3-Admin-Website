import "./Introduction.scss";

export const Introduction = () => {
  return (
    <div className="introduction">
      <div className="introduction-users">
        <img src="./images/users.png" alt="users icon" className="icon" />
        <div className="introduction-users__info">
          <span>500+</span> users
        </div>
      </div>
      <div className="introduction-slogan">
        <img
          src="./images/laptop_chromebook.png"
          alt="slogan icon"
          className="icon"
        />
        <div className="introduction-slogan__info">
          Easy <span>booking</span>, easy <span>learning</span>
        </div>
      </div>
      <div className="introduction-tutors">
        <img
          src="./images/tutors icon.png"
          alt="tutors icon"
          className="icon"
        />
        <div className="introduction-tutors__info">
          <span>100+</span> tutors
        </div>
      </div>
    </div>
  );
};
