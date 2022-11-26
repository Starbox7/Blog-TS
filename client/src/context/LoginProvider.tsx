import { useReducer, useEffect } from "react";
import { ILogin } from "../interface";
import { LoginContext } from "./LoginContext";
import {LoginReducer} from "./LoginReducer";

const INIT: ILogin = {
    user: (localStorage.getItem("user")==="null")?null:JSON.parse(localStorage.getItem("user")||"{}"),
    isFetching: false,
    error: false,
}


interface IProps {
    children: JSX.Element
}

export function LoginProvider ({children}: IProps){
    const[state, dispatch] = useReducer(LoginReducer, INIT)

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
        //localStorage.setItem("user", "null") //localstorage user를 null로 초기화 할시 사용하는 코드
    
    },[state])

    return(
        <LoginContext.Provider value={{state, dispatch}}>
            {children}
        </LoginContext.Provider>
    )
}