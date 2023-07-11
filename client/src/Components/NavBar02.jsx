import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logoImage from "./images/logomain.png";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/home" },
  { label: "Contact", path: "/home" },
  { label: "My appointments", path: "/appointment/list" },
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logoImage} alt="Logo" style={{ height: 80 }} />
      </Typography>
      
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/appointment"
            sx={{ backgroundColor: "#fffff", textAlign: "center" }}
          >
            <ListItemText primary="Book now" />
          </ListItemButton>
        </ListItem>
       
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/auth/sign-up"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ background: "#121212", paddingX: 4 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 0.1, display: { xs: "none", md: "block" } }}
            >
              <img src={logoImage} alt="Logo" style={{ height: 80 }} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
              <Stack direction={"row"} spacing={2}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    sx={{ color: "#fff", textTransform: "none" }}
                    component={Link}
                    to={item.path}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  component={Link}
                  to="/appointment"
                  variant="contained"
                  sx={{ backgroundColor: "red", color: "#fff" }}
                >
                  Book now
                </Button>
              </Stack>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
             
              <Button
                component={Link}
                to="/auth/sign-up"
                variant="contained"
                sx={{ backgroundColor: "red", color: "#fff" }}
              >
               Log Out
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

export default NavBar;
