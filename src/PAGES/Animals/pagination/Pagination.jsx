import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllAnimalsFromApi, AllAnimalsPagination } from "../../../store/asyncActions/customers";
import "./Pagination.css";

export const Pagination = ({...props}) => {
    const dispatch = useDispatch();
    const pagList = useRef();
    const pagination = useSelector(state => state.AllAnimalsReducer.pagination);
    const paginationArray = useSelector(state => state.AllAnimalsReducer.pagination.paginationArray);
    const handlePagination = (event,index) => {
        // dispatch({type: "SET__PAGINATION", payload: num})
        let element = event.target;
        let count = index === pagination.activecount ?  pagination.cardsLastPage : index * pagination.limit; 
        dispatch(AllAnimalsFromApi(pagination.limit,  count))
        let newArray = paginationArray.map((item, num) => {
            num === index ? item.isActive = true : item.isActive = false
            return item;
        });
        dispatch({type: "SET_PAGINATION_ARRAY", payload: newArray})
    }
    const getPaginationContent = list => {
        let content = [];
        for(let i = 0; i < list.length; i++) {
            content.push(
                <li className="allanimals__pagination__item"  key={i}>
                    <button className={`allanimals__pagination__btn ${list[i].isActive ? "active" : ""}`} onClick={(e) => handlePagination(e,i)}>{list[i].pageNumber}</button>
                </li>
            )
        }
        return content;
    }
    useEffect(() => {
        dispatch(AllAnimalsPagination(pagination.limit));
    }, [])
    return (
        <ul className="allanimals__pagination" ref={pagList}>
            {getPaginationContent(paginationArray)}

        </ul>
    )
}