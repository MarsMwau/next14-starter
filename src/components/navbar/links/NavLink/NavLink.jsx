"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./NavLink.css"

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`link-cont ${pathName === item.path ? "active" : ""}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
