import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface UserType {
  _id: string;
  fullName: string;
  username: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
}

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<UserType[]>([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const { data, message, success } = await res.json();

        if (!success) {
          toast.error(message);
          return;
        }

        setConversations(data ?? []);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
