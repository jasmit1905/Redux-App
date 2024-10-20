import { createStore } from "redux";
import userReducer from "./Redux/Reducer";

const store = createStore(userReducer)
export default store