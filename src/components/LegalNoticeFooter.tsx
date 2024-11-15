import { Typography, Box, Divider } from "@mui/material";

const HomepageFooter = () => {
  return (
    <Box sx={{ bgcolor: "#3c3c3c", pl: 20, pr: 20 }}>
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          paddingTop: 10,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: "white",
              textAlign: "center",
            }}
          >
            Kontakt
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              color: "white",
              textAlign: "center",
            }}
          >
            Wilhelmstr.22 <br />
            75015 Bretten <br /> Telefon: 0721 936-61600 <br />
            Fax: 0721 936-61789 <br /> E-Mail: sekretariat@bsb-bretten.de
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h5"
            sx={{ mb: 2, color: "white", textAlign: "center" }}
          >
            Ablteitungen
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 2, color: "white", textAlign: "center" }}
          >
            Berufskollegs
            <br />
            Gewerbliche Schule
            <br />
            Berufliche Gymnasien
            <br />
            Kaufmännische Berufsschule
            <br />
            Übergang Schule & Beruf
            <br />
            Hauswirtschaftlich-sozialwissenschaftliche Schule
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h5"
            sx={{ mb: 2, color: "white", textAlign: "center" }}
          >
            Info
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, color: "white", textAlign: "center" }}
          >
            AGB <br />
            Impressum
            <br />
            Datenschutzerklärung
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: "white", mt: 5, mb: 5 }} />

      <Box sx={{ textAlign: "center", pb: 5 }}>
        <Typography variant="body1" sx={{ mb: 2, color: "white" }}>
          © BSB-Bretten 2024
          <br />
          WEBDESIGN Baden-Baden / Karlsruhe
        </Typography>
      </Box>
    </Box>
  );
};

export default HomepageFooter;
