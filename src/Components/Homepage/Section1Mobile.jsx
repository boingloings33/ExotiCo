import { Stack, Typography, SvgIcon, Divider } from "@mui/material";
import Chameleon from "../../../public/icons/Chameleon";

function Section1Mobile() {
  return (
    <>
      <Stack alignItems="center" sx={{ px: 3, pt: 4 }} spacing={1}>
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
          receive personalized care 24/7.
        </Typography>
        <img
          src="/images/kid-snake.webp"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "350px",
            borderRadius: 12,
          }}
        />
        <Divider sx={{ pt: 2, px: 0, width: "100%" }} />
      </Stack>
    </>
  );
}

export default Section1Mobile;
