import React from "react";

const CustomBadge = ({
  children,
  color = "#cfcfcf",
  textColor = "#5a6268",
  className = "",
  ...props
}) => {
  return (
    <span
      className={`py-1 px-1 ${className}`}
      style={{
        backgroundColor: color,
        color: "#5a6268",
        fontSize: "12px",
        display: "inline-block",
        borderRadius: "5px",
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default CustomBadge;
