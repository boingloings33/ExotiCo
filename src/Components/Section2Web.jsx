import { Typography, Stack } from "@mui/material";
import InfoBox from "./InfoBox";
import Chameleon from "../../public/icons/Chameleon";
import Snake from "../../public/icons/Snake";
import Turtle from "../../public/icons/Turtle";
function Section2Web() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      sx={{
        backgroundColor: "#FFFFFF",
        mt: 16,
        // borderRadius: 10,
        // p: 8,
        // boxShadow: "0 4px 34px rgba(0,0,0,.1)",
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
          logo={<Chameleon />}
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
