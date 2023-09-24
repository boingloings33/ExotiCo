import { Box, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: "secondary.dark", height: "80px", px: 8 }}
    >
      <Typography
        fontFamily="'Fredoka', sans-serif;"
        fontWeight="500"
        fontSize="18px"
        sx={{ color: "primary.light", mx: 1 }}
      >
        Powered by baioWorks
      </Typography>
      <Stack direction="row" alignItems="center">
        <Typography
          fontFamily="'Fredoka', sans-serif;"
          fontWeight="500"
          fontSize="18px"
          sx={{ color: "primary.light", mx: 1 }}
        >
          Follow me:
        </Typography>
        <IconButton href="https://www.facebook.com/" target="_blank">
          <FacebookIcon sx={{ color: "primary.light" }} fontSize="large" />
        </IconButton>
        <IconButton href="https://www.instagram.com/" target="_blank">
          <InstagramIcon sx={{ color: "primary.light" }} fontSize="large" />
        </IconButton>
        <IconButton href="https://www.youtube.com/" target="_blank">
          <YouTubeIcon sx={{ color: "primary.light" }} fontSize="large" />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default Footer;
