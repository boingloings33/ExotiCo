import { Typography, Stack } from "@mui/material";

import Carousel from "react-material-ui-carousel";

function Slideshow() {
  const fadeImages = [
    {
      src: "/images/kid-snake.webp",
      title: "What We Do",
      caption:
        "Learn about exotic and native reptile species that are most commonly found in the southeastern United States. Learn the history of how animals from Africa, Asia, and isles off the coast of Australia ended up becoming popular household pets. Each visit will be sprinkled with fun facts, trivia, and opportunities to win fun prizes while staying engaged in the material! ",
    },
    {
      src: "/images/image-3.webp",
      title: "Reptile Education",
      caption:
        "Each child and adult will have an opportunity to have one-on-one time with every animal. Whether it be holding a gecko or a beautiful python, we firmly respect boundaries to promote the most relaxed environment possible. Each reptile has a story, and you can spend time with your favorites while learning about the exotic animal industry through personal experience.",
    },
    {
      src: "/images/allie-pic.webp",
      title: "About Me",
      caption:
        "While it may seem exciting owning exotics, find out whether reptile keeping is the best decision for you. With lots of hidden responsibilities, there may be a better way to support native and non-native animals alike. We will cover topics such as husbandry (animal care), lifespans, reading reptile body language, and different ways to get involved locally. ",
    },
  ];

  return (
    <Carousel
      swipe={true}
      sx={{ width: "88%", overflow: "visible" }}
      autoPlay={false}
      fullHeightHover={false}
      indicatorContainerProps={{
        style: {
          overflow: "visible",
        },
      }}
      navButtonsAlwaysInvisible={true}
    >
      {fadeImages.map((img, i) => (
        <Item key={i} img={img} />
      ))}
    </Carousel>
  );
}

function Item({ img }) {
  return (
    <Stack alignItems="center" spacing={1} sx={{ overflow: "visible" }}>
      <Typography variant="body1">{img.caption}</Typography>
      <img
        style={{
          objectFit: "cover",
          width: "100%",
          height: 330,
          borderRadius: 8,
        }}
        src={img.src}
      ></img>
    </Stack>
  );
}
export default Slideshow;
