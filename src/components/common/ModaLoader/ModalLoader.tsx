import React, { FC, Fragment } from "react";
import { Loader } from "../Loader/Loader";

export const ModalLoader: FC<ILoaderModal> = ({ isShow }) => {
  return (
    <Fragment>
      {isShow && (
        <div className={`modal`}>
          <div className={`modal__container `}>
            <Loader />
          </div>
        </div>
      )}
    </Fragment>
  );
};
