import axios from "axios"
import { reviewsTypes } from "../types/reviewsTypes"

export const getReviews=()=>{
    return async (dispatch)=>{
        
        const response = await axios.get('http://164.92.190.147:8005/api/v1/reviews/')
        const data = await response.data
        dispatch(changeReviews(data))
    }
}
function changeReviews(data){
    return{
        type:reviewsTypes.GETREVIEW,
        payload:data
    }
}