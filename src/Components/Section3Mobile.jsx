import { Stack, Typography, SvgIcon } from "@mui/material";
import Turtle from "../../public/icons/Turtle";
function Section3Mobile() {
  return (
    <Stack
      alignItems="center"
      sx={{ px: 3, py: 4, backgroundColor: "primary.light" }}
      spacing={1}
    >
      <SvgIcon sx={{ fontSize: 56 }}>
        <Turtle />
      </SvgIcon>
      <Typography variant="h1" sx={{ fontSize: { xs: "40px" } }}>
        About Me
      </Typography>
      <Typography variant="body1">
        My name is Alexandra, but you can call me Allie! I have been involved in
        reptile keeping for the past 5 years, but I fell in love with the hobby
        after adopting my first snake, a ball python named Maya. I quickly
        became passionate about reptile advocacy and bringing light to a
        misunderstood hobby. Learning from the ground up, I wanted to create a
        positive learning environment to a new and changing market. <br />
        <br /> I have been fortunate enough to have ten years of combined
        childcare and animal keeping experience, as well as veterinary and
        commercial experience. So far I am mostly a one-woman show, but I could
        not have taken this idea off the ground without my wonderful mother. I
        spend my downtime with my family, reptiles, and my right hand man: a
        Chihuahua-Corgi mix named Gustavo.
      </Typography>
    </Stack>
  );
}

export default Section3Mobile;
