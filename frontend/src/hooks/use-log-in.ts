import { useState } from "react";
import { toast } from "react-hot-toast";
import { trim } from "../utils";
import { useAuthContext } from "../context/auth-context";

interface logInData {
  username: string;
  password: string;
}

const useLogIn = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logIn = async (logInData: logInData) => {
    const { username, password } = logInData;
    const success = handleInputErrors(username, password);

    if (!success) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: trim(username),
          password: trim(password),
        }),
      });

      const { data, message, success } = await res.json();

      if (!success) {
        toast.error(message);
        return;
      }

      localStorage.setItem("rs-chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, logIn };
};

const handleInputErrors = (username: string, password: string) => {
  const emptyUsername = trim(username) === "";
  const emptyPassword = trim(password) === "";

  if (emptyUsername || emptyPassword) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
};

export default useLogIn;
