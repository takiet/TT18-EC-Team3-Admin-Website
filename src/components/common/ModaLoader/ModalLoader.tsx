import React, { FC } from "react";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Modal/Modal";

export const ModalLoader: FC<ILoaderModal> = ({ isShow }) => {
  return (
    <Modal isShow={isShow}>
      <Loader />
    </Modal>
  );
};
