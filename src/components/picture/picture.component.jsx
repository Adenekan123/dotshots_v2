import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPhotho } from "../../utils/pexel/pexel.utils";
import {
  Container,
  Box,
  Dialog,
  Stack,
  Typography,
  Toolbar,
  Avatar,
  IconButton,
  Grid,
  CircularProgress,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Close } from "@mui/icons-material";

import DownloadBtn from "../download-btn/download-btn.component";

const Picture = () => {
  const navigate = useNavigate();
  const { photoid } = useParams();
  const [photo, setPhoto] = useState(null);
  const [showDialog, setShowDialog] = useState(true);

  const handleClose = () => {
    setShowDialog(false);
    navigate(-1);
  };

  useEffect(() => {
    getPhotho(photoid).then(setPhoto);
  }, [photoid]);
  return (
    <Dialog
      open={showDialog}
      fullWidth
      maxWidth="md"
      onClose={handleClose}
      sx={{ backgroundColor: "transparent" }}>
      <Container
        sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <Box>
          <IconButton onClick={handleClose}>
            <Close color="info" />
          </IconButton>
        </Box>
        <Box sx={{ flex: 1, pb: 2 }}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              p: 0,
              mb: 1,
              flexWrap: "wrap",
            }}>
            <Stack direction="row" alignItems="center">
              <Avatar>
                <PersonIcon color="info" />
              </Avatar>
              {photo && (
                <Typography
                  margin={"20px"}
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() => window.open(photo.photographer_url, "_blank")}>
                  Photo By {photo.photographer}
                </Typography>
              )}
            </Stack>

            {photo && <DownloadBtn options={photo.src} />}
          </Toolbar>
          <Grid
            container
            sx={{ textAlign: "center", overflow: "hiddden" }}
            spacing="0">
            <Grid
              item
              xs={12}
              md={6}
              sx={{ backgroundColor: "secondary.main" }}>
              {photo && photo.src ? (
                <img
                  src={photo.src.large}
                  alt={photo.alt}
                  style={{
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <CircularProgress color="info" />
              )}
            </Grid>
          </Grid>
          {/* <Toolbar sx={{ justifyContent: "flex-end" }}>
            <Button variant="outlined" color="info">
              Share
            </Button>
          </Toolbar> */}
        </Box>
      </Container>
    </Dialog>
  );
};

export default Picture;
