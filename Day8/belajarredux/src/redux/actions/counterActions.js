import { ADD,MINUS,RESET } from "../type"

export const add=()=>{
    return{
        type: ADD

    }
}
export const minus=()=>{
    return{
        type: MINUS
    }
}
export const reset=()=>{
    return{
        type: RESET
    }
}