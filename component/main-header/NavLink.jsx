"use client";
import React from "react";
import Link from "next/link";
import classes from "./NavLink.module.css";
import { usePathname } from "next/navigation";

function NavLink({ children, href }) {
  const path = usePathname();

  const activeClass = path.startsWith(href);

  return (
    <Link
      className={
        activeClass ? `${classes.link} ${classes.active}` : classes.link
      }
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavLink;
