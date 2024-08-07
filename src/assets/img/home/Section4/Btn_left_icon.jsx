import React from "react";

const Btn_left_icon = ({ color = "#B34B1E" }) => {
  return (
    <div>
      <svg
        width="29"
        height="14"
        viewBox="0 0 29 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.940433 7.62466C0.353189 7.4174 0.353188 6.58691 0.940435 6.37964L16.0169 1.05853C16.4464 0.906939 16.8968 1.22557 16.8968 1.68104L16.8968 12.3233C16.8968 12.7787 16.4464 13.0974 16.0169 12.9458L0.940433 7.62466Z"
          fill={color}
          stroke={color}
        />
      </svg>
    </div>
  );
};

export default Btn_left_icon;
