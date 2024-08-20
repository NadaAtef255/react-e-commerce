const INITIAL_VALUE = {
  cart: [],
};
export default function CartReducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload);
      
      return {
        ...state,
        cart: [...state.cart, action.payload],
      
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload),
      };
    default:
      return state;
  }
}
