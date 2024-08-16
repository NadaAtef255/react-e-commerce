import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../Redux/Actions/ThemeAction";
import "./Navbar.css";
import { useContext } from "react";
import { CategoriesContext } from "../../Context/CategoriesContext";
import { PriceContext } from "../../Context/PriceContext";
function Navbar() {
  // to get data from store --> useSelector
  const theme = useSelector((state) => state.myTheme.theme);
  const fav = useSelector((state) => state.favorite.favorites.length);
  const cart = useSelector((state) => state.myCart.cart.length);
  // categ context
  const { category, setCategory } = useContext(CategoriesContext);
  const { price, setPrice } = useContext(PriceContext);

  // to update data in store --> useDispatch
  const dispatch = useDispatch();
  // theme function
  const handleThemechange = () => {
    dispatch(changeTheme(theme == "light" ? "dark" : "light"));
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">
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
              <Link className="nav-link" to="/products">
                Products
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
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-info"
                    // onClick={toggleLanguage}

                    onClick={() => setCategory("electronics")}
                  >
                    Electronics
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-info"
                    onClick={() => setCategory("jewelery")}
                  >
                    Jewelry
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-info"
                    onClick={() => setCategory(`men's clothing`)}
                  >
                    Men's Clothing
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-info"
                    onClick={() => setCategory(`women's clothing`)}
                  >
                    Women's Clothing
                  </button>
                </li>
                {/* <li className="nav-item">
                  <button
                    className="nav-link btn btn-info"
                    // onClick={toggleLanguage}

                    onClick={() => setCategory("")}
                  >
                    all
                  </button>
                </li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                to="#"
                role="button"
                aria-expanded="false"
              >
                Price
              </Link>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-info"
                    onClick={() => setPrice("desc")}
                  >
                    Low to High
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-info"
                    onClick={() => setPrice("asc")}
                  >
                    High to Low
                  </button>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} /> {cart}
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-primary"
                onClick={handleThemechange}
              >
                <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />{" "}
                {theme === "light" ? "Light" : "Dark"}
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link mb-0 text-primary" to="/favorite">
                ❤️ {fav}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
