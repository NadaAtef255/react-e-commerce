const INITIAL_VALUE = {
  list: [],
  lodingProduct:false
};

export default function ProductReducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        list: action.payload,
      };
      case "LOADING_PRODUCTS":
      return {
        ...state,
        lodingProduct:action.payload,
      };

    default:
      return state;
  }
}
