import { bestSelTypes } from "../types/bestSelTypes"

const initial ={
    flowers:[]
}

export const bestSelReducer=(state=initial,action)=>{
    switch(action.type){
        case bestSelTypes.GETFLOW:
            return{...state,flowers:action.payload}
        default:return state
    }
}