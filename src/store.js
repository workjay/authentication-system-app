import { legacy_createStore as createStore } from "redux";
import RootReducer from "./Reducers";

const store = createStore(RootReducer);

export default store;
