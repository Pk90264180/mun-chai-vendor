import { combineReducers } from "redux";
// import cartReducer from "./CartReducer";
import orderReducer from "./OrderReducer";

const Reducers = combineReducers({
    // cart : cartReducer
    order : orderReducer
})

export default Reducers;