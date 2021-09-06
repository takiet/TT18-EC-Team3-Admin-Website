import React, { FC } from "react";
import { GrClose } from "react-icons/gr";
import "./ModalConfirm.scss";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";

export const ModalConfirm: FC<IModalConfirm> = ({
  isShow,
  onClick,
  onClickClose,
  className,
  message,
}) => {
  return (
    <Modal
      isShow={isShow}
      setIsShow={onClickClose}
      className={`modal-confirm ${className ? className : ""}`}
      backgroundColorOverlay="rgba(255, 255, 255, 0.7)"
    >
      <div className="modal-confirm__cover">
        <div className="modal-confirm__close">
          <GrClose onClick={onClickClose} style={{ cursor: "pointer" }} />
        </div>
        <div className="modal-confirm__message">{message}</div>
        <div className="modal-confirm__action">
          <Button isWhite marginRight={8} onClick={onClickClose}>
            CANCEL
          </Button>
          <Button marginLeft={8} onClick={onClick}>
            OK
          </Button>
        </div>
      </div>
    </Modal>
  );
};
