import { ChangeEvent, FormEvent, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

import "../FormPage.css";
import { useAuth } from "../../../hooks/useAuth";
import { registerPayload } from "../../../models/User";

export function RegisterPage() {
  const [formData, setFormData] = useState<registerPayload>({
    email: "",
    password: "",
    username: "",
  });
  const [passwordToggle, setPasswordToggle] = useState<boolean>(true);
  const { register, loading } = useAuth();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div className="FormContainer">
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            disabled={loading}
            type="text"
            placeholder="Username123"
            id="username"
            value={formData["username"]}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            disabled={loading}
            type="email"
            id="email"
            placeholder="Username123@gmail.com"
            value={formData["email"]}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            disabled={loading}
            type={passwordToggle ? "password" : "text"}
            id="password"
            placeholder={passwordToggle ? "******" : "abc123"}
            value={formData["password"]}
            onChange={handleChange}
          />
          {passwordToggle ? (
            <IoEye
              size={"18px"}
              style={{
                position: "absolute",
                right: "12px",
                bottom: "8px",
                cursor: "pointer",
              }}
              onClick={() => {
                setPasswordToggle((prev) => !prev);
              }}
            />
          ) : (
            <IoEyeOff
              size={"18px"}
              style={{
                position: "absolute",
                right: "12px",
                bottom: "8px",
                cursor: "pointer",
              }}
              onClick={() => {
                setPasswordToggle((prev) => !prev);
              }}
            />
          )}
        </label>
        <input type="submit" value="Register" disabled={loading} />
        <p className="ExtraLink">
          Already have an account?<a href="/login">Login</a>
        </p>
      </form>
      {/* <ProviderButton  /> */}
      {/* <p>{error}</p> */}
    </div>
  );
}
