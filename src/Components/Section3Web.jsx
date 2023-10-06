import { Typography, Stack } from "@mui/material";

function Section3Web() {
  return (
    <Stack
      spacing={10}
      alignItems="center"
      direction="row"
      sx={{
        backgroundColor: "secondary.light",
        width: "auto",
        mt: 12,
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
          My name is Alexandra, but you can call me Allie! I have been involved
          in reptile keeping for the past 5 years, but I fell in love with the
          hobby after adopting my first snake, a ball python named Maya. I
          quickly became passionate about reptile advocacy and bringing light to
          a misunderstood hobby. Learning from the ground up, I wanted to create
          a positive learning environment to a new and changing market. <br />
          <br /> I have been fortunate enough to have ten years of combined
          childcare and animal keeping experience, as well as veterinary and
          commercial experience. So far I am mostly a one-woman show, but I
          could not have taken this idea off the ground without my wonderful
          mother. I spend my downtime with my family, reptiles, and my right
          hand man: a Chihuahua-Corgi mix named Gustavo.
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Section3Web;
