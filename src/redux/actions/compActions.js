import { compTypes } from "../types/compTypes"

export const openCloseAction =()=>{
    return{
        type:compTypes.OPENPOISK
    }
}
export const closeModalAction = ()=>{
    return{
        type:compTypes.CLOSEPOISK
    }
}