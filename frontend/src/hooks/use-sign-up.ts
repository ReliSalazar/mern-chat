import { useState } from "react";
import { toast } from "react-hot-toast";
import { trim } from "../utils";
import { useAuthContext } from "../context/auth-context";

interface UserData {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signUp = async (userData: UserData) => {
    const { fullName, username, password, confirmPassword } = userData;
    const success = handleInputErrors(
      fullName,
      username,
      password,
      confirmPassword
    );

    if (!success) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: trim(fullName),
          username: trim(username),
          password: trim(password),
          confirmPassword: trim(confirmPassword),
        }),
      });

      const { data, message, success } = await res.json();

      if (!success) {
        toast.error(message);
        return;
      }

      localStorage.setItem("rs-chat-user", JSON.stringify(data));
      setAuthUser(data);

      toast.success("Sign Up Successful");
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, signUp };
};

function handleInputErrors(
  fullName: string,
  username: string,
  password: string,
  confirmPassword: string
) {
  const emptyFullName = trim(fullName) === "";
  const emptyUsername = trim(username) === "";
  const emptyPassword = trim(password) === "";
  if (emptyFullName || emptyUsername || emptyPassword) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (trim(password) !== trim(confirmPassword)) {
    toast.error("Passwords do not match");
    return false;
  }

  if (trim(password).length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }

  return true;
}

export default useSignUp;
