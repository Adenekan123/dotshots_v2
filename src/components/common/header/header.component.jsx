import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import {
  AccountCircle,
  Camera,
  Mail,
  Notifications,
} from "@mui/icons-material";

import SearchItem from "../../searchItem/searchItem.component";

const UserMemu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="demo-positioned-button"
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

const Header = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        width: "100%",
        position: "sticky",
        top: "0",
        zIndex: 10,
        mb: 1,
      }}>
      <Toolbar
        sx={{
          paddingLeft: "0px!important",
          paddingRight: "0px!important",
          justifyContent: "space-between",
        }}>
        <Stack
          alignItems="center"
          direction={"row"}
          color="black"
          borderRadius={"2px"}>
          <Camera color="error" />
          <Typography variant="body1" marginLeft="2px" fontWeight="bold">
            DotShots
          </Typography>
        </Stack>
        <SearchItem placeholder="Search Images" />
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
              position: "relative",
            },
          }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit">
            <Badge badgeContent={17} color="error">
              <Notifications />
            </Badge>
          </IconButton>

          <UserMemu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
