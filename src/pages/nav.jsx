import React, { useEffect, useState } from "react";
import Logo from "../assests/Logo.png";
import "./nav.css";
import LogoCart from "../assests/Cart.svg";
import Search from "../assests/Search.svg";
import Menu from "../assests/menu.svg";
import { Link } from "react-router-dom";
import MobileLogo from "../assests/LogoMobile.png";
import CloseMenu from "../assests/CloseMenu.svg";

function Nav() {
  const [scroll, setScroll] = useState(false);
  const [MenuMobile, setMenuMobile] = useState(false);
  const [windowSizeX, setWindowSize] = useState({ width: window.innerWidth });

  function openMenuMobile(){
    if (window.scrollX >= 600) {
      setMenuMobile(true);
      document.body.classList += "menu--open"
    } else {
      setMenuMobile(false);
    }

}

function closeMenuMobile(){
    document.body.classList.remove("menu--open")
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
      setMenuMobile(true);
      setScroll(false)
    } else {
      setMenuMobile(false);
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
        <div className={scroll ? "MenuButton_Container fixed" : "MenuButton_Container"}>
          <button onClick={openMenu} className="MenuButton">
            <img src={Menu} className="MenuImg" alt="" />
          </button>
        </div>
        <div className={scroll ? "MenuButtonX_Container-noappear" : "MenuButtonX_Container-appear"}>
          <button onClick={closeMenu} className="MenuButton">
            <img src={CloseMenu} className="MenuImgX" alt="" />
          </button>
        </div>
        <div className={scroll ? "Nav_Left-Fixed" : "Nav_Left"}>
          <a href="/">
            <img className="LogoNav" src={MobileLogo} alt="Logo" />
          </a>
        </div>
        <div className="Nav_Center">
          <input className={scroll ? 'SearchField_fixed' : 'SearchField'} type="text" placeholder="What are you looking for?" />
          <button className="SearchButton">
            <img src={Search} alt="" />
          </button>
        </div>
        <div className="Nav_Right">
          <Link to={"/Cart"}>
            <img className="LogoCart" src={LogoCart} alt="" />
          </Link>
        </div>
      </div>
      <div className={scroll ? 'Nav_Down_fixed active' : 'Nav_Down' }>
        <Link to={`/shop`} className="link__hover-effect">Shop</Link>
        <Link to={`/PlantCare`} className="link__hover-effect">Plant Care</Link>
        <Link to={`/`} className="link__hover-effect">Subscribe</Link>
        <Link to={`/`} className="link__hover-effect">About Us</Link>
        <Link to={`/`} className="link__hover-effect">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Nav;
