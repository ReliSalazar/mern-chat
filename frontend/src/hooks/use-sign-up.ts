import { useState } from "react";
import { toast } from "react-hot-toast";
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
          fullName: fullName.trim(),
          username: username.trim(),
          password: password.trim(),
          confirmPassword: confirmPassword.trim(),
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
  const emptyFullName = fullName.trim() === "";
  const emptyUsername = username.trim() === "";
  const emptyPassword = password.trim() === "";
  if (emptyFullName || emptyUsername || emptyPassword) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password.trim() !== confirmPassword.trim()) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.trim().length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }

  return true;
}

export default useSignUp;
