import { Typography, Stack } from "@mui/material";
import InfoBox from "./InfoBox";
import Chameleon from "../../public/icons/Chameleon";
import Snake from "../../public/icons/Snake";
import Turtle from "../../public/icons/Turtle";
function Section2Web() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      sx={{
        backgroundColor: "secondary.light",
        mt: 12,
        // borderRadius: 10,
        // p: 8,
        // boxShadow: "0 4px 34px rgba(0,0,0,.1)",
      }}
    >
      <Typography variant="h1">Reptile Education</Typography>
      <Typography
        textAlign="center"
        variant="body2"
        color="rgba(0,0,0,.8)"
        sx={{ px: 42, pb: 1, lineHeight: 1.61 }}
      >
        Let's dive in!
      </Typography>
      <Stack direction="row" spacing={4}>
        <InfoBox
          logo={<Chameleon />}
          title="Opportunities to Learn "
          text="Learn about exotic and native reptile species that are most commonly found in the southeastern United States. Learn the history of how animals from Africa, Asia, and isles off the coast of Australia ended up becoming popular household pets. Each visit will be sprinkled with fun facts, trivia, and opportunities to win fun prizes while staying engaged in the material! "
        />
        <InfoBox
          logo={<Turtle />}
          title="Meet The Gang"
          text="Each child and adult will have an opportunity to have one-on-one time with every animal. Whether it be petting a gecko or holding a beautiful royal python, we firmly respect boundaries to promote the most relaxed environment possible. Each reptile has a story, and you can spend individualized time with your favorites while learning about the exotic animal industry."
        />
        <InfoBox
          logo={<Snake />}
          title="Brighter Future for Exotics"
          text="While it may seem exciting owning exotics, find out whether reptile keeping is the best decision for you. With lots of hidden responsibilities, there may be a better way to support native and non-native animals alike. We will cover topics such as husbandry (animal care), lifespans, reading reptile body language, and different ways to get involved locally. "
        />
      </Stack>
    </Stack>
  );
}

export default Section2Web;
