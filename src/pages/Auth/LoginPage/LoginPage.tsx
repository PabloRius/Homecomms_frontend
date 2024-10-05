import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../../../config/supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useAuth } from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export function LoginPage() {
  const { user } = useAuth();
  return user ? (
    <Navigate to="/"></Navigate>
  ) : (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      view="sign_in"
      providers={["google"]}
    />
  );
}
