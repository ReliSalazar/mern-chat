import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/auth-context";

const useLogOut = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logOut = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { message, success } = await res.json();

      if (!success) {
        toast.error(message);
        return;
      }

      localStorage.removeItem("rs-chat-user");
      setAuthUser(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, logOut };
};

export default useLogOut;
