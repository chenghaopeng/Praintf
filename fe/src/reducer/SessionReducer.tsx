export const SessionType = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  LOGOUT: "LOGOUT",
  TOLOGIN: "TOLOGIN",
  TOREGISTER: "TOREGISTER",
}

const initalState = {
  session: {
    loged: 0,
    token: "",
    nickname: "",
  }
}

const SessionReducer = (state = initalState, action : Action) => {
  switch(action.type) {
    case SessionType.LOGIN:
      return {session: {...action.payload, loged: 1}};
    case SessionType.TOLOGIN:
      return {session: {...initalState.session, loged: 0}};
    case SessionType.TOREGISTER:
      return {session: {...initalState.session, loged: -1}};
    default:
      return state;
  }
}

export default SessionReducer;