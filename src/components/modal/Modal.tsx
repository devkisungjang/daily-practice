import { useState, useEffect, ReactNode } from "react";
import classNames from "classnames";
import modalStyle from "../modal/Modal.module.scss";
import Button from "../button/Button";

interface ModalTextType {
  title: string;
  children: ReactNode;
}

const Modal = ({ title, children }: ModalTextType) => {
  const modalClass = classNames(
    modalStyle.modalContainer,
    modalStyle.modalBackdrop,
    modalStyle.modalContents,
    modalStyle.desc
  );

  const [isOpen, setIsOpen] = useState(false);

  const modalOpenHandler = () => {
    setIsOpen(true);
  };

  const modalCloseHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className={modalClass}>
      <Button size="small" onClick={modalOpenHandler}>
        열기
      </Button>
      {isOpen && (
        <div className={modalStyle.modalBackdrop} onClick={modalOpenHandler}>
          {/* event 버블링을 막는 메서드 */}
          <div
            className={modalStyle.modalContents}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={modalStyle.desc}>
              <h3>{title}</h3>
              {children}
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                variant="destructive"
                onClick={modalCloseHandler}
                style={{ marginTop: "10px" }}
              >
                닫기
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
