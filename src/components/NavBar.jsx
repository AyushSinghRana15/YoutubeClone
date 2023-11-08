import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const NavBar = () => {
  const navigate = useNavigate();
  const loggedIn = "";

  const handleClick = () => {
    navigate("/");
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    loggedIn = localStorage.getItem("token");
  }, []);
  return (<div className="navbar">
  <GiHamburgerMenu />
  <img
    className="yt-logo"
    src="../src/assets/YT_Logo.png"
    alt=""
    onClick={handleClick}
  />
  <div className="search-container">
    <input className="searchBar" placeholder="  Search" />
    <button className="searchButton">
      <FiSearch size={20} />
    </button>
  </div>
  {loggedIn && (
    <button className="signInButton" onClick={handleSignInClick}>
      Sign In
    </button>
  )}
</div>
        
  );
};

export default NavBar;