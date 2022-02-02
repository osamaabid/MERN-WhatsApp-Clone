import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
  own: {
    background: "#dcf9c6",
    padding: 5,
    maxWidth: "60%",
    display: "flex",
    borderRadius: 10,
    width: "fit-content",
    wordBreak: "break-word",
    marginLeft: "auto",
  },
  wrapper: {
    background: "#FFFFFF",
    padding: 5,
    maxWidth: "60%",
    display: "flex",
    borderRadius: 10,
    width: "fit-content",
    wordBreak: "break-word",
  },
  text: {
    fontSize: 14,
    padding: "0 25px 0 5px",
  },
  time: {
    fontSize: 10,
    marginTop: "auto",
    wordBreak: "keep-all",
    color: "#919191",
  },
});

const Message = ({ message }) => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);

  const formatDate = (date) => {
    return date < 10 ? "0" + date : date;
  };

  return (
    <>
      <Box
        className={
          account.googleId === message.sender ? classes.own : classes.wrapper
        }
      >
        <Typography className={classes.text}>{message.text}</Typography>
        <Typography className={classes.time}>
          {formatDate(new Date(message.createdAt).getHours())}:
          {formatDate(new Date(message.createdAt).getMinutes())}
        </Typography>
      </Box>
    </>
  );
};

export default Message;
