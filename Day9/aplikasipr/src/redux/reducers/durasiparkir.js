import {DURASI} from '../type'

const INITIAL_STATE = 0

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case DURASI:
            return action.time
        default:
            return state
    }

}