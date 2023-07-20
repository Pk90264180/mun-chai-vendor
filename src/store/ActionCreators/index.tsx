// import { CartModal } from "../../Modal/Data"

export const addItem = (id:number) => {
    return (dispatch : any) => {
        dispatch({
            type : "AddItem",
            payload : id
        })
    }
}