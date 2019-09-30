export const SessionActionType = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  LOGOUT: "LOGOUT",
  TOLOGIN: "TOLOGIN",
  TOREGISTER: "TOREGISTER",
}

export const loginAction = (payload : any) => async (dispatch : Function) => {
  dispatch({
    type: SessionActionType.LOGIN,
    payload: payload,
  });
  window.localStorage.session = JSON.stringify(payload);
}

export const registerAction = (payload : any) => async (dispatch : Function) => {
  dispatch({
    type: SessionActionType.REGISTER,
    payload: payload,
  });
}

export const logoutAction = () => async (dispatch : Function) => {
  dispatch({
    type: SessionActionType.LOGOUT,
  });
  window.localStorage.removeItem("session");
}

export const toLogin = () => (dispatch : Function) => {
  dispatch({
    type: SessionActionType.TOLOGIN,
  });
}

export const toRegister = () => (dispatch : Function) => {
  dispatch({
    type: SessionActionType.TOREGISTER,
  });
}