"use client";

import React from "react";

/**
 * Button Component
 *
 * Represents a button element with a click event handler.
 * Displays a "Submit" button with a gradient background.
 * Alerts "Hello World!" when clicked.
 */
const Button = (props: any) => {
  return (
    <button
      className="text-xl text-white rounded-full px-7 py-3 bg-gradient-to-r from-[#2298dc] to-[#7a64a7] self-center"
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button; // Exporting Button component
