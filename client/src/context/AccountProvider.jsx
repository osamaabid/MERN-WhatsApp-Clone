import React, { createContext, useState, useRef } from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  //Whenever we wrap a component within another component, we need to extract child component
  const [account, setAccount] = useState();
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);

  return (
    <>
      <AccountContext.Provider
        value={{
          account,
          setAccount,
          socket,
          setActiveUsers,
          activeUsers,
          newMessageFlag,
          setNewMessageFlag,
        }}
      >
        {children}
      </AccountContext.Provider>
    </>
  );
};

export default AccountProvider;
