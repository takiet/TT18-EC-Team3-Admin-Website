import React, { Fragment, useEffect, useRef } from "react";
import "./Modal.scss";

export const Modal: React.FC<IModal> = ({
  children,
  isShow,
  className,
  setIsShow,
  backgroundColorOverlay,
  classNameContainer,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isShow) {
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsShow(); // eslint-disable-next-line
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
    // eslint-disable-next-line
  }, [ref, isShow]);

  return (
    <Fragment>
      {isShow && (
        <div
          className={`modal ${classNameContainer}`}
          style={{ backgroundColor: backgroundColorOverlay }}
        >
          <div className={`modal__container ${className}`} ref={ref}>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
};
