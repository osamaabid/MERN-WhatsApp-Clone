import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../../constants/data";

import {
  Dialog,
  makeStyles,
  withStyles,
  Box,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";

import { addUser } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
  component: { display: "flex" },
  leftComponent: { padding: "56px 0 56px 56px" },
  qrCode: { height: 264, width: 264, padding: "50px 0 0 50px" },
  title: {
    fontSize: 26,
    marginBottom: 25,
    color: "#525252",
    fontFamily:
      "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
    fontWeight: 300,
  },
  list: {
    "&  > *": {
      padding: 0,
      marginTop: 15,
      fontSize: 18,
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    width: "60%",
    marginTop: "12%",
    boxShadow: "none",
    borderRadius: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};

const Login = ({ classes }) => {
  const className = useStyles();

  const url = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";

  const { account, setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    setAccount(res.profileObj);
    await addUser(res.profileObj);
  };
  const onLoginFailure = () => {};
  return (
    <>
      <Dialog
        open={true}
        classes={{ paper: classes.dialogPaper }}
        BackdropProps={{ style: { backgroundColor: "unset" } }}
      >
        <Box className={className.component}>
          <Box className={className.leftComponent}>
            <Typography className={className.title}>
              To use WhatsApp on your computer:
            </Typography>
            <List className={className.list}>
              <ListItem>1. Open WhatsApp on your phone</ListItem>
              <ListItem>
                2. Tap Menu or Settings and select Linked Devices
              </ListItem>
              <ListItem>
                3. Point yout phone to this screen to capture the code
              </ListItem>
            </List>
          </Box>
          <Box style={{ position: "relative" }}>
            <img src={url} alt="qr" className={className.qrCode}></img>
            <Box style={{ position: "absolute", left: "50%", top: "50%" }}>
              <GoogleLogin
                clientId={clientId}
                buttonText=""
                isSignedIn={true}
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={"single_host_origin"}
              />
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default withStyles(style)(Login);
