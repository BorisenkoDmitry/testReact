const myState = {
    animals: [],
    isActiveAnimal: {},
    pagination: {
        count: 0,
        limit: 5,
        activecount: 0,
        cardsLastPage: 0,
        paginationArray: []
    }
};

export const AllAnimalsReducer = (state = myState, action) => {
    switch (action.type) {
        case "SET_ANIMALS":
            return {...state, animals: [...action.payload]};
        case "SET_ONE_ANIMAL":
            return {...state, isActiveAnimal: {...action.payload}}
        case "SET__PAGINATION":
            return {...state, pagination: {...state.pagination, count: action.payload}}
        case "SET__PAGINATION__ACTIVECOUNT":
            return {...state, pagination: {...state.pagination, activecount: action.payload}}
        case "SET__PAGINATION__CARDSLASTPAGE":
            return {...state, pagination: {...state.pagination, cardsLastPage: action.payload}}
        case "SET__PAGINATION__ARRAY":
            return {...state, pagination: {...state.pagination, paginationArray: action.payload}}
        default:
            return state;
    }
}


export const setAnimals = (payload) => ({type: "SET_ANIMALS", payload}); 