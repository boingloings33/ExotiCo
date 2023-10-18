import { Box } from "@mui/material";
import { forwardRef } from "react";
const Section1Ref = forwardRef(function Section1Ref(props, ref) {
  return (
    <Box
      ref={ref}
      sx={{
        mt: { md: 0, xl: -6 },
        height: "100vh",
        width: "100vw",
        position: "absolute",
      }}
    />
  );
});

export default Section1Ref;
