import React from "react";

// const checkIcon = (
//   <svg
//     width="16"
//     height="13"
//     viewBox="0 0 16 13"
//     className="fill-current"
//     fill="text-primary"
//   >
//     <path
//       fill="#ffffff"
//       d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"
//     />
//   </svg>
// );
{
  /* <span className="mr-4 flex h-7 w-7 items-center justify-center rounded-md bg-opacity-80 bg-[#1c2154] text-primary">
  {checkIcon}
</span> */
}

const List = ({ text }) => (
  <p className="px-3 py-1 bg-transparent poppins-light link text-sm rounded-lg shadow-sm border border-gray-300 hover:text-black hover:bg-white hover:shadow-md transition duration-300 ease-in-out">
    {text}
  </p>
);
export default List;
