import { Typography, Stack, Button } from "@mui/material";
import { Parallax } from "react-parallax";
import useIsMobile from "../../hooks/useIsMobile";
import Pulse from "react-reveal/Pulse";
function Header({ s1Ref }) {
  const isMobile = useIsMobile();
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
          <Pulse>
            {!isMobile && (
              <img
                src="images/allie-icon.webp"
                alt=""
                style={
                  !isMobile && {
                    width: 186,
                    borderRadius: 100,
                  }
                }
              />
            )}
          </Pulse>
          <Pulse>
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
          </Pulse>
          <Pulse>
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
          </Pulse>
        </Stack>
      </Stack>
    </Parallax>
  );
}

export default Header;
