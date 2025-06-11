import React from "react";

export const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
  >
    {children}
  </button>
);
