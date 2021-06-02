import { combineReducers } from "redux";
import productReducer from "./product";

const rootReducer = combineReducers({
  test: productReducer,
});

export default rootReducer;
