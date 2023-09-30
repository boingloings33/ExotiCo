import { Stack } from "@mui/material";
import Slideshow from "./Slideshow";

function Section1Mobile() {
  return (
    <>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          px: 0,
          py: 8,
          backgroundColor: "primary.light",
        }}
      >
        <Slideshow />
      </Stack>
    </>
  );
}

export default Section1Mobile;
