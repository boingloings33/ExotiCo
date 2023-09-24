import { Typography, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function FormSent({ buttonSize }) {
  return (
    <Stack className="fade" alignItems="center" direction="row" spacing={0}>
      <Typography color="secondary" variant="body1">
        Message Sent!
      </Typography>
      <CheckCircleIcon fontSize={buttonSize} color="secondary" />
    </Stack>
  );
}

export default FormSent;
