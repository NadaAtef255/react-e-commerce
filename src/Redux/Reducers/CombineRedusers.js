import { combineReducers } from "redux";
import ThemeReducer from "./ThemeReducer";
import ProductReducer from "./ProductsReducer";
import FavReducer from "./FavReduser";
import CartReducer from "./CartReduser";

// import MovieReducer from "./MoviesReducer";

export default combineReducers({
  favorite: FavReducer,
  myCart: CartReducer,
  myList: ProductReducer,
  myTheme: ThemeReducer,
});
