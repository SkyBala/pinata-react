import { catalogTypes } from "../types/catalogTypes"

const initial = {
    catagory:[],
    page:[]
}

export const catalogReducer=(state=initial,action)=>{
    switch(action.type){
        case catalogTypes.GETINFO:
            return{...state,catagory:action.payload}
        case catalogTypes.GETPAGE:
            return {...state,page:action.payload}
        default:return state
    }
}

