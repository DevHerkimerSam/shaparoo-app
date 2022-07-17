import React from "react";
import { ShaparooImageUI } from "./shaparoo-types";

const ShaparooSquare = (props: ShaparooImageUI) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="80" height="80" fill={props.color} />
    </svg>
  );
};

const ShaparooTriangle = (props: ShaparooImageUI) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50 10, 90 90, 10 90" fill={props.color} />
    </svg>
  );
};

const ShaparooCircle = (props: ShaparooImageUI) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill={props.color} />
    </svg>
  );
};

export const ShaparooImage = (props: ShaparooImageUI) => {
  let shaparooImage = <p>Placeholder</p>;

  switch (props.form) {
    case "circle":
      shaparooImage = <ShaparooCircle form={props.form} color={props.color} />;
      break;
    case "square":
      shaparooImage = <ShaparooSquare form={props.form} color={props.color} />;
      break;
    case "triangle":
      shaparooImage = (
        <ShaparooTriangle form={props.form} color={props.color} />
      );
      break;
    default:
      console.log(props.form);
  }
  return shaparooImage;
};
