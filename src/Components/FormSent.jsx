import { Typography, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function FormSent({ buttonSize }) {
  return (
    <Stack className="fade" alignItems="center" direction="row" spacing={0}>
      <Typography sx={{ color: "primary.light" }} variant="body1" noWrap={true}>
        Message Sent!
      </Typography>
      <CheckCircleIcon fontSize={buttonSize} sx={{ color: "primary.light" }} />
    </Stack>
  );
}

export default FormSent;
