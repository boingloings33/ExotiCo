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
import TikTok from "../../public/icons/TikTok";

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {
        <>
          {!isMobile && (
            <Divider sx={{ mt: 12, mx: { sm: 8, md: 18, xl: 28 } }} />
          )}
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              backgroundColor: "secondary.light",
              py: 4,
              mx: { xs: 2, sm: 8, md: 18, xl: 28 },
            }}
          >
            <Stack spacing={isMobile ? 1 : 2}>
              <Typography
                fontFamily="'Fredoka', sans-serif;"
                fontWeight={700}
                fontSize={isMobile ? 40 : 60}
                lineHeight={1}
                sx={{ color: "info.main" }}
              >
                <span>Exoti</span>
                <span style={{ color: "#64B998" }}>Co</span>
              </Typography>
              <Typography fontSize={isMobile ? 10 : 18} textAlign="start">
                Copyright 2023 @ Exotico
              </Typography>
            </Stack>
            <Stack spacing={isMobile ? 1 : 2}>
              {!isMobile && (
                <>
                  <Stack direction="row" spacing={4}>
                    <Link href="/" underline="none" sx={{ color: "info.main" }}>
                      <Typography fontSize={18} textAlign="start">
                        Home
                      </Typography>
                    </Link>
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
                </>
              )}
              {isMobile && (
                <>
                  <Stack direction="row" spacing={2}>
                    <Link href="/" underline="none" sx={{ color: "info.main" }}>
                      <Typography fontSize={18} textAlign="start">
                        Home
                      </Typography>
                    </Link>
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
                </>
              )}
              <Stack
                direction="row"
                justifyContent={isMobile ? "center" : "end"}
              >
                <IconButton
                  href="https://www.facebook.com/profile.php?id=61552191487395"
                  target="_blank"
                >
                  <FacebookIcon sx={{ color: "#818181" }} fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/exoticocharleston/"
                  target="_blank"
                >
                  <InstagramIcon sx={{ color: "#818181" }} fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://www.tiktok.com/@exotico_charleston"
                  target="_blank"
                  sx={{ width: 46, height: 46 }}
                >
                  <TikTok />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </>
      }
    </>
  );
}

export default Footer;
