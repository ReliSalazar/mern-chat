import React from "react";
import SendIcon from "../icons/send";

interface ComposeMessageProps {
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
  loading?: boolean;
  placeholder?: string;
}

const ComposeMessage: React.FC<ComposeMessageProps> = ({
  value,
  onChange,
  onEnter,
  loading = false,
  placeholder = "Message",
}) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        type="text"
        className="grow"
        placeholder={placeholder}
        value={value}
        disabled={loading}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onEnter()}
        autoFocus
      />
      {loading ? (
        <span className="loading loading-spinner w-4 h-4" />
      ) : (
        <SendIcon className="w-4 h-4 opacity-70" />
      )}
    </label>
  );
};

export default ComposeMessage;
