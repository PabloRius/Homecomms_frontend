import axios, { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import {
  loginFail,
  loginStart,
  loginSuccess,
  registerStart,
  registerFail,
  registerSuccess,
  logout as storeLogout,
  appState,
} from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

import { loginPayload, registerPayload } from "../models/User";

export function useAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(
    (state: { user: appState }) => state.user
  );
  const register = async (registerData: registerPayload) => {
    try {
      dispatch(registerStart());
      const res = await axios.post(
        "http://localhost:5211/api/auth/register",
        registerData
      );
      if (res.status === StatusCodes.OK) {
        dispatch(registerSuccess());
        navigate("/login");
      }
    } catch (err) {
      if (isAxiosError(err)) {
        dispatch(registerFail(ReasonPhrases.INTERNAL_SERVER_ERROR));
      } else {
        console.error(err);
        dispatch(registerFail(`Error during register: ${err}`));
      }
    }
  };
  const login = async (loginData: loginPayload) => {
    try {
      dispatch(loginStart());
      const res = await axios.post(
        "http://localhost:5211/api/auth/login",
        loginData,
        { withCredentials: true }
      );
      const data = await res.data;

      if (data) {
        dispatch(loginSuccess(data));
        navigate("/");
      }
    } catch (err) {
      if (isAxiosError(err)) {
        if (err.status === StatusCodes.UNAUTHORIZED) {
          dispatch(loginFail("Invalid email or password"));
        } else {
          dispatch(loginFail("Internal Server Error"));
        }
      } else {
        console.error(err);
        dispatch(loginFail(`Error during login: ${err}`));
      }
    }
  };
  const logout = async () => {
    try {
      dispatch(storeLogout());
    } catch (err) {
      console.error("Error on Logout");
    } finally {
      navigate("/");
    }
  };

  return { register, login, logout, error, loading };
}
