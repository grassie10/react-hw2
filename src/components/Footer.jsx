import React from "react";
import notes from "../notes";

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {(new Date().getFullYear())}</p>
    </footer>
  );
}

export default Footer;