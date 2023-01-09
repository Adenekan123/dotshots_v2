import React from "react";
import { Link, useMatch } from "react-router-dom";

import { Box, Container, IconButton, useMediaQuery } from "@mui/material";
import { ImageSearchOutlined, VideoLibraryOutlined } from "@mui/icons-material";

import BottomBar from "../../components/common/bottom-bar/bottom-bar.component";
const Navigation = () => {
  const isVideoRoute = useMatch("/videos");
  const matchMobileSize = useMediaQuery("(max-width:900px)");

  return (
    <>
      {!matchMobileSize ? (
        <Box
          className="navigation"
          sx={{
            flexBasis: "100px",
            zIndex: "2",
            bgcolor: "secondary.main",
          }}>
          <Container
            maxWidth="100%"
            className="brands"
            sx={{
              m: 0,
              display: { xs: "none", sm: "block" },
              padding: "10px !important",
            }}>
            <Link to="https://www.pexels.com">
              <img
                src="https://images.pexels.com/lib/api/pexels.png"
                alt="pexel logo"
                height={25}
              />
            </Link>
          </Container>
          <Container
            maxWidth="100%"
            className="routes"
            sx={{ mt: { xs: 0, sm: 20 }, padding: "0px !important" }}>
            <Container
              maxWidth="100%"
              sx={{
                padding: "0px !important",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "row", sm: "column" },
              }}>
              <Link to="/" sx={{ mb: 3 }}>
                <IconButton
                  size="large"
                  color={!isVideoRoute ? "info" : "default"}>
                  <ImageSearchOutlined />
                </IconButton>
              </Link>

              <Link to="/videos">
                <IconButton
                  size="large"
                  color={isVideoRoute ? "info" : "default"}>
                  <VideoLibraryOutlined />
                </IconButton>
              </Link>
            </Container>
          </Container>
        </Box>
      ) : (
        <BottomBar />
      )}
    </>
  );
};

export default Navigation;
