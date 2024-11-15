import { Box, Divider, Typography } from "@mui/material";

const GoogleMapsLink = () => {
  return (
    <Box sx={{ padding: "5%", bgcolor: "#3c3c3c" }}>
      <Typography
        sx={{
          fontSize: "50px",
          color: "white",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        Wo du uns findest!
      </Typography>
      <Divider sx={{ bgcolor: "white", mt: 5, mb: 5, marginBottom: "4%" }} />
      <Box
        sx={{
          height: {
            xs: "200px",
            sm: "300px",
            md: "400px",
            lg: "500px",
          },
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388.8285626606454!2d8.703032899227157!3d49.03500151265659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47977580f9fbad67%3A0x50be0ea39fcbef52!2sBerufliche%20Schulen%20Bretten!5e0!3m2!1sde!2sde!4v1731592077172!5m2!1sde!2sde"
          width="100%"
          height="100%"
          style={{
            border: 0,
            borderRadius: "25px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.6)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
};

export default GoogleMapsLink;
