import React from "react";
import Link from "next/link";
import classes from "./MainHeader.module.css";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="a plte with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/community">Browse Community</NavLink>
            </li>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
