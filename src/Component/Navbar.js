import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
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
              {/* <p className="nav-link text-primary">❤️ {fav} </p> */}
              <p className="nav-link text-primary">❤️ </p>
            </li>
            {/* context  lang btn */}
            {/* <li className="nav-item">
                  <button
                    className="nav-link btn btn-info"
                    // onClick={toggleLanguage}
    
                    onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                  >
                    Lang"{language}"
                  </button>
                </li> */}
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
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
                {/* <li><hr class="dropdown-divider"></li> */}
                <li>
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </li>
              </ul>
            </li>
            {/* Icon cart */}
            <li className="nav-item">
              Cart
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
