import Link from "next/link";
import Image from "next/image";
import logo from "../public/LOGO-HN-SOLARI.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navBox">
      <div className="logo">
        <Link href="/home" className="logo">
          <Image src={logo} width={60} height={35} alt="logo" />
        </Link>
      </div>
      <nav className={isOpen ? "open" : ""}>
        <Link href="/estudio">ESTUDIO</Link>
        <Link href="/mantenimiento">MANTENIMIENTO</Link>
        <Link href="/acercade">QUIENES SOMOS</Link>
        <Link className="last" href="/contacto">
          CONTACTO
        </Link>
      </nav>
      <div className="menu-icon">
        <FontAwesomeIcon
          icon={faBars}
          color="white"
          size="3x"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
};

export default Nav;
