import { Box } from "@mui/material";
import { forwardRef } from "react";
const Section1Ref = forwardRef(function Section1Ref(props, ref) {
  return (
    <Box
      ref={ref}
      sx={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
      }}
    ></Box>
  );
});

export default Section1Ref;
