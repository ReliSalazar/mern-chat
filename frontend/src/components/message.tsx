import React from "react";

interface MessageProps {
  sender: boolean;
}

const Message: React.FC<MessageProps> = ({ sender }) => {
  return (
    <div className={`chat ${sender ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt=""
            src="https://api.dicebear.com/8.x/adventurer/svg?seed=john"
          />
        </div>
      </div>
      <div
        className={`chat-bubble ${
          sender ? "chat-bubble-primary" : "chat-bubble-neutral"
        }`}
      >
        It was said that you would, destroy the Sith, not join them.
      </div>
    </div>
  );
};

export default Message;
