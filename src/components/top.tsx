// Top.tsx

import Image from "next/image";
import top from "@/styles/cards.module.css";
import Link from "next/link";
import { useState } from "react";
import MenuLateral from "./Lmenu";

interface ButtonProps {
  information: string;
  pagina?: string;
}

export default function Top({ information, pagina }: ButtonProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className={top.top}>
        <Link href={pagina || "#"} className={top.icon}>
          <Image
            className={top.arrow}
            src={"/icons/Left.svg"}
            alt="ba2ck"
            width={20}
            height={20}
            priority
          />
        </Link>
        <p>{information}</p>
        <div className={top.menu} onClick={toggleMenu}>
          <div className={top.inner}>
            <i className="bi bi-list"></i>
          </div>
        </div>
      </div>
      <MenuLateral isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
