import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

interface CutsomPagesWithSubpages {
  mainPage: string;
  subpages: string[] | null;
}

const pagesWithSubpages: CutsomPagesWithSubpages[] = [
  {
    mainPage: "Unsere Schule",
    subpages: [
      "Schularten",
      "Wir über uns",
      "Kollegium",
      "Schulleitung",
      "Sekretariat",
      "Hausmeisterteam",
    ],
  },
  { mainPage: "Aktuelles", subpages: null },
  {
    mainPage: "Anmeldung",
    subpages: [
      "Berufsschulen",
      "Einjährige Berufsfachschule - Metall",
      "Fachschule für Technik",
      "AVDual",
      "VABO",
      "Zweijährige Berufsfachschulen - Mittlere Reife",
      "Berufsfachschulen zur Aus- und Weiterbildung",
      "BKFH",
      "Anmeldung BG & BK",
    ],
  },
  {
    mainPage: "Service",
    subpages: [
      "Flyer",
      "Downloads",
      "Pausenzeiten",
      "Orientierungspraktikum",
      "Schulpraktikum",
      "Verbesserungsmanagement",
      "Beschwerdemanagement",
    ],
  },
  {
    mainPage: "BSB-Intern",
    subpages: [
      "Webuntis",
      "PAEDML",
      "SchülerMoodle",
      "Auslandsaktivitäten an den BSB",
    ],
  },
  { mainPage: "Speiseplan", subpages: null },
  { mainPage: "Kontakt", subpages: ["Impressum", "Datenschutzerklärung"] },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenuIndex(null);
  };

  return (
    <AppBar elevation={0} position="static" sx={{ bgcolor: "transparent" }}>
      <Toolbar
        disableGutters
        sx={{
          pl: 1,
          pr: 1,
          margin: "10px",
          bgcolor: "#3c3c3c",
          borderRadius: "15px",
        }}
      >
        <SchoolIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            flexGrow: 1,
          }}
        >
          BSB
        </Typography>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pagesWithSubpages.map((page, index) => (
              <Box key={index}>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    "&:hover": {
                      backgroundColor: "#000000 !important",
                    },
                  }}
                  aria-controls={
                    openMenuIndex === index ? "basic-menu" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={openMenuIndex === index ? "true" : undefined}
                  onClick={(e) => handleClick(e, index)}
                >
                  {page.mainPage}
                </Button>

                {page.subpages !== null ? (
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openMenuIndex === index}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {page.subpages?.map((subpage, subIndex) => (
                      <MenuItem
                        sx={{
                          "&:hover": {
                            backgroundColor: "red",
                          },
                        }}
                        key={subIndex}
                        onClick={handleClose}
                      >
                        {subpage}
                      </MenuItem>
                    ))}
                  </Menu>
                ) : undefined}
              </Box>
            ))}
          </Menu>
        </Box>
        <SchoolIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          BSB
        </Typography>

        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
          {pagesWithSubpages.map((page, index) => (
            <Box key={index}>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                aria-controls={
                  openMenuIndex === index ? "basic-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={openMenuIndex === index ? "true" : undefined}
                onClick={(e) => handleClick(e, index)}
              >
                {page.mainPage}
              </Button>

              {page.subpages !== null ? (
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenuIndex === index}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  PaperProps={{
                    sx: {
                      bgcolor: "#3c3c3c",
                      color: "white",
                    },
                  }}
                  sx={{ borderRadius: "15px" }}
                >
                  {page.subpages?.map((subpage, subIndex) => (
                    <MenuItem key={subIndex} onClick={handleClose}>
                      {subpage}
                    </MenuItem>
                  ))}
                </Menu>
              ) : undefined}
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <InstagramIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                justifyItems: "center",
              }}
            />
            <FacebookIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                justifyItems: "center",
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
