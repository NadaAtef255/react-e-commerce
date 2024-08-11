import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../Redux/Actions/ThemeAction";

function Navbar() {
  // to get data from store --> useSelector
  const theme = useSelector((state) => state.myTheme.theme);
  const fav = useSelector((state) => state.favorite.favorites.length);
  const cart = useSelector((state) => state.myCart.cart.length);

  // to update data in store --> useDispatch
  const dispatch = useDispatch();
  // theme function
  const handleThemechange = () => {
    dispatch(changeTheme(theme == "light" ? "dark" : "light"));
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Navbar
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
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
            <li className="nav-item">
              <Link className="nav-link" to="/Products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorite">
                Favorite
              </Link>
            </li>
            {/* Redux  addTofav */}
            <li className="nav-item">
              <p className="nav-link text-primary">❤️ {fav} </p>
            </li>

            {/* Dropdown   */}
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
                  <Link className="dropdown-item" to="#">
                    electronics
                  </Link>
                  {/* <button onClick={electronics}>electronics</button> */}
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    jewelery
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    men's clothing
                  </Link>
                </li>
                {/* <li><hr class="dropdown-divider"></li> */}
                <li>
                  <Link className="dropdown-item" to="#">
                    women's clothing
                  </Link>
                </li>
              </ul>
            </li>
            {/* cart Icon */}
            <li className="nav-item">
              Cart
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                {cart}
              </Link>
            </li>

            {/* Themes Icon */}
            <i className="fa-solid fa-moon-stars"></i>
            <li className="nav-item">
              <button onClick={handleThemechange}>
                <FontAwesomeIcon icon={theme == "light" ? faSun : faMoon} />

                {theme == "light" ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
