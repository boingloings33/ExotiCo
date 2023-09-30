import { Typography, Stack, Button } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { Parallax } from "react-parallax";
function Header({ resultRef }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  function handleScrollBottom() {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Parallax
      bgImage="/images/leavesweb.webp"
      strength={400}
      style={{ width: "100vw" }}
    >
      <Stack
        justifyContent="center"
        sx={{
          height: { xs: "100vh", sm: "960px" },
          width: "100%",
          position: "relative",
        }}
      >
        <Stack spacing={1} alignItems="center" justifyContent="center">
          {!isMobile && (
            <img
              src="images/allie-icon.jpg"
              alt=""
              style={{
                width: 186,
                borderRadius: 100,
              }}
            />
          )}
          {isMobile && (
            <img
              src="images/allie-icon.jpg"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit me poonk.
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
