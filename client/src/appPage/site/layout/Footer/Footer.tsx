import React from "react";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={scss.footer}></div>
      </div>
    </footer>
  );
};

export default Footer;
