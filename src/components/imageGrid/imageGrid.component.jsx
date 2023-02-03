import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { PictureContext } from "../../contexts/pictures.context";
import { Toolbar, Grid, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Photographer = ({ photographer, url }) => (
  <Toolbar
    sx={{
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      py: 2,
      zIndex: 4,
      display: "none",
    }}>
    <Typography marginLeft={2}>Photo by: {photographer}</Typography>
  </Toolbar>
);

const ImageGrid = ({ items }) => {
  const { isLoading } = useContext(PictureContext);

  return (
    <>
      <Grid container spacing={2}>
        {items.map(({ id, alt, src, photographer, photographer_url }) => (
          <Grid
            item
            key={id + alt}
            xs={6}
            md={3}
            sx={{
              "&:hover .MuiToolbar-root": { display: "flex" },
              "&:hover img ": { filter: "brightness(60%)" },
            }}>
            {!isLoading ? (
              <Link
                to={`/photo/${id}`}
                key={id}
                style={{
                  position: "relative",
                  display: "inline-block",
                  height: "100%",
                  color: "white",
                }}>
                {photographer && photographer_url && (
                  <Photographer
                    photographer={photographer}
                    url={photographer_url}
                  />
                )}

                <LazyLoadImage
                  src={`${src.landscape}?w=248&fit=crop&auto=format`}
                  srcSet={`${src.portrait}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={alt}
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                  effect="blur"
                />
              </Link>
            ) : (
              <Skeleton variant="rectangular" width={"100%"} height="300px" />
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ImageGrid;
