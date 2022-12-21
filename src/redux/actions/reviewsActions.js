import axios from "axios"
import { reviewsTypes } from "../types/reviewsTypes"
import { loadOffAction, loadOnAction } from "./compActions"

export const getReviews=()=>{
    return async (dispatch)=>{
        dispatch(loadOnAction())
        try{
            const response = await axios.get('http://164.92.190.147:8005/api/v1/reviews/')
            const data = await response.data
            dispatch(changeReviews(data))
            dispatch(loadOffAction())
        }catch (e){
            // dispatch(loadOffAction())
            alert(e)
        }
    }
}
function changeReviews(data){
    return{
        type:reviewsTypes.GETREVIEW,
        payload:data
    }
}