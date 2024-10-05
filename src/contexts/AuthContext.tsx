import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { AuthError, User } from "@supabase/supabase-js";
import { supabase } from "../config/supabaseClient";
import { UserInfo } from "../models/UserInfo";

interface AuthContextType {
  user: User | null;
  userInfo: UserInfo | null;
  loading: boolean;
  error: AuthError | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AuthError | null>(null);

  const fetchUserInfo = async (userId: string, token: string) => {
    try {
      const response = await axios.get<UserInfo>(
        `http://localhost:5000/api/users/${userId}?mongo_id=false`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUserInfo(response.data);
    } catch (err) {
      console.error(`Error fetching user info: ${err}`);
      setUserInfo(null);
    }
  };

  useEffect(() => {
    const getSession = async () => {
      try {
        setLoading(true);
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (error) throw error;
        setUser(session?.user ?? null);

        if (session?.user && session.access_token) {
          await fetchUserInfo(session.user.id, session.access_token);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError({ message: err.message } as AuthError);
        } else {
          setError({ message: "Ocurrió un error desconocido" } as AuthError);
        }
      } finally {
        setLoading(false);
      }
    };
    getSession();

    const { data: AuthListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user ?? null);
        if (session?.user && session.access_token) {
          await fetchUserInfo(session.user.id, session.access_token);
        } else {
          setUserInfo(null);
        }
      }
    );
    return () => AuthListener.subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError({ message: err.message } as AuthError);
      } else {
        setError({ message: "Ocurrió un error desconocido" } as AuthError);
      }
    } finally {
      setLoading(false);
    }
  };
  const signUp = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      if (data.user && data.session?.access_token) {
        await axios.post(
          `http://localhost:5000/api/users`,
          { id: data.user.id, email: data.user.email },
          {
            headers: {
              Authorization: `Bearer ${data.session.access_token}`,
              "Content-Type": "application/json",
            },
          }
        );
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError({ message: err.message } as AuthError);
      } else {
        setError({ message: "Ocurrió un error desconocido" } as AuthError);
      }
    } finally {
      setLoading(false);
    }
  };
  const signOut = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUserInfo(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError({ message: err.message } as AuthError);
      } else {
        setError({ message: "Ocurrió un error desconocido" } as AuthError);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, userInfo, loading, error, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  return context;
};
