import React from "react";
import { useTheme } from "@/components/context/ThemeContext/ThemeContext"; // Update the import path as needed
import NavBar from "./NavBar";
const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`header-layout ${
        theme === "dark" ? "bg-custom-color-mixed-20" : "bg-custom-color-mixed-10"
      }`}
    >
     <NavBar/>
      {/* <Navigation /> */}
      {children}
    </div>
  );
};

export default Layout;
