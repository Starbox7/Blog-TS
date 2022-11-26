import { ILogin } from "../interface";

export type TLoginAction =
    | { type: "LOGIN_START" }
    | { type: "LOGIN_SUCCESS", payload: ILogin }
    | { type: "LOGIN_FAILURE" }
    | { type: "LOGOUT" }
    | { type: "UPDATE_STARAT" }
    | { type: "UPDATE_SUCCESS", payload: ILogin }
    | { type: "UPDATE_FAILURE" }
    // | { type: "REGISTER_START" }
    // | { type: "REGISTER_SUCCESS", payload: ILogin }
    // | { type: "REGISTER_FAILURE" }
    | { type: string, payload?: ILogin } //위의 코드를 압축 실행 ?는 있을수도 있다

//type에서 interface로 많있는 추세
export function LoginReducer(state: ILogin, action: TLoginAction): ILogin {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return{
                user: null,
                isFetching: false,
                error: true
            }
        case "LOGOUT":
            return{
                user: null,
                isFetching: false,
                error: false
            }    
        case "UPDATE_START":
            return{
                ...state,
                isFetching: true,
            }
        case "UPDATE_SUCCESS":
            return{
                user: action.payload,
                isFetching: false,
                error: false
            }
        case "UPDATE_FAILURE":
            return{
                user: state.user,
                isFetching: false,
                error: true
            }
        // case "REGISTER_START":
        //     return{
        //         user: null,
        //         isFetching: true,
        //         error: false
        //     }
        // case "REGISTER_SUCCESS":
        //     return {
        //         user: action.payload,
        //         isFetching: false,
        //         error: false
        //     }
        // case "REGISTER_FAILURE":
        //     return{
        //         user: null,
        //         isFetching: false,
        //         error: true
        //     }
        default:
            return state

    }
}