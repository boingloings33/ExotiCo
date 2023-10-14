import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";
import { useState } from "react";
function AppBarComp() {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenuClick() {
    setIsOpen(true);
  }
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "info.main" }}>
      <SideDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton onClick={handleMenuClick}>
          <MenuIcon sx={{ color: "secondary.light" }} />
        </IconButton>
        <Typography
          fontFamily="'Fredoka', sans-serif;"
          fontWeight={700}
          fontSize={24}
          sx={{ color: "secondary.light" }}
        >
          <span>Exoti</span>
          <span style={{ color: "#73C0A2" }}>Co</span>
        </Typography>
        <img
          src="icons/crested-gecko.svg"
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
