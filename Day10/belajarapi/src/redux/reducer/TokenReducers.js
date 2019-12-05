const INITIAL_STATE=''

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'TOKEN':
            return action.payload
        default:
            return state
    }
}