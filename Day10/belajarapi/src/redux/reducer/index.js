import {combineReducers} from 'redux'
import TokenReducer from './TokenReducers'

export default combineReducers({
    Token:TokenReducer
})