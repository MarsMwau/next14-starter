"use client";
import { useState } from "react";
import "./Links.css";
import NavLink from "./NavLink/NavLink";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blogs",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className="menu-container">
      <div className="links">
        {links.map((link) => (
          <NavLink item={link} key={link.id} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink
                item={{
                  title: "Admin",
                  path: "/admin",
                }}
              />
            )}
            <button className="logout">Logout</button>
          </>
        ) : (
          <NavLink
            item={{
              title: "Login",
              path: "/login",
            }}
          />
        )}
      </div>
      <button className="menu-btn" onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
