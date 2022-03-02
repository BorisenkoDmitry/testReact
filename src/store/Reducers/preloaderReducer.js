const mystate = {
    isPreload: false
}

export const preloaderReducer = (state = mystate, action) => {
    switch (action.type) {
        case "IS_PRELOAD":
            return {
                ...state,
                isPreload: action.payload
            }
        default:
            return state;
    }

}

export const isPreload = (payload) => ({type: "IS_PRELOAD", payload})