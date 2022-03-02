import './Card.css';
import { useDispatch, useSelector } from 'react-redux';
export const Card = (item) => {
    const ActiveAnimal = item.animal.animal;
    const popup = item.popup;
    const dispatch = useDispatch()

    const filterTime = () => {
        let time = item.animal.time;
        let count = 0;
        let string = [];
        for (let i = 0; i < time.length; i++) {
            if (time[i] === ":") {
                count++;
            }
            if (count <= 1) {
                string.push(time[i])
            } 
        }
        return string.join("");
    }
    const handleClickOpenPopup = (popup, item) => {

        let el = popup.current;
        el.style.display = "flex";
        setTimeout(function() {
            el.classList.add("popup--active");
        }, 300)
        console.log()
        dispatch({type: "SET_ANIMAL_TODAY", payload: item})

    }
 
    return (
        <li className="animals__card">
            <button className="animals__button" onClick={() => handleClickOpenPopup(popup, ActiveAnimal)}>{ActiveAnimal.spec.name} : {ActiveAnimal.name}</button>
            <p className="animals__text">{item.animal.type} в {filterTime()}</p>
            
        </li>
    )
}