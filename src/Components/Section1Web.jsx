import {
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";

function Section1Web() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#FFFFFF",
        mt: 12,
        px: { sm: 8, md: 18, xl: 28 },
      }}
    >
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        sx={{
          backgroundColor: "primary.light",
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
            sx={{ borderRadius: 100, width: "fit-content", px: 4, py: 1 }}
          >
            Get Started
          </Button>
        </Stack>
        {!isTablet && (
          <img
            src="./images/image-3.webp"
            style={{
              objectFit: "cover",
              maxWidth: 481,
              height: "auto",
              borderRadius: 16,
            }}
          />
        )}
      </Stack>
    </Stack>
  );
}

export default Section1Web;
