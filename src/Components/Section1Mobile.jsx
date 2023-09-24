import { Stack } from "@mui/material";
import Slideshow from "./Slideshow";

function Section1Mobile() {
  return (
    <>
      <Stack
        spacing={2}
        justifyContent="center"
        sx={{
          px: 4,
          py: 5,
          backgroundColor: "primary.light",
        }}
      >
        <Slideshow />
      </Stack>
    </>
  );
}

export default Section1Mobile;
