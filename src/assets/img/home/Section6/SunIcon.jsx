import React from "react";

const SunIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#FFC122" />
        <g clipPath="url(#clip0_5374_3557)">
          <path
            d="M11.9993 7.33464V6.16797M11.9993 16.668V17.8346M8.74097 8.74293L7.91602 7.91797M15.3407 15.3427L16.1657 16.1676M7.33268 12.0013H6.16602M16.666 12.0013H17.8327M15.341 8.74293L16.1659 7.91797M8.74126 15.3427L7.9163 16.1676M11.9993 14.918C10.3885 14.918 9.08268 13.6121 9.08268 12.0013C9.08268 10.3905 10.3885 9.08464 11.9993 9.08464C13.6102 9.08464 14.916 10.3905 14.916 12.0013C14.916 13.6121 13.6102 14.918 11.9993 14.918Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_5374_3557">
            <rect
              width="14"
              height="14"
              fill="white"
              transform="translate(5 5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default SunIcon;
