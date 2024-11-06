import classNames from "classnames";
import badgeStyle from "../badge/Badge.module.scss";

// 타입 지정
interface BadgeType {
  backgroundColor?: "blue" | "green" | "orange" | "pink";
  borderRadius?: "small" | "medium" | "large" | "xlarge";
  children: string;
}

const Badge = ({
  backgroundColor = "orange",
  children,
  borderRadius = "medium",
}: BadgeType) => {
  const badgeClass = classNames(badgeStyle.badge, [
    badgeStyle[backgroundColor],
    badgeStyle[borderRadius],
  ]);

  // 기본스타일
  const badgeDefaultStyle = {
    backgroundColor,
    borderRadius,
  };

  return (
    <div className="badge-container">
      <div className={badgeClass} style={badgeDefaultStyle}>
        {children}
      </div>
    </div>
  );
};

export default Badge;
