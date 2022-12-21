import { setCookie } from "react-use-cookie";
import { getCookie } from "../../components/ourCookies/OurCookies";
import { busketTypes } from "../types/busketTypes";

const InitialState = {
    count: 0 ,
    info:{},
    brow:[],
    modal:false,
    card:{}
}


export function buskedReducer (state = InitialState, action){
switch (action.type) {
    case "BUSKED_INC":
        return{...state, count:state.count + 1}
        break;
    case "BUSKED_DEC":
            if(state.count <= 0){
                return{...state, count: 0}
            }else{
            return{...state, count:state.count - 1}
            }
            break;
    case busketTypes.BUSKED_INFO:
        return{...state,info:action.payload}
        
    case busketTypes.BUSKED_BROW:
        return{...state,brow:action.payload}  

    case busketTypes.OPENMODAL:
        return {...state,modal:true}
    case busketTypes.CLOSEMODAL:
        return {...state,modal:false}
    case busketTypes.ADDCARD:
        return{...state,card:action.payload}
        
    default:
        return state
}
return state;
}