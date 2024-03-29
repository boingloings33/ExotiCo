import { Typography, Stack, Divider } from "@mui/material";

function PrivacyPolicy() {
  return (
    <>
      <Stack
        sx={{
          mt: { xs: 8, sm: 18 },
          mx: { xs: 2, sm: 8, md: 18, xl: 28 },
          pt: 4,
        }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h1">Privacy Policy</Typography>
        <Typography
          variant="h5"
          sx={{ px: { xs: 0, sm: 24 }, fontSize: { xs: 16, sm: 22 } }}
        >
          Exotico requests email and phone number upon request of contact solely
          for the purpose of responding. We do not sell, share, or use your
          information for any reason, and we never will. Simple enough! We do
          photography at events upon request, which will be sent to the person
          who placed the booking. <br />
          <br /> Upon occasion, we do take photos for promotional purposes and
          may post said photos on social media. We will provide a media waiver
          to submit upon scheduling the event, as well as an additional release
          form the day of the event. We take privacy seriously and will do our
          absolute best to streamline the process as much as possible.
        </Typography>
        <Divider sx={{ width: { xs: "88%", sm: 0 }, pt: { xs: 2, sm: 0 } }} />
      </Stack>
    </>
  );
}

export default PrivacyPolicy;
