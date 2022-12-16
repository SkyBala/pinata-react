import { reviewsTypes } from "../types/reviewsTypes"


const initial ={
    reviews:[]
}

export const rewiewsReducer=(state=initial,action)=>{
    switch(action.type){
        case reviewsTypes.GETREVIEW:
            return{...state,reviews:action.payload}
        default:return state
    }
}