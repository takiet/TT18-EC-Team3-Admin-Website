import React from "react";
import { Banner, TutorsList, Introduction } from "../../components";

export const Homepage: React.FC = () => {
  return (
    <div>
      <Banner />
      <TutorsList />
      <Introduction />
    </div>
  );
};
