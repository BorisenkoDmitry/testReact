import "./LoggedIn.css";
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const LoggedIn = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user)
    const LogOut = () => {
        <Navigate to="/login" />
        dispatch({type: "SET_AUTH", payload: false})
        dispatch({type: "USER_AUTH", payload: {
        user: {},
        token: false,
        tokenLive: false
        }})
        localStorage.removeItem("user")
        localStorage.removeItem("animalsToday")
        localStorage.removeItem("AllAnimals")
    }

    return (
        <div className="header__loggedin">
            <span className="header__loggedin__name">{user.firstName + " " + user.lastName}</span>
            <Link className="header__loggedin__link" to="/login" onClick={LogOut}>Выйти</Link>
        </div>
    )
}