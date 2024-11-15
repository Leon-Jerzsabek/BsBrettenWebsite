import { Box, Typography } from "@mui/material";

const HomepageTitle = () => {
  return (
    <Box sx={{ height: "800px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: "red",
          padding: "10%",
          marginLeft: "5%",
          marginRight: "5%",
          height: "100%",
          backgroundImage: "url('public/bsbretten_background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "80px",
            userSelect: "none",
            padding: "5%",
            color: "white",
          }}
        >
          Willkommen an den Beruflichen Schulen Bretten
        </Typography>
      </Box>
    </Box>
  );
};

export default HomepageTitle;
