import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import logo from '../images/logo.jpeg'
const Nav = () => {
  return (
    <div className='navBox'>
      <div className="logo">
      <Link href="/"><h2>Mark</h2></Link>
        {/* <Image src={logo} width={50} height={50} alt="logo" /> */}
      </div>
      <nav>
        <Link href="/estudio"> ESTUDIO </Link>
        <Link href="/mantenimiento"> MANTENIMIENTO </Link>
        <Link href="/contacto">CONTACTO </Link>
        <Link href="/staff"> STAFF</Link>
      </nav>
    </div>
  );
};

export default Nav;
