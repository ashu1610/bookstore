import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ setShowLogin, cartCount }) {
  const [scroll, setScroll] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", checkScroll);
  }, []);

  const checkScroll = (e) => {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const checkSearch = () => {
    setSearch(!search);
  };

  const changeLogin = () => {
    setShowLogin(true);
  };

  return (
    <header className="header">
      <div className="header-1">
        <a href="#" className="logo">
          <i className="fas fa-book"></i> Bookly
        </a>

        <form
          action=""
          className={`${search ? "search-form" : "search-form2"}`}
        >
          <input
            type="search"
            name=""
            placeholder="search here..."
            id="search-box"
          />
          <i className="fas fa-search"></i>
        </form>

        <div className="icons">
          <div
            id="search-btn"
            className="fas fa-search"
            onClick={checkSearch}
          ></div>
          <div>
            <Link to="/arrivals">
              <i className="fas fa-heart"></i>
            </Link>
          </div>

          {/* shopping cart add routing here */}
          <div>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && <span className="cartcount">{cartCount}</span>}              
            </Link>
          </div>
          
          <div
            id="login-btn"
            className="fas fa-user"
            onClick={changeLogin}
          ></div>
        </div>
      </div>

      <div className={`header-2 ${scroll ? "active" : ""}`} id="bar">
        <nav className="navbar1">
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/featured">Featured</Link>
          </a>
          <a>
            <Link to="/arrivals">arrivals</Link>
          </a>
          <a>
            <Link to="/reviews">reviews</Link>
          </a>
          <a>
            <Link to="/blogs">blogs</Link>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
