import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="App">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box width="250px">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Genesis
              </Typography>
            </Box>
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Genesis
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
