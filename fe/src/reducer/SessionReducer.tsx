import { SessionActionType } from "../action/SessionAction";

const initialState = {
  session: {
    loged: 0,
    token: "",
    nickname: "",
  }
}

const SessionReducer = (state = initialState, action : Action) => {
  switch(action.type) {
    case SessionActionType.LOGIN:
      return {session: {...action.payload, loged: 1}};
    case SessionActionType.REGISTER:
      return {session: {...initialState.session, loged: -1}};
    case SessionActionType.LOGOUT:
      return {session: {...initialState.session, loged: 0}};
    case SessionActionType.TOLOGIN:
      return {session: {...initialState.session, loged: 0}};
    case SessionActionType.TOREGISTER:
      return {session: {...initialState.session, loged: -1}};
    default:
      return state;
  }
}

export default SessionReducer;