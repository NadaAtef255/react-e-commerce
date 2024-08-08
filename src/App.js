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
import CartPage from "./Pages/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="container">
          <Switch>
            <Route path="/" component={LoginForm} exact />
            <Route path="/register" component={RegisterForm} exact />
            <Route path="/login" component={LoginForm} exact />
            <Route path="/home" component={HomePage} exact />
            <Route path="/cart" component={CartPage} exact />
          </Switch>
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
