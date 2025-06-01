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
  const [User, setUser] = useState<User>({
    username: "tomy",
  });

  const register = (user: UserWithCredentials) => {
    console.log(
      "register:",
      user.username + " with password: " + user.password
    );
    toast.success("Registered successfully!");
    setUser(user);
  };

  const login = (user: UserWithCredentials) => {
    console.log("login:", user.username + " with password: " + user.password);
    setUser(user);
    toast.success("Logged in successfully!");
  };

  const logout = () => {
    console.log("logout:", User.username);
    setUser({ username: "" });
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
