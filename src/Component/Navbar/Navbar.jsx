import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../Redux/Actions/ThemeAction";
import { UserContext } from "../../Context/UserContext";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [userToken, setUsertoken] = useState(localStorage.getItem("userToken"));
  const history = useHistory();
  const theme = useSelector((state) => state.myTheme.theme);
  const fav = useSelector((state) => state.favorite.favorites.length);
  const cart = useSelector((state) => state.myCart.cart.length);
  const { userData, setUserData } = useContext(UserContext);
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  };

  const logOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userEmail");
    setUserData(null);
    setUsertoken(null);
    history.push("/login");
  };
  // useEffect(()=>{userToken=localStorage.getItem('userToken')},[userData])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      {(userData || userToken) &&
      userData?.email?.toLowerCase() === "hossamnada@gmail.com" ? (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between  w95">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              dashboard
            </Link>
          </li>
          <li className="nav-item ">
            <button className="nav-link" onClick={logOut}>
              logOut
            </button>
          </li>
        </ul>
      ) : (
        <>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              MyShop
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {(userData || userToken) && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/home">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        to="#"
                        role="button"
                        aria-expanded="false"
                      >
                        Category
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/category/electronics"
                          >
                            Electronics
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/category/jewelery"
                          >
                            Jewelry
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/category/mens-clothing"
                          >
                            Men's Clothing
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/category/womens-clothing"
                          >
                            Women's Clothing
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
              </ul>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {userData || userToken ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} /> {cart}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button
                        className="btn btn-outline-primary"
                        onClick={handleThemeChange}
                      >
                        <FontAwesomeIcon
                          icon={theme === "light" ? faSun : faMoon}
                        />
                        {theme === "light" ? " Light" : " Dark"}
                      </button>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link mb-0 text-primary"
                        to="/favorite"
                      >
                        ❤️ {fav}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link" onClick={logOut}>
                        logOut
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
