import React, { useState } from "react";
import { CallMissedSharp, MoreVert } from "@material-ui/icons";
import { Menu, MenuItem } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { clientId } from "../../constants/data";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { makeStyles } from "@material-ui/styles";
import InfoDrawer from "../drawer/InfoDrawer";

const useStyles = makeStyles({
  menuItem: { fontSize: 14, padding: "15px 60px 5px 24px", color: "#4A4A4A" },
  logout: {
    border: "none!important",
    boxShadow: "none!important",
    "& > *": { padding: "0px!important" },
  },
});

const HeaderMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { setAccount } = useContext(AccountContext);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const onLogoutSuccess = () => {
    alert("You have been logged out");
    console.clear();
    setAccount("");
  };

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem
          className={classes.menuItem}
          onClick={() => {
            handleClose();
            toggleDrawer();
          }}
        >
          Profile
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
            className={classes.logout}
          ></GoogleLogout>
        </MenuItem>
      </Menu>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default HeaderMenu;
