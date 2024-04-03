import React from "react";
import SendIcon from "../icons/send";

interface ComposeMessageProps {
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
  placeholder?: string;
}

const ComposeMessage: React.FC<ComposeMessageProps> = ({
  value,
  onChange,
  onEnter,
  placeholder = "Message",
}) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        type="text"
        className="grow"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onEnter()}
        autoFocus
      />
      <SendIcon className="w-4 h-4 opacity-70" />
    </label>
  );
};

export default ComposeMessage;
