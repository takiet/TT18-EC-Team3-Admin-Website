import React from "react";
import "./Label.scss";
export const Label: React.FC<ILabel> = ({ icon, title }) => {
  return (
    <div className="label">
      <div className="label__title">{title && title}</div>
    </div>
  );
};
