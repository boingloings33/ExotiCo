import {
  Typography,
  Stack,
  Box,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function Section1Web() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "primary.light",
        py: 12,
        width: "auto",
        px: { sm: 8, lg: 36 },
      }}
    >
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h1">Title 1</Typography>
          {isTablet && (
            <img
              src="./images/allie-pic.webp"
              style={{ width: 240, height: 240, borderRadius: 16 }}
            ></img>
          )}
        </Stack>
        <Stack direction="row" spacing={4} alignItems="top">
          <Typography
            lineHeight={2}
            variant="body2"
            display="block"
            sx={{ pt: 3 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur dolorum praesentium nostrum ex doloremque, esse vel,
            iste aliquid sit, explicabo Lorem ips? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Architecto perspiciatis quisquam sequi
            ex, ratione quas omnis maxi Deserunt omnis iusto porro eveniet esse
            reiciendis dolore tempore orum praesentium nostrum el. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography
            lineHeight={2}
            variant="body2"
            display="block"
            sx={{ pt: 3 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur dolorum praesentium nostrum ex doloremque, esse vel,
            iste aliquid sit, explicabo Lorem ips? Deserunt omnis iusto porro
            eveniet esse reiciendis dolore tempore orum praesentium nostrum el.
            mnis maxi Deserunt omnis iusto porro eveniet esse reiciendis dolore
            tempore orum praesentium nostrum el.
          </Typography>

          {!isTablet && (
            <img
              style={{ objectFit: "cover", maxWidth: 374, borderRadius: 16 }}
              src="./images/allie-pic.webp"
              alt=""
            />
          )}
        </Stack>
        <Divider sx={{ mt: 10, mb: 10 }} />
        <Stack direction="row" spacing={4} alignItems="top">
          {isTablet && (
            <img
              src="./images/image-3.webp"
              style={{
                objectFit: "cover",
                width: 300,
                height: 490,
                borderRadius: 16,
              }}
            />
          )}

          {!isTablet && (
            <img
              src="./images/image-3.webp"
              style={{
                objectFit: "cover",
                width: 705,
                height: 497,
                borderRadius: 16,
              }}
            />
          )}
          <Stack>
            <Typography variant="h1">Title 2</Typography>
            <Typography
              lineHeight={2}
              variant="body2"
              display="block"
              sx={{ pt: 3, maxWidth: 418 }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur dolorum praesentium nostrum ex doloremque, esse vel,
              iste aliquid sit, explicabo Lorem ips? Deserunt omnis iusto porro
              eveniet esse reiciendis dolore tempore orum praesentium nostrum
              el. mnis maxi Deserunt omnis iusto porro eveniet esse reiciendis
              dolore tempore orum praesentium nostrum el, doloribus aliquid sint
              quam corrupti eum fuga minima!
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Section1Web;
