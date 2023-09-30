import { Typography, Stack } from "@mui/material";
import InfoBox from "./InfoBox";
import Crested from "../../public/icons/Crested";
import Snake from "../../public/icons/Snake";
import Turtle from "../../public/icons/Turtle";
function Section2Web() {
  return (
    <Stack
      spacing={3}
      alignItems="center"
      sx={{
        backgroundColor: "#FFFFFF",
        px: { sm: 8, md: 18, xl: 28 },
        mt: 12,
      }}
    >
      <Typography variant="h1">Reptile Education</Typography>
      <Typography
        textAlign="center"
        variant="body2"
        color="rgba(0,0,0,.8)"
        sx={{ px: 42, pb: 3, lineHeight: 1.61 }}
      >
        Diam et aliquam turpis convallis tortor auctor sit aliquam tristique.
        Quis in cursus dolor sit.
      </Typography>
      <Stack direction="row" spacing={4}>
        <InfoBox
          logo={<Crested />}
          title="Tincidunt mollis venenatis"
          text="Sed est non eu quis egestas vestibulum. Porttitor egestas turpis quis eget amet. Fermentum habitant pellentesque at quisque dolor sit."
        />
        <InfoBox
          logo={<Turtle />}
          title="Tincidunt mollis venenatis"
          text="Sed est non eu quis egestas vestibulum. Porttitor egestas turpis quis eget amet. Fermentum habitant pellentesque at quisque dolor sit."
        />
        <InfoBox
          logo={<Snake />}
          title="Tincidunt mollis venenatis"
          text="Sed est non eu quis egestas vestibulum. Porttitor egestas turpis quis eget amet. Fermentum habitant pellentesque at quisque dolor sit."
        />
      </Stack>
    </Stack>
  );
}

export default Section2Web;