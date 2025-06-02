import { UserContext, type UserContextType } from "@/context/UserContext";
import type { User, UserWithCredentials } from "@/lib/interfaces";
import { loadUserFromStorage } from "@/lib/utils";
import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface UserContextComponentProps {
  children: ReactNode;
}

const UserContextComponent: React.FC<UserContextComponentProps> = ({
  children,
}) => {
  const navigate = useNavigate();

  const STORAGE_KEY = import.meta.env.VITE_USER_STORAGE_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [User, setUser] = useState<User | null>(() => loadUserFromStorage());

  const persistUser = (userData: User | null) => {
    if (userData) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    setUser(userData);
  };

  const register = async (user: UserWithCredentials) => {
    if (User) {
      toast.error("You are already logged in!");
      return;
    }
    const url = `${BASE_URL}/users/register`;
    toast.loading("Registering user...");
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      toast.dismiss();
      if (!response.ok) {
        const responseData = await response.json();
        toast.error(`Something went wrong: ${responseData.error}`);
        return;
      }
      const res = await response.json();
      persistUser(res);
      navigate("/");
      toast.success("Registered successfully!");
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  const login = async (user: UserWithCredentials) => {
    if (User) {
      toast.error("You are already logged in!");
      return;
    }
    const url = `${BASE_URL}/users/login`;
    toast.loading("Logging in...");
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      toast.dismiss();
      if (!response.ok) {
        const responseData = await response.json();
        toast.error(`Something went wrong: ${responseData.error}`);
        return;
      }
      const res = await response.json();
      persistUser(res);
      navigate("/");
      toast.success("Logged in successfully!");
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  const logout = () => {
    if (!User) {
      toast.error("You are not logged in!");
      return;
    }
    persistUser(null);
    toast.success("Logged out successfully!");
  };

  const exportData: UserContextType = {
    user: User,
    register,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={exportData}>{children}</UserContext.Provider>
  );
};

export default UserContextComponent;
