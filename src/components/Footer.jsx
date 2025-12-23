import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <Link href="#">Pravna obaveštenja</Link>
        <Link href="#">Politika privatnosti</Link>
        <Link href="#">Kolačići</Link>
        <Link href="#">Opšti podaci o kompaniji</Link>
        <Link href="#">© CarAuto-Srbija</Link>
      </footer>
    </>
  );
};

export default Footer;
