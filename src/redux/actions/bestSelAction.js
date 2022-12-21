import axios from "axios"
import { bestSelTypes } from "../types/bestSelTypes"
import { loadOffAction, loadOnAction } from "./compActions"

export const getBestSelAction=(dispatch)=>{
    return async (dispatch)=>{
        dispatch(loadOnAction())
        try{
        const response = await axios.get('http://164.92.190.147:8005/api/v1/flower-best/')
        const data = await response.data
        dispatch(changeBestSel(data))
        dispatch(loadOffAction())
     }catch (e){
        dispatch(loadOffAction())
        alert(e) 
     }
    }
}

function changeBestSel(data){
    return{
        type:bestSelTypes.GETFLOW,
        payload:data
    }
}