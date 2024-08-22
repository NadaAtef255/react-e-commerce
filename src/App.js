import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer";
import LoginForm from "./Pages/Login/LoginForm";
import HomePage from "./Pages/Home/Home";
import ProductsDetails from "./Pages/ProductDetails/ProductDetails";
import Favoritelist from "./Pages/Favorite/FavoriteProducts";
import Cartlist from "./Pages/Cart/Cart";
import Signup from "./Pages/Register/Signup";
import UserContextProvider from "./Context/UserContext";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CategoriesContext } from "./Context/CategoriesContext";
import { useState } from "react";
import { PriceContext } from "./Context/PriceContext";
import ProductsCategories from "./Pages/Categories/ProductsCategories";
import CreateProduct from "./Pages/Dashboard/CreateProduct/CreateProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";

function App() {
  const theme = useSelector((state) => state.myTheme.theme);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <CategoriesContext.Provider value={{ category, setCategory }}>
            <PriceContext.Provider value={{ price, setPrice }}>
              <Navbar />
              <div
                className={
                  theme == "light" ? "text-dark bg-light" : "text-light bg-dark"
                }
              >
                <div className="container">
                  <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/register" component={Signup} exact />
                    <Route path="/login" component={LoginForm} exact />
                    <Route path="/home" component={HomePage} exact />
                    <Route path="/details/:id" component={ProductsDetails} />
                    <PrivateRoute path="/category/:type" component={ProductsCategories} />
                    <PrivateRoute
                      path="/favorite"
                      component={Favoritelist}
                      exact
                    />
                    <PrivateRoute path="/cart" component={Cartlist} exact />
                    <PrivateRoute path="/create-product/:id?" component={CreateProduct} exact />
                    <PrivateRoute path="/manage-products" component={ManageProducts} exact />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </div>
              </div>
            </PriceContext.Provider>
          </CategoriesContext.Provider>
          <Footer />
          <ToastContainer />
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
