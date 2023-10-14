import { Typography, Stack, Button } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { Parallax } from "react-parallax";
function Header({ s1Ref }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  function handleScrollBottom() {
    s1Ref.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Parallax
      bgImage="/images/leavesweb.webp"
      strength={!isMobile ? 200 : 100}
      style={{ width: "100vw" }}
    >
      <Stack
        justifyContent="center"
        sx={{
          height: "100vh",
          width: "100%",
          position: "relative",
          py: 4,
        }}
      >
        <Stack spacing={1} alignItems="center" justifyContent="center">
          {!isMobile && (
            <img
              src="images/allie-icon.webp"
              alt=""
              style={{
                width: 186,
                borderRadius: 100,
              }}
            />
          )}
          {isMobile && (
            <img
              src="images/allie-icon.webp"
              alt=""
              style={{
                width: 106,
                borderRadius: 100,
              }}
            />
          )}
          <Typography
            variant="h1"
            sx={{
              color: "secondary.light",
              fontSize: { xs: "48px", sm: "99px" },
              fontFamily: "'Fredoka', sans-serif;",
            }}
          >
            ExotiCo
          </Typography>
          <Stack spacing={4} alignItems="center">
            <Typography
              textAlign="center"
              sx={{
                color: "secondary.light",
                maxWidth: { xs: 300, sm: 520 },
                fontSize: { xs: "16px", sm: "20px" },
              }}
            >
              Traveling Education Conservation
            </Typography>
            <Button
              size="large"
              onClick={handleScrollBottom}
              variant="contained"
              sx={{ borderRadius: 100, width: "fit-content", py: 1 }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Parallax>
  );
}

export default Header;