import { useState } from "react";
import classNames from "classnames";
import modalStyle from "../modal/Modal.module.scss";
import Button from "../button/Button";

interface ModalTextType {
  title: string;
  contents: string;
}

const Modal = ({ title, contents }: ModalTextType) => {
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
              <p>{contents}</p>
            </div>
            <Button variant="destructive" onClick={modalCloseHandler}>
              닫기
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
