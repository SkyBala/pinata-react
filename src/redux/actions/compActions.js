import axios from "axios"
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

export const getPoiskAction =(value)=>{
    return async (dispatch)=>{
        dispatch(loadOnAction())
        try{
            const response  = await axios.get(`http://164.92.190.147:8005/api/v1/flowers/?search_text=${value}`)
            const data  = await response.data
            dispatch(getPoiskDis(data))
            dispatch(loadOffAction())
        }catch{
            dispatch(loadOffAction())
            alert('Try again')
        }
    }
}
function getPoiskDis(data){
return {
    type:compTypes.POISKAPI,
    payload:data
}
}

export const loadOnAction=()=>{
    return {
        type:compTypes.LOADON
    }
}
export const loadOffAction=()=>{
    return {
        type:compTypes.LOADOFF
    }
}