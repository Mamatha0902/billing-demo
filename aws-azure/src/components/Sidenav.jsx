import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../appStore";
import HomeIcon from '@mui/icons-material/Home';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import azureiicon from "../azureiicon.jpg";
// import gcplogo from "../gcplogo.png";
// import atlassian from "../atlassianlogo.jpg";
// import awslogo from "../awslogo.jpg"
import AzureIcon from "../assets/Azure-Logo-Transparent.png"
import GCPIcon from "../assets/kisspng-cloud-computing-google-cloud-platform-cloud-storag-google-cloud-logo-png-image-free-download-searchpn-5d01a5ae78d303.9725254015603890384949.png"


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidenav() {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  //   const updateOpen = useAppStore((state) => state.updateOpen);
  const open = useAppStore((state) => state.dopen);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box height={30} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/home");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              className={`ms-${open ? 'auto' : 4}`}

            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "white"
                }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItem sx={{ opacity: open ? 1 : 0, fontSize: 14, }}>
                Home
              </ListItem>
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/Awspage");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              className={`ms-${open ? 'auto' : 4}`}

            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* <InboxIcon /> */}
                {/* <img src={awslogo} alt="awslogo.jpg" style={{ width: '24px', height: '24px', objectFit: 'cover' }} /> */}
                <i className="fa-brands fa-aws" id="aws-icon-id" style={{ color: '#fff' }}></i>
              </ListItemIcon>
              <ListItem sx={{ opacity: open ? 1 : 0, fontSize: 14 }}>
                AWS
              </ListItem>
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/AzurePage");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              className={`ms-${open ? 'auto' : 4}`}

            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* <InboxIcon /> */}
                <img src={AzureIcon} alt="azureiicon.jpg" style={{ width: '24px', height: '24px', objectFit: 'cover' }} />
              </ListItemIcon>
              <ListItem sx={{ opacity: open ? 1 : 0, fontSize: 14 }}>
                Azure
              </ListItem>
            </ListItemButton>
          </ListItem>

          {/* <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/GitPage");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:"white"
                }}
              >
                <GitHubIcon />
              </ListItemIcon>
              <ListItem sx={{ opacity: open ? 1 : 0, fontSize: 14 }}>
              Git
              </ListItem>
            </ListItemButton>
          </ListItem> */}

          {/* <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/Atlassian");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img src={atlassian} alt="atlassian.jpg" style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>
              <ListItem sx={{ opacity: open ? 1 : 0, fontSize: 14 }}>
              Atlassian
              </ListItem>
            </ListItemButton>
          </ListItem> */}

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/GcpPage");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              className={`ms-${open ? 'auto' : 4}`}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* <InboxIcon /> */}
                <img src={GCPIcon} alt="gcplogo.jpg" style={{ width: '24px', height: '24px', objectFit: 'cover' }} />
              </ListItemIcon>
              <ListItem sx={{ opacity: open ? 1 : 0, fontSize: 14 }}>
                GCP
              </ListItem>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />

        <div className="d-flex justify-content-center align-items-center mt-auto mb-4" style={{ width: '100%' }}>
          <img src='https://motivitylabs.com/wp-content/uploads/elementor/thumbs/logo-q5v9dhv02ypee8mlk6bo0d9kvq2fjsb4hbtj714cj0.png' alt="motivitylabs" style={{ width: '60%', height: 'auto', objectFit: 'cover' }} className={`me-${open ? 5 : 0}`} />
        </div>
      </Drawer>
    </Box>
  );
}
