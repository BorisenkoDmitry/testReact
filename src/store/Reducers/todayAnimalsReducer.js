const animal = {
  animals: [],
  isActiveAnimal: {}
}
  
  export const todayAnimalReducer = (state = animal, action) => {
    switch (action.type) {
        case "GET_ANIMAL_FROM_API":
            return {...state, animals: [...action.payload]}
        case "SET_ANIMAL_TODAY":
          return {...state, isActiveAnimal: {...action.payload}}
        default:
        return state;
    }
  }

  export const getAnimal = (payload) => ({ type: "GET_ANIMAL_FROM_API", payload })