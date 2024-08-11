import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CombineRedusers from "./Reducers/CombineRedusers";
import { thunk } from "redux-thunk";

const MyStore = createStore(
  CombineRedusers,
  composeWithDevTools(applyMiddleware(thunk))
);

//

export default MyStore;
