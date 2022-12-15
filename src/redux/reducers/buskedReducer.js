import React from "react";
import { types } from "../types";

const InitialState = {
    count: 0 ,
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
    default:
        break;
}
return state;
}