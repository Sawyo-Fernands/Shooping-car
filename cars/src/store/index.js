import { createStore,combineReducers } from 'redux'
import CarsReducer from  './cars'
import LayoutReducer from  './layout'



const rootReducer=combineReducers({

    cars:CarsReducer,
    layout:LayoutReducer

})

export default createStore(rootReducer)