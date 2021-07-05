import React from 'react';
import './Avatar.scss';

export const Avatar: React.FC<IAvatar> = ({
  image,
  className,
  height,
  width,
  borderRadius,
  marginRight,
  borderWidth,
  borderColor,
  marginBottom,
  flex,
}) => {
  return (
    <>
      <div
        className={`avatar ${className ? className : ''}`}
        style={{
          backgroundImage: `url(${image})`,
          height,
          width,
          borderRadius,
          marginRight,
          borderColor,
          borderWidth,
          marginBottom,
          flex,
        }}
      />
    </>
  );
};
