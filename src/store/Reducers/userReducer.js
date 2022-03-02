
const defState = {
  user: {},
  token: false,
  tokenLive: false
}

export const userReducer = (state = defState, action) => {
  switch (action.type) {
    case "USER_AUTH":
      return {
        user: action.payload.user,
        token: action.payload.token,
        tokenLive: action.payload.tokenLive
      };
    case "TOKEN_TIMEOUT":
      return action.payload ? {
        user: {},
        token: false,
        tokenLive: false
      } : {...state};
    case "UPDATE_STATE_FROM_LOCALSTORAGE":
      return {...action.payload};
    default:
      return state;
  }
}


export const userAuthAction = (payload) => ({ type: "USER_AUTH", payload })
export const tokenTimeoutAction = (payload) => ({type: "TOKEN_TIMEOUT", payload})