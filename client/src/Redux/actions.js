import {loginStart,loginSuccess,loginFailure,logoutStart,logoutSuccess} from "./reducers";
import { publicRequest, userRequest } from "../Axios/requestMethods";

export const login = async (dispatch, user) => {

  dispatch(loginStart());
  const res = await publicRequest.post("/auth/login", user);
  
  try {
    dispatch(loginSuccess(res.data)); 
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

export const logout = async (dispatch, user) => {

  dispatch(logoutStart());
  try {
    const res = await userRequest.post("/auth/logout");
    console.log(res);
    dispatch(logoutSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};