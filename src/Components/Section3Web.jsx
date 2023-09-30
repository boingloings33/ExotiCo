import { Typography, Stack } from "@mui/material";

function Section3Web() {
  return (
    <Stack
      spacing={10}
      alignItems="center"
      direction="row"
      sx={{
        backgroundColor: "#FFFFFF",
        width: "auto",
        mt: 16,
      }}
    >
      <img
        src="./images/allie-pic.webp"
        style={{
          objectFit: "cover",
          maxWidth: "38%",
          height: "auto",
          borderRadius: 16,
        }}
      />
      <Stack spacing={2}>
        <Typography variant="h1">About me</Typography>
        <Typography variant="body2">
          At ETIM, we take pride in being a leading provider of cutting-edge
          electrical solutions and services in [Location/Country]. With a rich
          history and a commitment to excellence, we have been serving both
          residential and commercial clients [Number of Years] years. <br />
          <br />
          At ETIM, we take pride in being a leading provider of cutting-edge
          electrical solutions and services in [Location/Country]. With a rich
          history and a commitment to excellence, we have been serving both
          residential and commercial clients for [Number of Years] years.
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Section3Web;
