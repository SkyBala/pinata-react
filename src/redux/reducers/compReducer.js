import { compTypes } from "../types/compTypes"

const initial = {
    openP:false,
    poiskInfo:[],
    preload:false
}
export const compReducer =(state=initial,action)=>{
        switch(action.type){
            case compTypes.OPENPOISK:
                return{...state,openP:!state.openP}
            case compTypes.CLOSEPOISK:
                return {...state,openP:false}
            case compTypes.POISKAPI:
                return{...state,poiskInfo:action.payload}
            case compTypes.LOADON:
                return{...state,preload:true}      
            case compTypes.LOADOFF:
                return{...state,preload:false}      
            default:return state
            }
}