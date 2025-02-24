"use client";
import scss from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import basketIcon from "@/../public/basket-42.png";
import instagramIcon from "@/../public/iconInstagram.png";
import { useLayoutContext } from "../LayoutPage";

const Header = () => {
  const { count } = useLayoutContext();
  return (
    <header>
      <div className="container">
        <div className={scss.header}>
          <nav>
            <Link href="/">Shop</Link>
            <Link href="/look-book">LookBook</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Link href="/" className={scss.home}>
            FashionFusion
          </Link>
          <nav>
            <Link href="/auth/sign-in">Login</Link>
            <Image className={scss.instagram} src={instagramIcon} alt="icon" />
            <Link href="/basket">
              <div className={scss.basket}>
                <Image src={basketIcon} alt="icon" />
                <p>{count ? count : ""}</p>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
