const INITIAL_VALUE = {
  list: [],
};

export default function ProductReducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
