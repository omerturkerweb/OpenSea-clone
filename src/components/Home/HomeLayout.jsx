import { NavLink, Outlet } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

export default function HomeLayout() {
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var pageY = window.pageYOffset;
      if (pageY > 12) {
        headerRef.current.style.backgroundColor = "white";
      } else if (pageY < 1) {
        headerRef.current.style.backgroundColor = "transparent";
      }
    });
  }, []);
  return (
    <>
      <div ref={headerRef} className="header">
        <div className="header-left">
          <img
            className="brand-logo"
            src="https://opensea.io/static/images/logos/opensea.svg"
          ></img>
          <p className="brand-text">OpenSea</p>
        </div>
        <div className="header-mid">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>

          <input
            className="search-input"
            placeholder="Search items, collections, and accounts"
            type="text"
          ></input>
          <span className="search-input-right">/</span>
        </div>
        <div className="header-right">
          <li>
            <NavLink>Explore</NavLink>
          </li>
          <li>
            <NavLink>Drops</NavLink>
          </li>
          <li>
            <NavLink>Stats</NavLink>
          </li>
          <li>
            <NavLink>Resources</NavLink>
          </li>
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-wallet"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>

      <Outlet />
    </>
  );
}
