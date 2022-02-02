import { Box, Dialog, makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { useContext } from "react";
import Chat from "./chat/Chat";
import EmptyChat from "./chat/EmptyChat";
import { UserContext } from "../context/UserProvider";
import Menu from "./menu/Menu";

const useStyles = makeStyles({
  component: { display: "flex" },
  leftComponent: { minWidth: 380 },
  rightComponent: {
    borderLeft: "1px solid rgba(0,0,0,0.14)",
    width: "73%",
    minWidth: 300,
    height: "100%",
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    width: "91%",
    boxShadow: "none",
    borderRadius: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};

const ChatBox = ({ classes }) => {
  const className = useStyles();
  const { person } = useContext(UserContext);

  return (
    <>
      <Dialog
        open={true}
        BackdropProps={{ style: { backgroundColor: "unset" } }}
        classes={{ paper: classes.dialogPaper }}
      >
        <Box className={className.component}>
          <Box className={className.leftComponent}>
            <Menu />
          </Box>
          <Box className={className.rightComponent}>
            {Object.keys(person).length ? <Chat /> : <EmptyChat />}
            {/* <Chat /> */}
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default withStyles(style)(ChatBox);
