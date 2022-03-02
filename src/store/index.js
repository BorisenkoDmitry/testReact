import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userReducer} from "./Reducers/userReducer";
import { authReducer } from './Reducers/authReducer';
import { todayAnimalReducer } from './Reducers/todayAnimalsReducer';
import { preloaderReducer } from './Reducers/preloaderReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AllAnimalsReducer } from './Reducers/AllAnimalsReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    userReducer,
    authReducer,
    todayAnimalReducer,
    preloaderReducer,
    AllAnimalsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))