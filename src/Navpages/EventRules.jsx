import { Typography, Stack, Divider } from "@mui/material";

function EventRules() {
  return (
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
      <Typography variant="h1">Event Rules</Typography>
      <Typography variant="h5" sx={{ px: { xs: 2, sm: 24 } }}>
        <Stack spacing={3}>
          <Typography variant="body2">
            <strong>1.</strong> Respect goes both ways! We will never push
            anyone to handle an animal if they are uncomfortable, and if one of
            the animals becomes too stressed we will stop that interaction and
            resume display only.
          </Typography>
          <Divider />
          <Typography variant="body2">
            <strong>2.</strong> In order to prevent injury to the animals,
            children must be seated or in one place while handling. No running
            or taking the animals to a different location. We reserve the right
            to return the animals to the bins for any reason. We don’t need any
            pythons on the run!
          </Typography>
          <Divider />
          <Typography variant="body2">
            <strong>3.</strong> Everyone is welcome to spend time with the
            animals, but children 4 and under must pet the tops to reduce risk
            of drops/squeezing. The animals require steady touch and control
            while handling.
          </Typography>
          <Divider />
          <Typography variant="body2">
            <strong>4.</strong>
            There may be changes to the reservation due to inclement weather. If
            temperatures go below 60 degrees Fahrenheit, events must be held
            indoors for the safety of the animals.
          </Typography>
          <Divider />
          <Typography variant="body2">
            <strong>5.</strong> Last but not least, have fun! Feel free to
            contact me if you have any questions or concerns via email, call, or
            text. If you have any special requests for your party, please
            include it in the intake form. Thank you for considering ExotiCo for
            your event!
          </Typography>
          <Divider sx={{ width: { sm: 0 } }} />
        </Stack>
      </Typography>
    </Stack>
  );
}

export default EventRules;
