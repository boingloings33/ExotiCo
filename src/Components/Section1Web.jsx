import { Typography, Stack, Box } from "@mui/material";

import Carousel from "react-material-ui-carousel";
const fadeImages = [
  {
    id: 1,
    src: "/images/allie-pic.webp",
    title: "Title 1",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur fuga consequatur, asperiores deserunt ut eos corporis possimus quo vero aut ipsam rerum id! Ducimus harum debitis adipisci ipsum aut? asda oong, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt cumque optio laboriosam alias! Quo, quisquam voluptate. Minus quibusdam doloribus deserunt sapiente. Fuga magni architecto voluptates nobis dolores amet, sit earum.",
  },
  {
    id: 2,
    src: "/images/image-2.jpg",
    title: "Title 2",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi obcaecati suscipit, dolor, necessitatibus libero iure ipsa quae earum perferendis incidunt tempora asperiores porro fuga magnam quibusdam dolore voluptate velit ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum sed, quos quidem saepe dolor accusantium at sint impedit assumenda veritatis optio iure, voluptate laboriosam voluptatibus! Reiciendis sapiente cupiditate voluptatem. recusandae Lorem ipsum dolor",
  },
  {
    id: 3,
    src: "/images/image-3.webp",
    title: "Title 3",
    caption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, deserunt cupiditate, laboriosam sapiente dolore ad vel debitis deleniti delectus placeat eaque, ea illum corporis voluptate tenetur accusamus recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam! Asperiores nihil, incidunt natus dicta similique doloribus! Optio sed alias, consectetur est suscipit omnis autem, dolorem placeat vel natus quos?  corporis voluptate tenetur ",
  },
];
function Section1Web() {
  return (
    <Carousel
      swipe={false}
      sx={{ overflow: "visible", py: 12 }}
      autoPlay={false}
      navButtonsAlwaysVisible={true}
      fullHeightHover={false}
      indicatorIconButtonProps={{
        style: {
          marginTop: "30px",
        },
      }}
      navButtonsProps={{
        style: {
          backgroundColor: "rgba(18, 18, 18, 0.8)",
          width: 64,
          height: 64,
        },
      }}
    >
      {fadeImages.map((img, i) => (
        <Item key={i} img={img} />
      ))}
    </Carousel>
  );
}

function Item({ img }) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="row"
      spacing={2}
      sx={{ borderRadius: 6 }}
    >
      <Stack sx={{ maxWidth: 500 }} spacing={2}>
        <Typography variant="h1">{img.title}</Typography>
        <Typography sx={{ lineHeight: 2 }} variant="body1">
          {img.caption}
        </Typography>
      </Stack>

      <img
        style={{
          objectFit: "cover",
          width: 500,
          height: 500,
          borderRadius: 16,
        }}
        src={img.src}
      ></img>
    </Stack>
  );
}

export default Section1Web;
