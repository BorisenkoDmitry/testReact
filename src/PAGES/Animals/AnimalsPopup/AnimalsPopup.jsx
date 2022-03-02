import "./AnimalsPopup.css";
import { ButtonClose } from "./BtnPopupClose/ButtonClose";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
export const AnimalsPopup = ({ getElementPopup, animal }) => {
    const popup = useRef(null);
    console.log(animal)
    const dispatch = useDispatch();
    const handleClickPopup = (e) => {
        let el = popup.current;
        el.classList.remove("popup--active");
        setTimeout(function () {
            el.style.display = "none";
            dispatch({type: "SET_ONE_ANIMAL", payload: {}})
        }, 300) 
    }
    const ageText = (year) => {
        if (year < 5) {
            if (year === 1) {
                return "год";
            } else {
                return "года"
            }
        } else {
            return "лет"
        }
    }
    useEffect(() => {
        getElementPopup(popup)
    }, [])
    return (
        <div className="allanimals__popup" ref={popup}>
            <div className="allanimals__popup__content">
                <ButtonClose className="allanimals__btn__close" onClick={handleClickPopup} />
                {Object.keys(animal).length === 0 ?
                    <p>Пусто</p>
                    :
                    <div className="allanimals__popup__info">
                        <h3>{animal.name}</h3>
                        <p>Порода: <b>{animal.spec.name}</b></p>
                        {animal.age != 0 && <p>Возраст: <b>{animal.age} {ageText(animal.age)}</b></p>}
                        {animal.height && <p>Рост: <b>{animal.height} {animal.heightUnit}</b></p> }
                        {animal.weight && <p>Вес: <b>{animal.weight} {animal.weightUnit}</b></p> }
                    </div>
                }   
            </div>
        </div>
    )
}