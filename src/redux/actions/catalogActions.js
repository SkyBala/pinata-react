import axios from "axios"
import { catalogTypes } from "../types/catalogTypes"

export const getinfoAction=()=>{
    return async (dispatch)=>{
        try{
            const response = await axios.get('http://164.92.190.147:8005/api/v1/category/')
            const data = await response.data
            dispatch(getChangeDis(data))
        }catch (e){
            console.log(e)
        }
    }
}
function getChangeDis(data){
    return {
        type:catalogTypes.GETINFO,
        payload:data
    }
}

export const getPageAction=(param)=>{
    return async (dispatch)=>{
        try{
            const response = await axios.get(`http://164.92.190.147:8005/api/v1/flowers/?cat_id=${param}`)
            const data = await response.data
            dispatch(getChangePageDis(data))
        }catch (e){
            console.log(e)
        }
    }
}
function getChangePageDis(data){
    return {
        type:catalogTypes.GETPAGE,
        payload:data
    }
}