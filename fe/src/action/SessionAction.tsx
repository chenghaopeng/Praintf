import * as SessionAPI from "../service/SessionAPI";

export const SessionActionType = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  LOGOUT: "LOGOUT",
  TOLOGIN: "TOLOGIN",
  TOREGISTER: "TOREGISTER",
}

export const loginAction = (body : SessionAPI.loginBody) => async (dispatch : Function) => {
  const res = await SessionAPI.login(body);
  dispatch({
    type: SessionActionType.LOGIN,
    payload: res.data,
  });
}

export const registerAction = (body : SessionAPI.registerBody) => async (dispatch : Function) => {
  const res = await SessionAPI.register(body);
  dispatch({
    type: SessionActionType.REGISTER,
    payload: res.data,
  });
}

export const logoutAction = (body : SessionAPI.logoutBody) => async (dispatch : Function) => {
  await SessionAPI.logout(body);
  dispatch({
    type: SessionActionType.LOGOUT,
  });
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