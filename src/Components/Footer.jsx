import {
  IconButton,
  Stack,
  Typography,
  Link,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {!isMobile && (
        <>
          <Divider sx={{ mt: 12, mx: { sm: 8, md: 18, xl: 28 } }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              backgroundColor: "secondary.light",
              py: 4,
              mx: { sm: 8, md: 18, xl: 28 },
            }}
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
                <Link
                  href="/resources"
                  underline="none"
                  sx={{ color: "info.main" }}
                >
                  <Typography fontSize={18} textAlign="start">
                    Resources
                  </Typography>
                </Link>
                <Link
                  href="/gallery"
                  underline="none"
                  sx={{ color: "info.main" }}
                >
                  <Typography fontSize={18} textAlign="start">
                    Gallery
                  </Typography>
                </Link>
                <Link
                  href="/event-rules"
                  underline="none"
                  sx={{ color: "info.main" }}
                >
                  <Typography fontSize={18} textAlign="start">
                    Event Rules
                  </Typography>
                </Link>
                <Link
                  href="/privacy-policy"
                  underline="none"
                  sx={{ color: "info.main" }}
                >
                  <Typography fontSize={18} textAlign="start">
                    Privacy Policy
                  </Typography>
                </Link>
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
        </>
      )}
      {isMobile && (
        <>
          <Stack
            justifyContent="space-between"
            alignItems="center"
            sx={{
              backgroundColor: "secondary.light",
              py: 4,
              mx: 2,
            }}
          >
            <Stack spacing={1}>
              <Typography
                fontFamily="'Fredoka', sans-serif;"
                fontWeight={700}
                fontSize={40}
                lineHeight={1}
                sx={{ color: "info.main" }}
              >
                <span>Exoti</span>
                <span style={{ color: "#64B998" }}>Co</span>
              </Typography>
              <Typography fontSize={10} textAlign="start">
                Copyright 2023 @ Exotico
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Stack spacing={2} direction="row" justifyContent="center">
                <Link
                  href="/resources"
                  underline="none"
                  sx={{ color: "info.main" }}
                >
                  <Typography fontSize={18} textAlign="start">
                    Resources
                  </Typography>
                </Link>
                <Link
                  href="/gallery"
                  underline="none"
                  sx={{ color: "info.main" }}
                >
                  <Typography fontSize={18} textAlign="start">
                    Gallery
                  </Typography>
                </Link>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Link
                  href="/event-rules"
                  underline="none"
                  sx={{ color: "info.main" }}
                >
                  <Typography fontSize={18} textAlign="start">
                    Event Rules
                  </Typography>
                </Link>
                <Link
                  href="/privacy-policy"
                  underline="none"
                  sx={{ color: "info.main" }}
                >
                  <Typography fontSize={18} textAlign="start">
                    Privacy Policy
                  </Typography>
                </Link>
              </Stack>
              <Stack direction="row" justifyContent="center">
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
        </>
      )}
    </>
  );
}

export default Footer;
