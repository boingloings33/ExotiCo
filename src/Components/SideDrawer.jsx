import {
  Drawer,
  Typography,
  Stack,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
// import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

function SideDrawer({ isOpen, setIsOpen }) {
  return (
    <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="left">
      <Stack
        alignItems="start"
        sx={{ width: { xs: "100vw", md: 240 }, pt: 12, px: 4 }}
        spacing={3}
      >
        <IconButton
          onClick={() => setIsOpen(false)}
          sx={{
            height: "40px",
            width: "40px",
            position: "absolute",
            left: 22,
            top: 32,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Link href="/" underline="none">
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{
              color: "info.light",
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.main",
                cursor: "pointer",
              },
            }}
          >
            <HomeIcon fontSize="large" />
            <Typography fontSize={20} fontWeight={700} variant="h3">
              Home
            </Typography>
          </Stack>
        </Link>
        <Divider sx={{ width: { xs: "70%", md: "100%" } }} />

        <Link href="/gallery" underline="none">
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{
              color: "info.light",
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.main",
                cursor: "pointer",
              },
            }}
          >
            <PhotoLibraryIcon fontSize="large" />
            <Typography fontSize={20} fontWeight={700} variant="h3">
              Gallery
            </Typography>
          </Stack>
        </Link>

        {/* <Divider sx={{ width: { xs: "70%", md: "100%" } }} />
        <Link href="/games" underline="none">
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{
              color: "info.light",
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.main",
                cursor: "pointer",
              },
            }}
          >
            <SportsEsportsIcon fontSize="large" />
            <Typography fontSize={20} fontWeight={700} variant="h3">
              Games
            </Typography>
          </Stack>
        </Link> */}

        <Divider sx={{ width: { xs: "70%", md: "100%" } }} />
        <Link href="/resources" underline="none">
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{
              color: "info.light",
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.main",
                cursor: "pointer",
              },
            }}
          >
            <AutoStoriesIcon fontSize="large" />
            <Typography fontSize={20} fontWeight={700} variant="h3">
              Other Resources
            </Typography>
          </Stack>
        </Link>
        <Divider sx={{ width: { xs: "70%", md: "100%" } }} />
      </Stack>
    </Drawer>
  );
}

export default SideDrawer;
