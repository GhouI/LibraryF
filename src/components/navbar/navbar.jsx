import {React, useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/icons/logo.svg'
const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#library">Library</a></p>
    <p><a href="#search">Search</a></p>
    <p><a href="#recent">Recent</a></p>
    <p><a href="#about">About</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="verseify__navbar">
      <div className="verseify__navbar-links">
        <div className="verseify__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="verseify__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="verseify__navbar_sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="verseify__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="verseify__navbar-menu_container scale-up-center">
            <div className="verseify__navbar-menu_container-links">
              <Menu />
                          <div className="verseify__navbar-menu_container-links_sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default Navbar


