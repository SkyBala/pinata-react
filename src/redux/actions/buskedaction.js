import axios from "axios";
import { getCookie, setCookie } from "react-use-cookie";
import { busketTypes } from "../types/busketTypes";
import { loadOffAction, loadOnAction } from "./compActions";

export const getInfoAction =(param)=>{
        return async (dispatch)=>{
            dispatch(loadOnAction())
            try{
                const response  = await axios.get(`http://164.92.190.147:8005/api/v1/flower-detail/${param}`)
                const data  = await response.data
                dispatch(getInfoDis(data))
                dispatch(loadOffAction())
                
            }catch{
                alert('Try again')
            }
        }
}
function getInfoDis(data){
    return {
        type:busketTypes.BUSKED_INFO,
        payload:data
    }
}

export const getBrowAction=()=>{
    return async (dispatch)=>{
        dispatch(loadOnAction())
        try{
            const response = await axios.get(`http://164.92.190.147:8005/api/v1/flower-browses/`)
            const data = await response.data
            dispatch(getBrowPageDis(data))
            dispatch(loadOffAction())
        }catch (e){
            console.log(e)
        }
    }
}
function getBrowPageDis(data){
    return {
        type:busketTypes.BUSKED_BROW,
        payload:data
    }
}

export const openBasketAction =()=>{
    return {
        type:busketTypes.OPENMODAL
    }
}
export const closeBasketAction =()=>{
    return {
        type:busketTypes.CLOSEMODAL
    }
}

export const cardAddApi=(id,q)=>{
        const obj ={
            flower_id:id,
            quantity:q
        }
        return async (dispatch)=>{
           try{
            const response = await axios({
                url: 'http://164.92.190.147:8005/api/v1/cart/add/',
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                    'Authorization':`Bearer ${JSON.parse(getCookie('token')).tokens.access}`
                },
                data:JSON.stringify(obj)
            })
            await response.data
           }catch(e){
            alert(e)
           }
        }
}

export const addCardAction=(data)=>{
    return {
        type:busketTypes.ADDCARD,
        payload:data
    }
}
export const cardGetApi=()=>{
    return async (dispatch)=>{
       try{
        const response = await axios({
            url: 'http://164.92.190.147:8005/api/v1/cart/',
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(getCookie('token')).tokens.access}`
            }
        })
        const data = await response.data
        setCookie('userBasket',JSON.stringify(data))
       }catch (e){
        alert(e)
       }
    }
}

export const cardDeleteApi=(id,q)=>{
    const obj ={
        cart:q,
        flower:id
    }
    return async (dispatch)=>{
      try{
        const response = await axios({
            url: 'http://164.92.190.147:8005/api/v1/cart/clear/',
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(getCookie('token')).tokens.access}`
            },
            data:JSON.stringify(obj)
        })
        await response.data

      }catch(e){
        console.log(e);
      }
    }
}

export const cardOrderAct=()=>{
    const obj ={
        user:JSON.parse(getCookie('userBasket')).user
    }
    return async (dispatch)=>{
        try{
            const response = await  axios({
                url: 'http://164.92.190.147:8005/api/v1/cart/order/',
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                    'Authorization':`Bearer ${JSON.parse(getCookie('token')).tokens.access}`
                },
                data:JSON.stringify(obj)
            })
             await response.data
        }catch(e){
            alert(e)
        }
    }
}