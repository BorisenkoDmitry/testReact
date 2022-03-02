const defState = {
    isLoginIn: false,
    errors: {
        isError: false,
        errorMessage: ""
    }
}

export const authReducer = (state = defState, action) => {
    switch (action.type) {
        case "SET_AUTH":
            return {
                ...state,
                isLoginIn: action.payload
            }

        case "SET_ERROR":
            return {
                ...state,
                errors: {
                    isError: action.payload.isError,
                    errorMessage: action.payload.errorMessage
                }
            }
        default:
            return state;
    }

}

export const setAuth = (payload) => ({ type: "SET_AUTH", payload })
export const setError = (payload) => ({ type: "SET_ERROR", payload })