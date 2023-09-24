import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
function AppBarComp() {
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          backgroundColor: "info.main",
          justifyContent: "space-between",
        }}
      >
        <IconButton>
          <MenuIcon sx={{ color: "primary.light" }} />
        </IconButton>
        <Typography
          fontFamily="'Fredoka', sans-serif;"
          fontWeight={700}
          fontSize={24}
          sx={{ color: "primary.light" }}
        >
          ExotiCo
        </Typography>
        <img
          src="images/crestedgecko.svg"
          alt=""
          style={{
            width: 36,
            borderRadius: 70,
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComp;
