import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../../store/asyncActions/customers";
import { useRef } from "react";
import { Button, Container, Input, Section } from '../../UI/UI.js'
import { useNavigate, Navigate } from "react-router-dom";
import { Preloader } from "../../UI/preloader/Preloader";

export default function LoginPage() {
    const dispatch = useDispatch();
    const inputName = useRef();
    const inputPass = useRef();
    const navigate = useNavigate();
    const errorState = useSelector(state => state.authReducer.errors)
    const isPreload = useSelector(state => state.preloaderReducer.isPreload)
    function checkFields(name, pass) {
        if (name === "" && pass === "") {
            return { isError: true, errorMessage: "Заполните поля" }
        } else if (name === "") {
            return { isError: true, errorMessage: "Заполните поле имя" }
        } else if (pass.length < 5) {
            if (pass === "") {
                return { isError: true, errorMessage: "Заполните поле пароля" }
            } else {
                return { isError: true, errorMessage: "Недостаточно количество символов" }
            }
        } else {
            return { isError: false, errorMessage: "" }
        }
    }
    function getUser(e) {
        e.preventDefault();
        let nameVal = inputName.current.value;
        let passVal = inputPass.current.value;
        let error = checkFields(nameVal, passVal);

        dispatch({ type: "SET_ERROR", payload: error })
        if (error.isError === false) {
            sendFetch(nameVal, passVal)
        }
    }
    function sendFetch(name, pass) {
        dispatch(userAuth(
            {
                login: name,
                password: pass
            },
            navigate
        ))
        name = "";
        pass = "";
    }
    return (
        !localStorage.getItem("user") ?
        <Section className="login">
            <Container className="login__container">
                {isPreload && <Preloader />}
                <form action="" className="login__form">
                    <Input className="login__field" placeholder="Имя*" type="text" inputref={inputName} />
                    <Input className="login__field" placeholder="Пароль*" type="password" inputref={inputPass} />
                    <Button className="login__btn" type="submit" onClick={getUser}>Войти</Button>
                    {errorState.isError && <p>{errorState.errorMessage}</p>}
                </form> 
       
            </Container>
        </Section>
        :
        <Navigate to="/today" />
    )
}