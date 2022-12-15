import { setCookie } from "react-use-cookie"
import { RegisTypes } from "../types/regisReduserTypes"

const initial = {
    signIn:false,
    logIn:false,
}

export const regisReduserAction=(state=initial,action)=>{
        switch(action.type){
            case RegisTypes.SENDED:
                setCookie('userInfo',JSON.stringify(action.payload))
                return{...state,signIn:true}
            case RegisTypes.LOGIN:
                setCookie('token',JSON.stringify(action.payload))
                return{...state,logIn:true}
            default: return state
        }
}