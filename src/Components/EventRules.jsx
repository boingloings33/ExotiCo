import { Typography, Stack, Divider } from "@mui/material";

function EventRules() {
  return (
    <Stack
      sx={{
        mt: 18,
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
            <strong>1.</strong> Consequatur enim sunt ad animi quam tempore
            distinctio qui vel non perspiciatis, provident obcaecati omnis iure
            nisi.
          </Typography>
          <Divider />
          <Typography variant="body2">
            <strong>2.</strong> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eos exercitationem debitis qui modi ullam
            dignissimos, sed adip
          </Typography>
          <Divider />
          <Typography variant="body2">
            <strong>3.</strong> Iure iusto eligendi voluptatum vero assumenda
            distinctio! Quisquam consequatur perferendis non dolorum enim
            necessitatibus veniam velit laboriosam nobis eum, sapiente
            voluptates eius!
          </Typography>
          <Divider />
          <Typography variant="body2">
            <strong>4.</strong> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
          </Typography>
          <Divider />
          <Typography variant="body2">
            <strong>5.</strong> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure possimus ex, eum similique voluptas
          </Typography>
          <Divider sx={{ width: { sm: 0 } }} />
        </Stack>
      </Typography>
    </Stack>
  );
}

export default EventRules;
