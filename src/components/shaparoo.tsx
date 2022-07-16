// Import deps
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// Import components
import { ShaparooForm } from "./shaparoo-form";

// Import styles
import "./../styles/shaparoo.css";

export const ShaparooNew = () => {
  return (
    <>
      <h2>New Shaparoo</h2>
      <ShaparooForm />
    </>
  );
};

export const ShaparooShow = () => {
  return (
    <>
      <h2>Shaparoo Show</h2>
    </>
  );
};

export const ShaparooEdit = () => {
  return (
    <>
      <h2>Shaparoo Edit</h2>
      <ShaparooForm />
    </>
  );
};

// Create Shaparoo component
export const Shaparoo = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
