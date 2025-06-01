import { useState, type ReactNode } from "react";
import { UserContext, type UserContextType } from "@/context/UserContext";
import type { User, UserWithCredentials } from "@/lib/interfaces";
import { toast } from "sonner";

interface UserContextComponentProps {
  children: ReactNode;
}

const UserContextComponent: React.FC<UserContextComponentProps> = ({
  children,
}) => {
  const [User, setUser] = useState<User | null>(null);

  const register = (user: UserWithCredentials) => {
    if (User) {
      toast.error("You are already logged in!");
      return;
    }
    console.log(
      "register:",
      user.username + " with password: " + user.password
    );
    toast.success("Registered successfully!");
    setUser(user);
  };

  const login = (user: UserWithCredentials) => {
    if (User) {
      toast.error("You are already logged in!");
      return;
    }
    console.log("login:", user.username + " with password: " + user.password);
    setUser(user);
    toast.success("Logged in successfully!");
  };

  const logout = () => {
    if (!User) {
      toast.error("You are not logged in!");
      return;
    }
    setUser(null);
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
