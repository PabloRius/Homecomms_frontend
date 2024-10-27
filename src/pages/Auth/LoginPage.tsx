import { ChangeEvent, FormEvent, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

import { useAuth } from "../../hooks/useAuth";
import { loginPayload } from "../../models/User";

export function LoginPage() {
  const [formData, setFormData] = useState<loginPayload>({
    email: "",
    password: "",
  });
  const [passwordToggle, setPasswordToggle] = useState<boolean>(true);
  const { login, loading, error } = useAuth();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="LoginPage">
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Sign In" disabled={loading} />
        <p className="ExtraLink">
          <a>Forgot password?</a>
        </p>
        <p className="ExtraLink">
          Don't have an account?<a href="/register">Register</a>
        </p>
      </form>
      {/* <ProviderButton  /> */}
      <p>{error}</p>
    </div>
  );
}
