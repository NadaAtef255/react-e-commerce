import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavorites,
  removeFromFavorites,
} from "../Redux/Actions/FavActions";
import { addToCart, removeFromCart } from "../Redux/Actions/CartActions";

function MyCard(props) {
  // to get data from store --> useSelector
  const favorites = useSelector((state) => state.favorite.favorites);
  const cart = useSelector((state) => state.myCart.cart);

  // to update data in store --> useDispatch
  const dispatch = useDispatch();
  const IsFav = favorites.find((fav) => fav.id === props.movie.id);

  const handleFavorite = (movie) => {
    if (IsFav) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };
  const IsCart = cart.find((car) => car.id === props.product.id);
  const handleCart = (product) => {
    if (IsCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };
  return (
    <div className="card" style={{ width: props.width }}>
      <img src={props.image} className="card-img-top" alt="..." />

      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {props.bio && <p className="card-text"> description:{props.bio} </p>}
        {props.category && (
          <p className="card-text">category: {props.category} </p>
        )}
        {props.price && <p className="card-text"> price:{props.price} $ </p>}
        {props.rate && <p className="card-text"> rate : {props.rate} </p>}
        {props.url && (
          <Link to={props.url} className="btn btn-secondary">
            {props.btnName}
          </Link>
        )}
        {/* Redux  */}
        {props.movie && (
          <button onClick={() => handleFavorite(props.movie)}>
            {IsFav ? "❤️" : "🤍"}
          </button>
        )}
        <br></br>
        {props.product && (
          <button onClick={() => handleCart(props.product)}>
            {IsCart ? "Remove From Cart" : "Add To Cart"}
          </button>
        )}
        {/* 2 buttons add remov */}
        {/* {props.product && (
         ( <button onClick={() => handleCart(props.product)}>
            {IsCart ? "Remove From Cart" :(<button onClick={() => handleCart(props.product)}>
            {IsCart ? "Remove From Cart" : "Add To Cart"}
          </button>)}
          </button>)
        ////////////////////////
           {if(IsCart ) {(<button onClick={() => handleCart(props.product)}>
            "Remove From Cart" 
          </button>)&&
             (<button onClick={() => handleCart(props.product)}>
            "Add To Cart" 
          </button>)}}
        )} */}
      </div>
    </div>
  );
}

export default MyCard;
