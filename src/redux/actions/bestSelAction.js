import axios from "axios"
import { bestSelTypes } from "../types/bestSelTypes"

export const getBestSelAction=()=>{
    return async (dispatch)=>{
        const response = await axios.get('http://164.92.190.147:8005/api/v1/flower-best/')
        const data = await response.data
        dispatch(changeBestSel(data))
    }
}

function changeBestSel(data){
    return{
        type:bestSelTypes.GETFLOW,
        payload:data
    }
}