import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ImageSearchOutlined from "@mui/icons-material/ImageSearchOutlined";
import VideoLibraryOutlined from "@mui/icons-material/VideoLibraryOutlined";

const BottomBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("/");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue, { replace: true });
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
      }}
      elevation={3}>
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}>
        <BottomNavigationAction
          sx={{
            "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
              color: "#302f2f",
            },
          }}
          label="Photos"
          value="/"
          icon={<ImageSearchOutlined color="info" />}
        />
        <BottomNavigationAction
          sx={{
            "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
              color: "#302f2f",
            },
          }}
          label="Videos"
          value="/videos"
          icon={<VideoLibraryOutlined color="info" />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomBar;
