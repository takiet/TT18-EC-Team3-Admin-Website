import React from 'react';
import './OnlyHeaderLayout.scss';

export const OnlyHeaderLayout: React.FC<IOnlyHeaderLayout> = ({
  children,
  header,
  backgroundColor,
}) => {
  return (
    <div className={backgroundColor ? 'only-header only-header__withBackground' : 'only-header'}>
      <div className="only-header__header">
        <div className="only-header__container">{header}</div>
      </div>
      <div className={'only-header__center'}>{children}</div>
    </div>
  );
};
