import { createStore } from "redux";
import reducer from "./state/reducer";

const store = createStore(reducer);
export default store;
