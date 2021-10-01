import { createStore, combineReducers } from "redux"
import UsReducer from './Modules/User/UsReducer'

const reducers = combineReducers({User: UsReducer})

 const store = createStore(reducers)

 export default store