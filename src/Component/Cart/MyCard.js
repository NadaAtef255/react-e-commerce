// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   addToFavorites,
//   removeFromFavorites,
// } from "../../Redux/Actions/FavActions";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { addToCart, removeFromCart } from "../../Redux/Actions/CartActions";
// import'./Cart.css'
// function MyCard(props) {
//   const favorites = useSelector((state) => state.favorite.favorites);
//   const cart = useSelector((state) => state.myCart.cart);

//   const dispatch = useDispatch();
//   const IsFav = favorites.find((fav) => fav.id === props.movie.id);

//   const handleFavorite = (movie) => {
//     if (IsFav) {
//       dispatch(removeFromFavorites(movie.id));
//     } else {
//       dispatch(addToFavorites(movie));
//     }
//   };
//   const IsCart = cart.find((car) => car.id === props.product.id);
//   const handleCart = (product) => {
//     if (IsCart) {
//       dispatch(removeFromCart(product.id));
//     } else {
//       dispatch(addToCart(product));
//     }
//   };
//   return (
//     <div className="card">
//       <img src={props.image} className="card-img-top" alt={props.name} />

//       <button
//         onClick={() => handleFavorite(props.movie)}
//         className={`favorite-button ${IsFav ? 'fav' : ''}`}
//       >
//         {IsFav ? '❤️' : '🤍'}
//       </button>

//       <div className="card-body">
//         <div>
//           <h5 className="card-title">{props.name}</h5>
//           {props.bio && (
//             <p className="card-text">Description: {props.bio}</p>
//           )}
//           {props.category && (
//             <p className="card-text">
//               <strong>Category:</strong> {props.category}
//             </p>
//           )}
//           {props.price && (
//             <p className="card-text">
//               <strong>Price:</strong> ${props.price}
//             </p>
//           )}
//           {props.rate && (
//             <p className="card-text">
//               <strong>Rate:</strong> {props.rate} ⭐
//             </p>
//           )}
//         </div>
//         <div className="card-buttons">
//           {props.url && (
//             <Link to={props.url} className="btn btn-primary">
//               View Details
//             </Link>
//           )}
//           {props.product && (
//             <button
//               onClick={() => handleCart(props.product)}
//               className={`btn btn-cart ${IsCart ? 'remove' : 'add'}`}
//             >
//               <FontAwesomeIcon icon={faShoppingCart} />
//               {IsCart ? ' Remove' : ' Add'}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>

//   );
// }

// export default MyCard;

// chat
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../Redux/Actions/FavActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { addToCart, removeFromCart } from "../../Redux/Actions/CartActions";
import "./Cart.css";

function MyCard(props) {
  // Get favorites and cart items from the Redux store
  const favorites = useSelector((state) => state.favorite.favorites);
  const cart = useSelector((state) => state.myCart.cart);

  const dispatch = useDispatch();

  // Determine if the current product is in favorites or cart
  const IsFav = favorites.some((fav) => fav.id === props.product.id);
  const IsCart = cart.some((car) => car.id === props.product.id);

  // Toggle favorite status
  const handleFavorite = (product) => {
    if (IsFav) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  // Toggle cart status
  const handleCart = (product) => {
    if (IsCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt={props.name} />

      <button
        onClick={() => handleFavorite(props.product)}
        className={`favorite-button ${IsFav ? "fav" : ""}`}
      >
        {IsFav ? "❤️" : "🤍"}
      </button>

      <div className="card-body">
        <div>
          <h5 className="card-title">{props.name}</h5>
          {props.bio && <p className="card-text">Description: {props.bio}</p>}
          {props.category && (
            <p className="card-text">
              <strong>Category:</strong> {props.category}
            </p>
          )}
          {props.price && (
            <p className="card-text">
              <strong>Price:</strong> ${props.price}
            </p>
          )}
          {props.rate && (
            <p className="card-text">
              <strong>Rate:</strong> {props.rate} ⭐
            </p>
          )}
        </div>
        <div className="card-buttons">
          {props.url && (
            <Link to={props.url} className="btn btn-primary">
              View Details
            </Link>
          )}
          {props.product && (
            <button
              onClick={() => handleCart(props.product)}
              className={`btn btn-cart ${IsCart ? "remove" : "add"}`}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              {IsCart ? " Remove" : " Add"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCard;
