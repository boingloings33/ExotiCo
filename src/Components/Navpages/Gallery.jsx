import { ImageList, ImageListItem, Stack } from "@mui/material";
import { useState } from "react";
import ImageDialog from "./ImageDialog";
import useIsMobile from "../../hooks/useIsMobile";

function Gallery() {
  const imageArr = [
    {
      img: "./images/allie-pic.webp",
      id: 0,
    },
    {
      img: "./images/odin.webp",
      id: 1,
    },
    {
      img: "./images/image-3.webp",
      id: 2,
    },
    {
      img: "./images/kid-snake.webp",
      id: 3,
    },
    {
      img: "./images/coming-soon.webp",
      id: 4,
    },
  ];
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  function handleClose() {
    setOpen(false);
  }
  function handleSelectedImage(img) {
    setOpen(true);
    setSelectedImage(img);
  }

  const isMobile = useIsMobile();

  return (
    <>
      <ImageDialog
        open={open}
        handleClose={handleClose}
        selectedImage={selectedImage}
      />
      <Stack
        sx={{
          pt: 10,
          mx: { xs: 2, sm: 8, md: 18, xl: 28 },
          overflow: "hidden",
        }}
        alignItems="center"
      >
        <ImageList cols={!isMobile ? 3 : 1} sx={{ width: "920px" }}>
          {!isMobile &&
            imageArr.map((img) => (
              <ImageListItem
                key={img.id}
                sx={{
                  "&:hover": { cursor: "pointer" },
                }}
              >
                <img
                  onClick={() => handleSelectedImage(img.img)}
                  src={img.img}
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    maxHeight: "300px",
                    width: "300px",
                    borderRadius: 10,
                  }}
                />
              </ImageListItem>
            ))}
          {isMobile &&
            imageArr.map((img) => (
              <>
                <Stack alignItems="center">
                  <ImageListItem key={img.id}>
                    <img
                      onClick={() => handleSelectedImage(img.img)}
                      src={img.img}
                      loading="lazy"
                      style={{
                        maxHeight: "320px",
                        width: "88vw",
                        borderRadius: 10,
                      }}
                    />
                  </ImageListItem>
                </Stack>
              </>
            ))}
        </ImageList>
      </Stack>
    </>
  );
}

export default Gallery;
