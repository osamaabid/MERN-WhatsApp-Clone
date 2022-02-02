import { Box } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getConversation } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const Chat = () => {
  const { person } = useContext(UserContext);
  const { account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.googleId,
        receiverId: person.googleId,
      });
      console.log("this", data);
      setConversation(data);
    };
    getConversationDetails();
  }, [person.googleId]);
  return (
    <>
      <Box>
        <ChatHeader />
        <Messages conversation={conversation} person={person} />
      </Box>
    </>
  );
};

export default Chat;
