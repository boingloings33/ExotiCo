import { Typography, Stack } from "@mui/material";

import Carousel from "react-material-ui-carousel";

function Slideshow() {
  const fadeImages = [
    {
      src: "/images/allie-pic.webp",
      title: "First Slide",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur fuga consequatur, asperiores deserunt ut eos corporis possimus quo vero aut ipsam rerum id! Ducimus harum debitis adipisci ipsum aut? asda oong, it do be like dat",
    },
    {
      src: "/images/image-2.jpg",
      title: "Second Slide",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi obcaecati suscipit, dolor, necessitatibus libero iure ipsa quae earum perferendis incidunt tempora asperiores porro fuga magnam quibusdam dolore voluptate velit ea.",
    },
    {
      src: "/images/image-3.webp",
      title: "Third Slide",
      caption:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, deserunt cupiditate, laboriosam sapiente dolore ad vel debitis deleniti delectus placeat eaque, ea illum corporis voluptate tenetur accusamus recusandae alamoo mc griddle",
    },
  ];

  return (
    <Carousel
      swipe={true}
      sx={{ width: "75%" }}
      autoPlay={false}
      fullHeightHover={false}
      indicatorContainerProps={{
        style: {
          overflow: "visible",
        },
      }}
      navButtonsAlwaysInvisible={true}
      navButtonsProps={{
        style: {
          backgroundColor: "rgba(18, 18, 18, 0.8)",
        },
      }}
      navButtonsWrapperProps={{
        style: {
          bottom: -50,
          top: "unset",
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
    <Stack alignItems="center" spacing={1} sx={{ overflow: "visible" }}>
      <Typography variant="h1" sx={{ fontSize: { xs: "40px" } }}>
        {img.title}
      </Typography>
      <Typography sx={{ width: 290 }} variant="body1">
        {img.caption}
      </Typography>
      <img
        style={{
          objectFit: "cover",
          width: 290,
          height: 290,
          borderRadius: 8,
        }}
        src={img.src}
      ></img>
    </Stack>
  );
}
export default Slideshow;
