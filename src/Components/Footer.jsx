import { IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: "white", px: 8, py: 4 }}
    >
      <Stack spacing={2}>
        <Typography
          fontFamily="'Fredoka', sans-serif;"
          fontWeight={700}
          fontSize={60}
          lineHeight={1}
          sx={{ color: "info.main" }}
        >
          <span>Exoti</span>
          <span style={{ color: "#64B998" }}>Co</span>
        </Typography>
        <Typography fontSize={18} textAlign="start">
          Copyright 2023 @ Exotico
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <Stack direction="row" spacing={4}>
          <Typography fontSize={18} textAlign="start">
            About me
          </Typography>
          <Typography fontSize={18} textAlign="start">
            Gallery
          </Typography>
          <Typography fontSize={18} textAlign="start">
            Privacy Policy
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="end">
          <IconButton href="https://www.facebook.com/" target="_blank">
            <FacebookIcon sx={{ color: "#818181" }} fontSize="large" />
          </IconButton>
          <IconButton href="https://www.instagram.com/" target="_blank">
            <InstagramIcon sx={{ color: "#818181" }} fontSize="large" />
          </IconButton>
          <IconButton href="https://www.youtube.com/" target="_blank">
            <YouTubeIcon sx={{ color: "#818181" }} fontSize="large" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
