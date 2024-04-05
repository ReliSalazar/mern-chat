import { createContext, useContext, useEffect, useState } from "react";

export const SocketContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {}, []);

  return (
    <SocketContext.Provider value={null}>{children}</SocketContext.Provider>
  );
};
