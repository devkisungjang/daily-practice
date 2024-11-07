import React, { useEffect } from "react";
import "../../styles/Responsive.scss";
// import classNames from "classnames";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import useStore from "../../zustand/animal";

const menuItems = [
  { type: "강아지", name: "포메리나안" },
  { type: "고양이", name: "샴" },
  { type: "관상어", name: "구피" },
  { type: "새", name: "앵무새" },
];

const Header = () => {
  // zustand 스토어
  const { dropDownView, setDropDownView }: any = useStore();

  const onClickViewHandler = () => {
    setDropDownView(!dropDownView);
  };

  return (
    <header>
      <div className="inner-left">LOGO</div>
      <div className="inner-right">
        <div className="menu-container">
          <div className="menu-items">
            {menuItems.map((v, i) => (
              <p key={i}>{v.type}</p>
            ))}
          </div>
        </div>
        <div className="hamberger-icon">
          <GiHamburgerMenu onClick={onClickViewHandler} />
        </div>
        {!dropDownView && (
          <div className="dropDown-wrapper">
            {menuItems.map((v, i) => (
              <p key={i}>
                {i + 1}. {v.type}
              </p>
            ))}
            <MdClose className="close-button" onClick={onClickViewHandler} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
