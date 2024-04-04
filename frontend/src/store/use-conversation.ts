import { create } from "zustand";

interface UserType {
  _id: string;
  fullName: string;
  username: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
}

interface MessageType {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

interface ConversationState {
  selectedConversation: UserType | null;
  setSelectedConversation: (conversation: UserType | null) => void;
  messages: MessageType[];
  setMessages: (messages: MessageType[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation: UserType | null) =>
    set(() => ({ selectedConversation: conversation })),
  messages: [],
  setMessages: (messages: MessageType[]) => set(() => ({ messages })),
}));

export default useConversation;
