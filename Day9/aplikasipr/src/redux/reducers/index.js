import {combineReducers} from 'redux'
import Parkir from '../reducers/reducerparkir'
import Durasi from '../reducers/durasiparkir'

export default combineReducers({
    bebas: Parkir,
    bebas1: Durasi,
})