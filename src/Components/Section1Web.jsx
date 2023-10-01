import {
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";

function Section1Web({ resultRef }) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  function handleScrollBottom() {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        mt: 16,
      }}
    >
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        sx={{
          backgroundColor: "#e3e3e3",
          px: 8,
          py: 4,
          borderRadius: 6,
        }}
      >
        <Stack spacing={3} sx={{ pr: 6 }}>
          <Typography variant="h1">My Mission</Typography>
          <Typography variant="body2" display="block">
            Ultricies tincidunt vel elementum faucibus sodales donec arcu. In
            vulputate morbi elit urna vitae vitae varius rhoncus. Gravida at
            vulputate nulla diam mattis a aliquam porttitor posuere. Ultrices
            auctor eu leo a ut.
          </Typography>
          <Button
            variant="contained"
            onClick={handleScrollBottom}
            sx={{ borderRadius: 100, width: "fit-content", px: 4, py: 1 }}
          >
            Get in touch
          </Button>
        </Stack>
        {!isTablet && (
          <img
            src="./images/image-3.webp"
            style={{
              objectFit: "cover",
              maxWidth: "37%",
              borderRadius: 16,
            }}
          />
        )}
      </Stack>
    </Stack>
  );
}

export default Section1Web;
