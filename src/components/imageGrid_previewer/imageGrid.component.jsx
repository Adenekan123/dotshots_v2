import React, { useCallback, useState, useContext } from "react";
import ImageViewer from "react-simple-image-viewer";

import { PictureContext } from "../../contexts/pictures.context";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  CircularProgress,
  IconButton,
  Avatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
const Photographer = ({ photographer, url }) => (
  <ImageListItemBar
    actionIcon={
      <IconButton>
        <Avatar>
          <AccountCircleIcon color={"info"} />
        </Avatar>
      </IconButton>
    }
    title={
      <a
        href={url}
        target="_blank"
        style={{ color: "#fff", textDecoration: "none" }}>
        {"By: " + photographer}
      </a>
    }
    sx={{ display: "none" }}
  />
);

const reducedImgs = (items) =>
  items.reduce((acc, item) => {
    return [...acc, item.src.original];
  }, []);

function ImageGrid({ items }) {
  const { loadingRef, isLoading } = useContext(PictureContext);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <ImageList variant="masonry" cols={4} gap={8}>
        {items && items.length
          ? items.map(
              ({ id, alt, src, photographer, photographer_url }, index) => (
                <Box key={id} onClick={() => openImageViewer(index)}>
                  <ImageListItem
                    key={id + alt}
                    sx={{
                      "&:hover .MuiImageListItemBar-root": { display: "flex" },
                    }}>
                    {photographer && photographer_url && (
                      <Photographer
                        photographer={photographer}
                        url={photographer_url}
                      />
                    )}

                    <img
                      src={`${src.landscape}?w=248&fit=crop&auto=format`}
                      srcSet={`${src.portrait}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={alt}
                      loading="lazy"
                    />
                  </ImageListItem>
                </Box>
              )
            )
          : ""}
      </ImageList>
      <Box
        ref={loadingRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          paddingBottom: "60px",
        }}>
        <CircularProgress color={"info"} />
      </Box>

      {isViewerOpen && (
        <ImageViewer
          src={reducedImgs(items)}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          style={{ zIndex: 1000 }}
        />
      )}
    </>
  );
}

export default ImageGrid;
