import { useState } from "react";
import axios, { isAxiosError } from "axios";

import { loginPayload, registerPayload } from "../models/User";
import { useNavigate } from "react-router-dom";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export function useAuth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const register = async (registerData: registerPayload) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5211/api/auth/register",
        registerData
      );
      const data = await res.data;
      if (data) navigate("/login");
    } catch (err) {
      if (isAxiosError(err)) {
        setError(ReasonPhrases.INTERNAL_SERVER_ERROR);
      } else {
        console.error(err);
        setError(`Error during register: ${err}`);
      }
    } finally {
      setLoading(false);
    }
  };
  const login = async (loginData: loginPayload) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5211/api/auth/login",
        loginData,
        { withCredentials: true }
      );
      const data = await res.data;
      console.log(data);
      if (data) navigate("/");
    } catch (err) {
      if (isAxiosError(err)) {
        if (err.status === StatusCodes.UNAUTHORIZED) {
          setError("Invalid email or password");
        } else {
          setError("Internal Server Error");
        }
      } else {
        console.error(err);
        setError(`Error during login: ${err}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return { register, login, error, loading };
}
