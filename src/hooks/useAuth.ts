import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import { AuthError, User } from "@supabase/supabase-js";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AuthError | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        setError(error ?? null);
      } catch (err) {
        setError(new AuthError("System error during session fetching"));
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return { user, loading, error };
}
