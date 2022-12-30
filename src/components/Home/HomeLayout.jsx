import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useRef, useEffect, useState, Children } from "react";
import Explore from "../Explore/Explore";
import { useDispatch } from "react-redux";

export default function HomeLayout() {
  const location = useLocation();
  const headerRef = useRef(null);
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
      <div
        ref={headerRef}
        className={
          location.pathname === "/"
            ? "header-home"
            : `header-${location.pathname.slice(1)}`
        }
      >
        <NavLink to="/">
          <div className="header-left">
            <img
              className="brand-logo"
              src="https://opensea.io/static/images/logos/opensea.svg"
            ></img>
            <p className="brand-text">OpenSea</p>
          </div>
        </NavLink>
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
            <NavLink className="explore-navlink" to="/explore">
              Explore
              <div className="explore-menu-drop">
                <a href="#">
                  <img src="https://opensea.io/static/images/icons/allnfts-light.svg"></img>
                  All NFTs
                </a>
                <a href="#">
                  <img src="https://opensea.io/static/images/icons/art-light.svg"></img>
                  Art
                </a>
                <a href="#">
                  <img src="https://opensea.io/static/images/icons/collectibles-light.svg"></img>
                  Collectibles
                </a>
                <a href="#">
                  <img src="https://opensea.io/static/images/icons/domain-names-light.svg"></img>
                  Domain Names
                </a>
                <a href="#">
                  <img src="https://opensea.io/static/images/icons/music-light.svg"></img>
                  Music
                </a>
                <a href="#">
                  <img src="https://opensea.io/static/images/icons/photography-category-light.svg"></img>
                  Photography
                </a>
                <a href="#">
                  <img src="https://opensea.io/static/images/icons/sports-light.svg"></img>
                  Sports
                </a>
                <a href="#">
                  <img src="https://opensea.io/static/images/icons/trading-cards-light.svg"></img>
                  Trading Cards
                </a>
                <a href="#">
                  <img src="https://opensea.io/static/images/icons/utility-light.svg"></img>
                  Utility
                </a>
                <a href="#">
                  <img src="https://opensea.io/static/images/icons/virtual-worlds-light.svg"></img>
                  Virtual Words
                </a>
              </div>
            </NavLink>
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
