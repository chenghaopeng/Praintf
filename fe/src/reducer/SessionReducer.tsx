export const SessionType = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  LOGOUT: "LOGOUT",
}

const initalState = {
  token: "",
  nickname: "",
}

const SessionReducer = (state = initalState, action : Action) => {
  switch(action.type) {
    case SessionType.LOGIN:
      return action.payload;
    default:
      return state;
  }
}

export default SessionReducer;