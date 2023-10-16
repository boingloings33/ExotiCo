import { Stack, Typography, SvgIcon, Divider } from "@mui/material";
import Snake from "../../../public/icons/Snake";

function Section2Mobile() {
  return (
    <>
      <Stack
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{
          px: 3,
          pt: 4,
        }}
      >
        <SvgIcon sx={{ fontSize: 56 }}>
          <Snake />
        </SvgIcon>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "40px" } }}
          textAlign="center"
        >
          Education
        </Typography>
        <Typography variant="body1">
          Learn about exotic and native reptile species that are most commonly
          found in the southeastern United States. Learn the history of how
          animals from Africa, Asia, and isles off the coast of Australia ended
          up becoming popular household pets. Each visit will be sprinkled with
          fun facts, trivia, and opportunities to win fun prizes while staying
          engaged in the material!
        </Typography>
        <img
          src="/images/image-3.webp"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "350px",
            borderRadius: 12,
          }}
        />
        <Divider sx={{ pt: 2, width: "100%" }} />
      </Stack>
    </>
  );
}

export default Section2Mobile;
