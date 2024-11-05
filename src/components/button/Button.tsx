import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

// 데이터 타입 셋팅
interface ButtonProps {
  // 타입
  type?: "button" | "submit" | "reset" | undefined;

  // 종류
  variant?: "primary" | "secondary" | "outline" | "destructive";

  // 비활성화
  disabled?: boolean;

  // 사이즈
  size?: "small" | "medium" | "large";

  // 색, 배경색
  color?: string;
  bgColor?: string;

  // 사이즈
  margin?: string;
  width?: string;

  // 스타일
  style?: any;

  // 버튼 이름
  children: React.ReactNode;

  // 클릭 이벤트 함수
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  variant = "primary",
  disabled = false,
  size = "small",
  bgColor,
  color,
  margin,
  width,
  children,
  onClick,
  ...props
}) => {
  // 스타일 지정
  const buttonClass = classNames(styles.button, styles[variant], styles[size], {
    [styles.disabled]: disabled,
  });

  // 기본 스타일
  const btnStyle = {
    background: bgColor,
    color,
    margin,
    width,
  };

  return (
    <button
      type={type}
      className={buttonClass}
      style={btnStyle}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
