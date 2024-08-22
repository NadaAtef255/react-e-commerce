import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../Redux/Actions/ThemeAction";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../Context/CategoriesContext";
import { PriceContext } from "../../Context/PriceContext";
import { BASE_URL } from "../../Servises/api";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
function Navbar() {
  const [categories, setCategories] = useState([]);
  const theme = useSelector((state) => state.myTheme.theme);
  const fav = useSelector((state) => state.favorite.favorites.length);
  const cart = useSelector((state) => state.myCart.cart.length);
  const { price, setPrice } = useContext(PriceContext);
  const { userData, setUserData } = useContext(UserContext);
  const [userToken, setUsertoken] = useState(localStorage.getItem("userToken"));
  const checkAdmin =
    userData?.email?.toLowerCase() === "hossamnada@gmail.com" ||
    localStorage.getItem("userEmail") === "hossamnada@gmail.com";
  const history = useHistory();

  const dispatch = useDispatch();
  const handleThemechange = () => {
    dispatch(changeTheme(theme == "light" ? "dark" : "light"));
  };

  const logOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userEmail");
    setUserData(null);
    setUsertoken(null);
    history.push("/login");
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {checkAdmin ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
                <Link className="nav-link" to="/create-product">
                  Create Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/manage-products">
                  Manage Products
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={logOut}>
                  logOut
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      ) : (
        <>
          {userToken || localStorage.getItem("userToken") ? (
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                        {categories?.map((cat) => (
                          <Link key={cat} to={`/category/${cat}`}>
                            <li className="nav-item">
                              <button className="nav-link btn btn-info">
                                {cat}
                              </button>
                            </li>
                          </Link>
                        ))}
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
                            onClick={() => setPrice("asc")}
                          >
                            Low to High
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link btn btn-info"
                            onClick={() => setPrice("desc")}
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
                        <FontAwesomeIcon
                          icon={theme === "light" ? faSun : faMoon}
                        />{" "}
                        {theme === "light" ? "Light" : "Dark"}
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
                  </ul>
                </div>
              </div>
            </nav>
          ) : (
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/home">
                        Home
                      </Link>
                    </li>
                  </ul>

                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                  </ul>
                </div>
              </div>
            </nav>
          )}
        </>
      )}
    </>
  );
}

export default Navbar;
