import { useState } from "react";
import { toast } from "react-hot-toast";
import useConversation from "../store/use-conversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (messageData: string) => {
    setLoading(true);

    try {
      const res = await fetch(`/api/messages/send/${selectedConversation?._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageData.trim(),
        }),
      });

      const { data, message, success } = await res.json();

      if (!success) {
        toast.error(message);
        return;
      }

      setMessages([...messages, data]);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
