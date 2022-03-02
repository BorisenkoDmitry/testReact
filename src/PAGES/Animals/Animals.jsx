import "./animals.css";
import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from "react";
import { fetchAnimalToday } from "../../store/asyncActions/customers";
import { Preloader } from "../../UI/preloader/Preloader";
import { AllAnimalsFromApi } from "../../store/asyncActions/customers";
import { Container } from "../../UI/UI";
import { AnimalsPopup } from "./AnimalsPopup/AnimalsPopup";
import { Pagination } from "./pagination/Pagination";
import {gsap} from "gsap";

export default function AnimalsPage() {
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.authReducer.isLoginIn)
    const animals = useSelector(state => state.AllAnimalsReducer.animals)
    const isPreload = useSelector(state => state.preloaderReducer.isPreload)
    const isActiveAnimal = useSelector(state => state.AllAnimalsReducer.isActiveAnimal);
    const limit = useSelector(state => state.AllAnimalsReducer.pagination.limit);

    const [popup, getPopup] = useState()

    useEffect(() => {
        dispatch(AllAnimalsFromApi(limit))
    }, [])
    const getElementPopup = (ref) => {
        getPopup(ref);
    }
    const handleClickOpenPopup = (item) => {
    
        let el = popup.current; 
        el.style.display = "flex";
        setTimeout(function() {
            el.classList.add("popup--active");
        }, 300)
        dispatch({type: "SET_ONE_ANIMAL", payload: item})
    }


    return (
        !localStorage.getItem("user") ? <Navigate to="/login" />
        : 
        <section className="allanimals section">
            <AnimalsPopup getElementPopup={getElementPopup} animal={isActiveAnimal}/>
            <Container>     
                <div className="allanimals__content">
                    { isPreload ? <Preloader /> : animals.map((item, index) => {
                        return(
                            <button className="allanimals__btn" key={item.id} onClick={() => handleClickOpenPopup(item)}>
                                {item.spec.name} : {item.name}
                            </button>
                        )
                    })}
                </div>
                <Pagination count={animals.length}/>
            </Container>
        
        </section>
    )
}