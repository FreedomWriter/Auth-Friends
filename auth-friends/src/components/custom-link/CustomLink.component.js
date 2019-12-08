import React from "react";

const CustomButton = ({ children, ...props }) => {
  console.log(`CustomButton.js: props: `, props);

  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  );
};

export default CustomButton;
