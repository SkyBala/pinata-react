import axios from "axios"



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
            }else{
                alert('try again')
                throw Error('something is invalid')
              
            }
        }catch(e){
            alert(e)
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
                if(data.data.message==='Login Successfully'){
                    dispatch(getToken(data.data))
                }else{
                    throw Error(data.data.message)
                }
            } else{
                throw Error('error')
            }
            
        }catch(e){
           alert(e)
        }
    }
}
function getToken(token){
        return{
            type:RegisTypes.LOGIN,
            payload: token
        }
}
export const logOutAction=()=>{
    return {
        type:RegisTypes.LOGOUT
    }
}