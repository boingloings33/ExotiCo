import { Stack, Typography, Container, Divider, Grid } from "@mui/material";
import PDFLink from "./PDFLInk";

const pdfArr = [
  { name: "Corn Snake", src: "/PDFS/corn-snake.pdf" },
  { name: "Ball Python", src: "/PDFS/ball-python.pdf" },
  { name: "Bearded Dragon", src: "/PDFS/bearded-dragon.pdf" },
  { name: "Bird", src: "/PDFS/birds.pdf" },
  { name: "Blue Tongue Skink", src: "/PDFS/blue-tongue-skink.pdf" },
  { name: "Ferret", src: "/PDFS/corn-snake.pdf" },
  { name: "Iguana", src: "/PDFS/iguana.pdf" },
  { name: "Leopard Gecko", src: "/PDFS/leopard-gecko.pdf" },
  { name: "Rabbit", src: "/PDFS/rabbits.pdf" },
  { name: "Red Ear Turtle", src: "/PDFS/red-ear.pdf" },
  { name: "Russian Tortoise", src: "/PDFS/russian-tortoise.pdf" },
];

function Resources() {
  return (
    <Container maxWidth={"md"}>
      <Stack
        sx={{
          mt: { xs: 10, sm: 18 },
          backgroundColor: "primary.dark",
          p: 4,
          borderRadius: 4,
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography textAlign="center" variant="h1">
          Exotic Animal Resources
        </Typography>
        <Typography textAlign="center" variant="body2">
          Here are some care guides to some of the more common exotics.
        </Typography>
        <Divider sx={{ width: "100%", my: 2 }} />
        <Grid container rowSpacing={4}>
          {pdfArr.map((animal) => (
            <Grid item xs={6} sm={4} key={animal.name}>
              <PDFLink src={animal.src} name={animal.name} />
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Divider
        sx={{
          width: { xs: "88%", sm: 0 },
          pt: { xs: 2, sm: 0 },
          m: "auto",
        }}
      />
    </Container>
  );
}

export default Resources;
