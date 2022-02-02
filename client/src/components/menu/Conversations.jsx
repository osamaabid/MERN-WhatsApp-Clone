import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getUsers } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";
import Conversation from "./Conversation";

const useStyles = makeStyles({
  component: {
    height: "81vh",
    overflow: "overlay",
  },
});

const Conversations = ({ text }) => {
  const classes = useStyles();
  let [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);
  const id = account.googleId;

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        let data = await getUsers();
        const filteredData = data.filter((user) =>
          user.name.toLowerCase().includes(text.toLowerCase())
        );
        setUsers(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getAllUsers();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account.googleId);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <>
      <Box className={classes.component}>
        {users.map(
          (user) => user.googleId !== id && <Conversation user={user} />
        )}
      </Box>
    </>
  );
};

export default Conversations;
