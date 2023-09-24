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
    <Parallax bgImage="/images/leaves2.png" strength={400}>
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
              src="images/allie-icon.png"
              alt=""
              style={{
                width: 186,
                borderRadius: 100,
              }}
            />
          )}
          {isMobile && (
            <img
              src="images/allie-icon.png"
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
              color: "primary.light",
              fontSize: { xs: "48px", sm: "108px" },
              fontFamily: "'Fredoka', sans-serif;",
            }}
          >
            ExotiCo
          </Typography>
          <Stack spacing={4} alignItems="center">
            <Typography
              sx={{
                color: "primary.light",
                fontSize: { xs: "22px", sm: "32px" },
              }}
            >
              We love casting spells
            </Typography>
            <Button
              size="large"
              onClick={handleScrollBottom}
              variant="contained"
              sx={{ borderRadius: 50, height: 50, width: 160 }}
            >
              Get in touch
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Parallax>
  );
}

export default Header;
