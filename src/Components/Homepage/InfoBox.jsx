import { Typography, Stack, SvgIcon, Divider } from "@mui/material";

function InfoBox({ logo, title, text }) {
  return (
    <Stack spacing={3} sx={{ width: "fit-content" }}>
      <SvgIcon sx={{ fontSize: 70 }}>{logo}</SvgIcon>
      <Divider />
      <Stack spacing={0}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{text}</Typography>
      </Stack>
    </Stack>
  );
}

export default InfoBox;
