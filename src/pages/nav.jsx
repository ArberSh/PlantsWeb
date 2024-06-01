import React, { useEffect, useState } from "react";
import Logo from "../assests/Logo.png";
import "./nav.css";
import LogoCart from "../assests/Cart.svg";
import Search from "../assests/Search.svg";
import Menu from "../assests/menu.svg";
import { Link } from "react-router-dom";
import MobileLogo from "../assests/LogoMobile.png";
import CloseMenu from "../assests/CloseMenu.svg";

function Nav({CartItem }) {
  const [scroll, setScroll] = useState(false);
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  const [windowSizeX, setWindowSize] = useState({ width: window.innerWidth });

  console.log("Nav:" + CartItem)

  function openMenuMobile() {
    console.log("works");
    setMenuMobileOpen(true);
    console.log(menuMobileOpen);
    document.body.style.overflowY = "hidden";
  }
  function closeMenuMobile() {
    setMenuMobileOpen(false);
    document.body.style.overflowY = "auto";
  }

  function openMenu() {
    setScroll(false);
  }

  function closeMenu() {
    setScroll(true);
  }

  function Scroll() {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  function handleResize() {
    setWindowSize({ width: window.innerWidth });
    if (window.innerWidth <= 600) {
      setScroll(false);
    } else {
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", Scroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", Scroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="Nav_Top">
        <div className="MenuButtonPhoneDisplay">
          <button onClick={openMenuMobile} className="MenuButton">
            <img src={Menu} className="MenuImg" alt="" />
          </button>
          {menuMobileOpen && (
            <div className={"menu__backdrop"}>
            <button className="MenuButton" onClick={closeMenuMobile}>
                  <img className="MenuImg" src={CloseMenu}></img>
                </button>
              <div className="Nav_Link_Mobile">
                <Link onClick={closeMenuMobile} to={`/shop`} className="link__hover-effect">
                  Shop
                </Link>
                <Link onClick={closeMenuMobile} to={`/PlantCare`} className="link__hover-effect">
                  Plant Care
                </Link>
                <Link onClick={closeMenuMobile} to={`/`} className="link__hover-effect">
                  Subscribe
                </Link>
                <Link onClick={closeMenuMobile} to={`/`} className="link__hover-effect">
                  About Us
                </Link>
                <Link onClick={closeMenuMobile} to={`/`} className="link__hover-effect">
                  Contact Us
                </Link>
              </div>
            </div>
          )}
          
        </div>
        <div
          className={
            scroll ? "MenuButton_Container fixed NotPhone" : "MenuButton_Container NotPhone"
          }
        ><button onClick={openMenu} className="MenuButton">
            <img src={Menu} className="MenuImg" alt="" />
          </button></div>
        <div
          className={
            scroll
              ? "MenuButtonX_Container-noappear"
              : "MenuButtonX_Container-appear"
          }
        >
          <button onClick={closeMenu} className="MenuButton">
            <img src={CloseMenu} className="MenuImgX" alt="" />
          </button>
        </div>
        <div className={scroll ? "Nav_Left-Fixed" : "Nav_Left"}>
          <Link to="/">
            <img className="LogoNav" src={MobileLogo} alt="Logo" />
          </Link>
        </div>
        <div className="Nav_Center">
          <input
            className={scroll ? "SearchField_fixed" : "SearchField"}
            type="text"
            placeholder="What are you looking for?"
          />
          <button className="SearchButton">
            <img src={Search} alt="" />
          </button>
        </div>
        <div className="Nav_Right">
          <Link to={"/Cart"}>
          <div className="red_circle">{CartItem}</div>
            <img className="LogoCart" src={LogoCart} alt="" />
          </Link>
        </div>
      </div>
      <div className={scroll ? "Nav_Down_fixed active" : "Nav_Down"}>
        <Link to={`/shop`} className="link__hover-effect">
          Shop
        </Link>
        <Link to={`/PlantCare`} className="link__hover-effect">
          Plant Care
        </Link>
        <Link to={`/`} className="link__hover-effect">
          Subscribe
        </Link>
        <Link to={`/`} className="link__hover-effect">
          About Us
        </Link>
        <Link to={`/`} className="link__hover-effect">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
