import { useMediaQuery, useTheme } from "@mui/material";

function useIsMobile() {
  return useMediaQuery(useTheme().breakpoints.down("sm"));
}

export default useIsMobile;
