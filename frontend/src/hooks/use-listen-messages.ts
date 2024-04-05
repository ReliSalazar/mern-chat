import { useEffect } from "react";
import { useSocketContext } from "../context/socket-context";
import useConversation from "../store/use-conversation";
import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("new-message", (newMessage) => {
      newMessage.shouldShake = true;
      const audio = new Audio(notificationSound);
      audio.play();
      setMessages([...messages, newMessage]);
    });

    return () => {
      socket?.off("new-message");
    };
  }, [messages, setMessages, socket]);
};

export default useListenMessages;
