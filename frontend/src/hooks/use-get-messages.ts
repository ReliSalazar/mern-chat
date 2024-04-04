import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useConversation from "../store/use-conversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      if (!selectedConversation?._id) {
        return;
      }

      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`, {
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

        setMessages(data ?? []);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
