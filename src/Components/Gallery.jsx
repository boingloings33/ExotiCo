import {
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Button,
  ImageList,
  ImageListItem,
  Box,
} from "@mui/material";
function Gallery() {
  const imageArr = [
    "./images/allie-pic.webp",
    "./images/kid-snake.webp",
    "./images/image-2.jpg",
    "./images/image-3.webp",
    "./images/image-5.png",
    "./images/allie-icon.jpg",
  ];
  return (
    <Box sx={{ pt: 14, pb: 8, mx: { xs: 2, sm: 8, md: 18, xl: 34 } }}>
      <ImageList>
        {imageArr.map((img) => (
          <ImageListItem key={img} sx={{ maxHeight: 600 }}>
            <img src={img} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default Gallery;
