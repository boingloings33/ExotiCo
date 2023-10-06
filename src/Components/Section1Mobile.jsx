import { Stack, Typography, SvgIcon, Divider } from "@mui/material";
import Chameleon from "../../public/icons/Chameleon";

function Section1Mobile() {
  return (
    <>
      <Stack
        alignItems="center"
        sx={{ px: 3, pt: 4, backgroundColor: "primary.light" }}
        spacing={1}
      >
        <SvgIcon sx={{ fontSize: 56 }}>
          <Chameleon />
        </SvgIcon>
        <Typography variant="h1" sx={{ fontSize: { xs: "40px" } }}>
          What We Do
        </Typography>
        <Typography variant="body1">
          The premise is simple: the wild is brought to you, in the comfort of
          your home or school. All of the animals you see are rescues, ethically
          adopted and rehabilitated while working with licensed professionals.
          Ranging in size, age, and species, these reptiles are pets that
          receive TLC and personalized care 24/7. <br /> <br /> Our main values
          are centered in empathy, respect, and responsibility for our scaly
          friends and children alike. Your experience will go at your own pace,
          whether you want to go hands-on (or not) is entirely up to you. We
          teach the essentials of animal care and handling, and upon request we
          can provide take home materials and goodies to further the learning
          experience at home!
        </Typography>
        <Divider sx={{ pt: 2, px: 0, width: "100%" }} />
      </Stack>
    </>
  );
}

export default Section1Mobile;
