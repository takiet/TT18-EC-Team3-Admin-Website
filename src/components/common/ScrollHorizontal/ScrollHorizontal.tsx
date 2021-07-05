import React, { forwardRef } from 'react';
import './ScrollHorizontal.scss';

export const ScrollHorizontal = forwardRef<any, any>(
  (
    {
      children,
      onScroll,
      margin,
      padding,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
    },
    ref,
  ) => {
    return (
      <div
        className="scroll-horizontal"
        onScroll={onScroll}
        ref={ref}
        style={{
          margin,
          padding,
          marginBottom,
          marginLeft,
          marginRight,
          marginTop,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
        }}
      >
        {children}
      </div>
    );
  },
);
