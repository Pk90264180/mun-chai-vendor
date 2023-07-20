import { NewOrdersData } from "../../../src/menu";
// import { CartModal } from "../../Modal/Data";

type prop = {
    type : string,
    payload : any
}

const orderReducer = (state: any = [], action : prop) => {
    if (action.type) {
        return [...state, { NewOrdersData}]
    } else {
        return state
    }
}

export default orderReducer;