import { userAuthAction } from "../Reducers/userReducer"
import { setAuth } from "../Reducers/authReducer"
import { setError } from "../Reducers/authReducer"
import apiToken from "./apiToken"
// import { getAnimal } from "../todayAnimalsReducer"
import axios from "axios"
import { getAnimal } from "../Reducers/todayAnimalsReducer"
import { setAnimals } from "../Reducers/AllAnimalsReducer"
import { isPreload } from "../Reducers/preloaderReducer"
import { useNavigate } from "react-router-dom"

export const userAuth = (user, navigate) => {
    
    return function(dispatch) {
        
        dispatch(isPreload(true))
        axios.post('https://acits-test-back.herokuapp.com/api/login/', user)
        .then(json => {
            const auth = {
                user: json.data.user, 
                token: json.data.accessToken, 
                tokenLive: Date.now() + 10*60*1000
            };
            
            localStorage.setItem("user", JSON.stringify(auth))
            dispatch(userAuthAction(auth))
            dispatch(setAuth(true))
            dispatch(isPreload(false))
            navigate("/today")
        })
        .catch(err => {
            
            navigate("/login")
            dispatch(setError({isError: true, errorMessage: "Такого пользователя не существует"}))
            dispatch(isPreload(false))
        })
    }
}


export const fetchAnimalToday = () => {
    return function(dispatch) {
        dispatch(isPreload(true))
        apiToken.get('https://acits-test-back.herokuapp.com/api/executions/today/')
        .then(json => {
            localStorage.setItem("animalsToday", JSON.stringify(json.data.results))
            dispatch(getAnimal(json.data.results))
            dispatch(isPreload(false))
        })
        .catch(err => {
            dispatch(setError({isError: true, errorMessage: "Произошла ошибка сервера"}))
            dispatch(isPreload(false))
        })
        
    }
}

export const AllAnimalsFromApi = (limit = 2, offset = 0) => {
    return function(dispatch) {
        dispatch(isPreload(true))
        apiToken.get('https://acits-test-back.herokuapp.com/api/animals/', {
            params: {
                limit: limit,
                offset: offset
            }
        })
        .then(json => {
            console.log(json.data.results)
            localStorage.setItem("AllAnimals", JSON.stringify(json.data.results))
            dispatch(setAnimals(json.data.results))
            dispatch(isPreload(false))
        })
        .catch(err => {
            console.log(err)
            dispatch(setError({isError: true, errorMessage: "Произошла ошибка сервера"}))
            dispatch(isPreload(false))
        })
    }
}
export const AllAnimalsPagination = (limit) => {
    return function(dispatch) {
        dispatch(isPreload(true))
        apiToken.get('https://acits-test-back.herokuapp.com/api/animals/')
        .then(json => {
            const count = json.data.results.length;
            console.log(json.data.results)
            const pages = count%limit !== 0 ? ((count - count%limit) / limit) + 1 : count / limit;
            const cardsLastPage = count%limit !== 0 ? count%limit : limit;
            const pagesArray = [];
            for (let i = 0; i < pages; i++) {
                pagesArray.push({isActive: i === 0 ? true : false, pageNumber: i + 1})
            }
            dispatch({type: "SET__PAGINATION", payload: count})
            dispatch({type: "SET__PAGINATION__ACTIVECOUNT", payload: pages})
            dispatch({type: "SET__PAGINATION__CARDSLASTPAGE", payload: cardsLastPage})
            dispatch({type: "SET__PAGINATION__ARRAY", payload: pagesArray})
            dispatch(isPreload(false))
        })
        .catch(err => {
            console.log(err)
            dispatch(setError({isError: true, errorMessage: "Произошла ошибка сервера"}))
            dispatch(isPreload(false))
        })
    }
}
