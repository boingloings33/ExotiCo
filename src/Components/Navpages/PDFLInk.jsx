import { Typography, Link } from "@mui/material";

function PDFLink({ src, name }) {
  return (
    <Link
      href={src}
      target="_blank"
      sx={{
        color: "info.main",
        textDecoration: "none",
        "&:hover": { textDecoration: "underline", color: "primary.main" },
      }}
    >
      {
        <Typography variant="h5" sx={{ fontSize: { xs: 14, sm: 22 } }}>
          {name}
        </Typography>
      }
    </Link>
  );
}

export default PDFLink;
