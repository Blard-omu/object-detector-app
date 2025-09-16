"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { RegisterFormInputs } from "@/app/(auth)/register/register";

interface User {
  id: string;
  username: string;
  email: string;
  role: "admin" | "use" | "super_admin";
}

interface AuthState {
  user: User | null;
  token: string | null;
}

interface ErrorResponse {
  message?: string;
}


interface AuthContextType {
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
  login: (email: string, password: string) => Promise<void>;
  fetchUserById: (id: string) => Promise<User>;
  signup: (formData: RegisterFormInputs) => Promise<void>;
  logout: () => void;
  ProtectedRoute: ({ children }: { children: ReactNode }) => React.JSX.Element;}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    token: null,
  });

  const router = useRouter();

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const parsed = JSON.parse(storedAuth);
      setAuth(parsed);
    }
  }, []);

  useEffect(() => {
    if (auth.token) {
      localStorage.setItem("auth", JSON.stringify(auth));
      axios.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`;
    }
  }, [auth]);

  axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;
  axios.defaults.headers.common["Content-Type"] = "application/json";

  const fetchUserById = async ( id: string): Promise<User> => {
    const { data } = await axios.get(`/user/${id}`);
    return data;
  };

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const { data } = await axios.post("/auth/login", { email, password });
      if (data?.token) {
        setAuth({ user: data.user, token: data.token });
        localStorage.setItem("auth", JSON.stringify({ user: data.user, token: data.token }));
        Cookies.set("token", data.token);
      } else {
        throw new Error("Login failed");
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      const responseData = axiosError.response?.data as ErrorResponse;
    
      throw new Error(responseData?.message || axiosError.message || "Login failed");
    }
  };

  const signup = async (formData: RegisterFormInputs): Promise<void> => {
    try {
      const { data } = await axios.post("/auth/register", formData);
      if (data?.token) {
        setAuth({ user: data.user, token: data.token });
        localStorage.setItem("auth", JSON.stringify({ user: data.user, token: data.token }));
        Cookies.set("token", data.token);
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      const responseData = axiosError.response?.data as ErrorResponse;
    
      throw new Error(responseData?.message || axiosError.message || "Signup failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth({ user: null, token: null });
    router.push("/login");
  };

  const ProtectedRoute = ({ children }: { children: ReactNode }): React.JSX.Element => {
    if (!auth.token) {
      if (typeof window !== "undefined") router.push("/");
      return <></>;
    }
    return <>{children}</>;
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, login, signup, logout, ProtectedRoute, fetchUserById }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
