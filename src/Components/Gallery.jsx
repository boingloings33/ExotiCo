import {
  ImageList,
  ImageListItem,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function Gallery() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const imageArr = [
    "./images/allie-pic.webp",
    "./images/kid-snake.webp",
    "./images/image-2.jpg",
    "./images/image-3.webp",
    "./images/image-5.png",
    "./images/allie-icon.jpg",
  ];
  return (
    <Box sx={{ pt: 10, pb: 4, mx: { xs: 2, sm: 8, md: 18, xl: 28 } }}>
      <ImageList>
        {!isMobile &&
          imageArr.map((img) => (
            <ImageListItem key={img}>
              <img
                src={img}
                loading="lazy"
                style={{
                  objectFit: "cover",
                  maxHeight: "500px",
                  width: "auto",
                }}
              />
            </ImageListItem>
          ))}
        {isMobile &&
          imageArr.map((img) => (
            <ImageListItem key={img}>
              <img
                src={img}
                loading="lazy"
                style={{
                  objectFit: "cover",
                  maxHeight: "170px",
                  width: "auto",
                }}
              />
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  );
}

export default Gallery;
