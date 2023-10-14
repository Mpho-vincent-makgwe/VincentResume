import React from "react";
import { useTheme } from "@/components/context/ThemeContext/ThemeContext"; // Update the import path as needed
import NavBar from "./NavBar";
const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`header-layout ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
     <NavBar/>
      {/* <Navigation /> */}
      {children}
    </div>
  );
};

export default Layout;
