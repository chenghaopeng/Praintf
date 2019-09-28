import * as SessionAPI from "../service/SessionAPI";
import { SessionType } from "../reducer/SessionReducer";

export const loginAction = (body : SessionAPI.loginBody) => async (dispatch : Function) => {
  const res = await SessionAPI.login(body);
  dispatch({
    type: SessionType.LOGIN,
    payload: res.data,
  });
}