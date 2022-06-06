import React, { useState } from "react";
import Link from "next/link";
import logo from '../public/LOGO-HN-SOLARI.png'
import Image from "./Image";
const Nav = () => {
  return (
    <div className='navBox'>
      <div className="logo">
      <Link href="/"><Image src={logo} width={60} height={35} alt="logo" /></Link>
        
      </div>
      <nav>
        <Link href="/estudio">ESTUDIO</Link>
        <Link href="/mantenimiento">MANTENIMIENTO</Link>
        <Link href="/acercade">QUIENES SOMOS</Link>
        <Link href="/contacto">CONTACTO</Link>
      </nav>
    </div>
  );
};

export default Nav;
