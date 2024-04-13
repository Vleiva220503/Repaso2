import React, { useEffect } from "react";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";

export const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      header.classList.toggle("active", window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header" style={{position: "fixed", top: 0, left: 0, width: "100%", backgroundColor: "#fff", zIndex: 1000, transition: "background-color 0.3s ease"}}>
        <div className="scontainer flex" style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px"}}>
          <nav className="nav" style={{flex: 1}}>
            <ul style={{listStyle: "none", padding: 0, margin: 0, display: "flex", justifyContent: "center"}}>
              {nav.map((link) => (
                <li key={link.id} style={{margin: "0 10px"}}>
                  <Link to={link.url} style={{textDecoration: "none", color: "#333"}}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flexCenter">
            {/* Contenido de la cuenta */}
          </div>
        </div>
      </header>
    </>
  );
};
