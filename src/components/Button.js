import React from "react";

const Button = ({ children }) => {
  return (
    <button className="text-sm bg-blue-900 text-white border border-blue-900 py-2 px-5 rounded-sm hover:text-blue-900 hover:bg-white smooth_transition">
      {children}
    </button>
  );
};

export default Button;
