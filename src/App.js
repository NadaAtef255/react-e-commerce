import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import RegisterForm from "./Pages/Register/RegisterForm";
import LoginForm from "./Pages/Login/LoginForm";

import HomePage from "./Pages/Home/Home";
// import CartPage from "./Pages/Cart/Cart";
import { useSelector } from "react-redux";
import ProductsDetails from "./Pages/ProductDetails/ProductDetails";
import Favoritelist from "./Pages/Favorite/FavoriteProducts";
import Cartlist from "./Pages/Cart/Cart";

function App() {
  // to read or update data from Context :
  const theme = useSelector((state) => state.myTheme.theme);
  return (
    <>
      <BrowserRouter>
        {/* className={myTheme == "light" ? "text-dark bg-light" : "text-light bg-dark"} */}
        {/* bg={theme == "light" ? "dark" : "light"} */}

        <Navbar />
        <div
          className={
            theme == "light" ? "text-dark bg-light" : "text-light bg-dark"
          }
        >
          <div className="container">
            <Switch>
              <Route path="/" component={LoginForm} exact />
              <Route path="/register" component={RegisterForm} exact />
              <Route path="/login" component={LoginForm} exact />
              <Route path="/home" component={HomePage} exact />
              <Route path="/favorite" component={Favoritelist} exact />
              <Route path="/details/:id" component={ProductsDetails} />
              <Route path="/cart" component={Cartlist} exact />
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
