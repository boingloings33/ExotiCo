import { Stack, Typography, SvgIcon, Divider } from "@mui/material";
import Slideshow from "./Slideshow";
import Snake from "../../public/icons/Snake";

function Section2Mobile() {
  return (
    <>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          px: 0,
          pt: 4,
          backgroundColor: "primary.light",
        }}
      >
        <SvgIcon sx={{ fontSize: 56 }}>
          <Snake />
        </SvgIcon>
        <Typography variant="h1" sx={{ fontSize: { xs: "40px" } }}>
          Reptile Education
        </Typography>
        <Slideshow />
        <Divider sx={{ pt: 2, width: "88%" }} />
      </Stack>
    </>
  );
}

export default Section2Mobile;
