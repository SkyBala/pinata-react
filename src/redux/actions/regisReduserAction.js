import axios from "axios"
import { setCookie } from "react-use-cookie"



import { RegisTypes } from "../types/regisReduserTypes"


export const sendForm=(form)=>{
   
    const formData= new FormData(form)
   
    const obj = {}
    formData.forEach((item,id)=>{
        obj[id]=item
    })
    return async(dispatch)=>{
        try{
            const response = axios({
                method:'POST',
                url:'http://164.92.190.147:8005/api/v1/users/signup/',
                headers:{'Content-type':'application/json'},
                data:JSON.stringify(obj)
            })
            const data = await response
            if(data.status>=200 && data.status<400){
                dispatch(sendFormDis(data.data))
                setCookie('user',JSON.stringify(obj))
                alert('Registered')
            }else{
                throw Error
            }
        }catch(e){
            alert('в не зарегестрированы,пробуйте еще раз')
        }
    }
}

function sendFormDis(paylo){
        return {
            type:RegisTypes.SENDED,
            payload: paylo
        }
}


export const LogAction=(form)=>{
    return async(dispatch)=>{
        try{
            const response = axios({
                method:'POST',
                url:'http://164.92.190.147:8005/api/v1/users/login/',
                headers:{'Content-type':'application/json'},
                data:form
            })
            const data = await response
            if(data.status>=200 && data.status<400){
                alert('Вы зашли')
                dispatch(getToken(data.data))
            }else{
                throw Error
            }
        }catch(e){
            console.log(e)
        }
    }
}
function getToken(token){
        return{
            type:RegisTypes.LOGIN,
            payload: token
        }
}