import "./today.css";
import { fetchAnimalToday } from "../../store/asyncActions/customers";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Section } from "../../UI/UI";
import { Preloader } from "../../UI/preloader/Preloader";
import { Navigate } from "react-router-dom";
import { Card } from "./card/Card";
import { AnimalsPopup } from "../Animals/AnimalsPopup/AnimalsPopup";
export default function TodayPage() {
    const dispatch = useDispatch()
    const isPreload = useSelector(state => state.preloaderReducer.isPreload)
    const animals = useSelector(state => state.todayAnimalReducer.animals)
    const isActiveAnimal = useSelector(state => state.todayAnimalReducer.isActiveAnimal)
    const [popup, getPopup] = useState()
    const getElementPopup = (ref) => {
        getPopup(ref);
    }

    useEffect(() => {
        dispatch(fetchAnimalToday(JSON.parse(localStorage.getItem("user")).token))
    }, [])

    return (
        !localStorage.getItem("user") ? <Navigate to="/login" />
            :
            <Section>
                <Container>
                    <AnimalsPopup  getElementPopup={getElementPopup} animal={isActiveAnimal}/>
                    <ul className="animals__list">
                        {isPreload ? <Preloader /> :
                            animals.map(item => {
                                return (
                                    <Card popup={popup} animal={item} key={item.id}/>
                                )
                            })
                        }
                    </ul>
                </Container>
            </Section>
    )
}