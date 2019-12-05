import { ADD,MINUS,RESET } from "../type"

const INITIAL_STATE=0 //initialstate boleh diisi apa aja

export default(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case ADD:
            return state+1
        case MINUS:
            return state-1
        case RESET:
            return INITIAL_STATE
        default:
            return state 
    }
}