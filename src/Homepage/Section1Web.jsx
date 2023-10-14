import {
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";

function Section1Web({ formRef }) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  function handleScrollBottom() {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        mt: 12,
      }}
    >
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        sx={{
          backgroundColor: "#e3e3e3",
          px: 8,
          py: 6,
          borderRadius: 6,
        }}
      >
        <Stack spacing={3} sx={{ pr: 6 }}>
          <Typography variant="h1">What We Do</Typography>
          <Typography variant="body2" display="block">
            The premise is simple: the wild is brought to you, in the comfort of
            your home or school. All of the animals you see are rescues,
            ethically adopted and rehabilitated while working with licensed
            professionals. Ranging in size, age, and species, these reptiles are
            pets that receive TLC and personalized care 24/7. <br /> <br /> Our
            main values are centered in empathy, respect, and responsibility for
            our scaly friends and children alike. Your experience will go at
            your own pace, whether you want to go hands-on (or not) is entirely
            up to you. We teach the essentials of animal care and handling, and
            upon request we can provide take home materials and goodies to
            further the learning experience at home!
          </Typography>
          <Button
            variant="contained"
            onClick={handleScrollBottom}
            sx={{ borderRadius: 100, width: "fit-content", px: 4, py: 1 }}
          >
            Get in touch
          </Button>
        </Stack>
        {!isTablet && (
          <img
            src="./images/image-3.webp"
            style={{
              objectFit: "cover",
              maxWidth: "37%",
              height: "500px",
              borderRadius: 16,
            }}
          />
        )}
      </Stack>
    </Stack>
  );
}

export default Section1Web;
