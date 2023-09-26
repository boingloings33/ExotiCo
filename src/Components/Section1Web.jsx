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
        px: { sm: 8, lg: 30 },
      }}
    >
      <Box>
        <Stack direction="row" spacing={4} alignItems="top">
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
            <Typography variant="h1">My mission</Typography>
            <Typography
              lineHeight={2}
              variant="body2"
              display="block"
              sx={{ pt: 3, maxWidth: 700 }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur dolorum praesentium nostrum ex doloremque, esse vel,
              iste aliquid sit, explicabo Lorem ips? Deserunt omnis iusto porro
              eveniet esse reiciendis dolore tempore orum praesentium nostrum
              el. mnis maxi Deserunt omnis iusto porro eveniet esse reiciendis
              dolore tempore orum praesentium nostrum el, doloribus aliquid sint
              quam corrupti eum fuga minima! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Soluta maxime cupiditate eveniet
              molestias dolorum unde nihil quia neque voluptatem labore, iste
              distinctio vitae deserunt. Quos vero quas nam recusandae possimus?
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ mt: 10, mb: 10 }} />
        <Typography variant="h1">About me</Typography>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
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
      </Box>
    </Stack>
  );
}

export default Section1Web;
