import { compTypes } from "../types/compTypes"

const initial = {
    openP:false
}
export const compReducer =(state=initial,action)=>{
        switch(action.type){
            case compTypes.OPENPOISK:
                return{...state,openP:true}
            case compTypes.CLOSEPOISK:
                return {...state,openP:false}    
            default:return state
            }
}