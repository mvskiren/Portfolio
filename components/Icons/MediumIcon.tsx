import React from "react";

export default function MediumIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      viewBox="0 0 50 50"
      {...props}
      className={props.className}
    >
      <path d="M45 4H5a1 1 0 0 0-1 1v40a1 1 0 0 0 1 1h40a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-5 9.5-1.821 2.197a.603.603 0 0 0-.179.428V32.75c0 .16.064.314.179.428L40 35.546V36H30v-.454l2.821-2.368A.603.603 0 0 0 33 32.75V17.879L24.848 36H23.304L15 18.375v13.108c0 .22.076.433.215.605L18 35.546V36h-8v-.454l2.783-3.438A.964.964 0 0 0 13 31.5V16.388a.6.6 0 0 0-.142-.388L11 13.5V13h7.097l7.624 16.183L33.002 13H40v.5z" />
    </svg>
  );
}
