import { Navigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

import "./SignUpPage.css";
import { useState } from "react";
// import { ProviderButton } from "../../../components/Buttons/ProviderButton/ProviderButton";

export function SignUp() {
  const { user, signUp } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
    } catch (err) {
      setError(`Error signing up ${err}`);
    }
  };

  return user ? (
    <Navigate to="/"></Navigate>
  ) : (
    <div className="FormContainer">
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input
            type="email"
            placeholder="12345@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input type="button" value="Sign In" />
      </form>
      {/* <ProviderButton  /> */}
      <p>Forgot password?</p>
      <p>{error}</p>
    </div>
  );
}
