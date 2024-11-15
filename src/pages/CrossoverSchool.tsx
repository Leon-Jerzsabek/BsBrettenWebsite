import { Box, Divider, Link, Typography } from "@mui/material";
import WhatsNewComponent from "../components/WhatsNewComponent";
import OurTeamComponent from "../components/OurTeamComponent";

const CrossoverSchool = () => {
  const vocationalSchoolTeamsList = [
    {
      image: "/ourTeam/Sven_Hölig.jpeg",
      person: "Sven Hölig",
      description: "Abteilungsleiter",
    },
    {
      image: "/ourTeam/Inge_Komke_Hurst.jpeg",
      person: "Inge Komke-Hurst",
      description: "Assistentin der Abteilungsleitung",
    },
    {
      image: "/ourTeam/Nicole_Dietz.jpeg",
      person: "Nicole Dietz",
      description: "Assistentin der Abteilungsleitung",
    },
    {
      image: "/ourTeam/Volker_Resch.jpg",
      person: "Volker Resch",
      description: "AVdual Begleiter",
    },
    {
      image: "/ourTeam/Holger_Persching.jpg",
      person: "Holger Pfersching",
      description: "AVdual Begleiter",
    },
  ];

  const whatsNewList = [
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2024/02/240207_Infotag5-1-2048x1365.jpeg",
      title: "After-Work-Info ein Erfolg",
      description: " BSB als kleine Bildungsstadt erkundet",
      time: "vor 2 Wochen",
    },
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2023/09/230929_Tecspaze_02-2048x1536.jpeg",
      title: "Innovative Digitalwerkstatt Tecspaze informiert",
      description: "Innovative Digitalwerkstatt Tecspaze informiert",
      time: "vor 2 Monaten",
    },
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2023/07/20230315_Bild2.jpg",
      title: "Übungsfirmenmessebesuch in Pforzheim",
      description:
        "Die Brettener Naturkorb GmbH (Übungsfirma der zweijährigen Berufsfachschule Wirtschaft) und die Active Wear Bretten GmbH (Übungsfirma des Berufskolleges I  Wirtschaft) besuchten die regionale Übungsfirmenmesse in Pforzheim.",
      time: "vor 4 Monaten",
    },
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2023/05/2023-03-Fussball4.jpg",
      title: "Anpfiff nach zwei Jahren Coronapause",
      description:
        "Hochbetrieb in den Fluren und Zimmern der BSB. Dort, wo unter der Woche normaler Unterrichtsalltag herrscht, präsentierten die vielfältigen Fachschaften spannende Aspekte ihrer Aufgabenbereiche. So wartete die Ernährungslehre mit einem Sinnesparcours auf, bei den Fremdsprachen gab es im reich dekorierten Klassenzimmer Rätsel zu lösen und landestypische Snacks zu gewinnen",
      time: "vor 5 Monaten",
    },
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2023/03/Ausstellung-1-2048x1175.jpg",
      title: "Wanderausstellung war zu Gast an BSB",
      description:
        "Seit dem Jahr 2014 sind mehr als 26.141 Geflüchtete im Mittelmeer ertrunken. Allein im noch jungen Jahr 2023 sind bisher 383 Menschen bei der Flucht über das Mittelmeer gestorben.[…]",
      time: "vor 6 Monaten",
    },
  ];

  return (
    <>
      <Box
        sx={{
          paddingTop: "3%",
        }}
      >
        <Box
          sx={{
            paddingTop: "3%",
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              color: "black",
              textAlign: "center",
              userSelect: "none",
            }}
          >
            Übergang Schule und Beruf
          </Typography>
          <Divider
            sx={{
              bgcolor: "black",
              margin: "5%",
              marginBottom: "3%",
              marginTop: "3%",
            }}
          />
          <Box
            sx={{
              padding: "2rem",
              margin: "5%",
              backgroundColor: "#3c3c3c",
              borderRadius: "8px",
              boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "white", lineHeight: 1.6, marginBottom: "1rem" }}
            >
              Auf dieser Seite finden Sie alle Informationen zu den Schularten
            </Typography>

            {/* Links Section */}
            <Typography
              variant="body1"
              sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
            >
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ fontWeight: "bold" }}
              >
                AVdual
              </Link>{" "}
              – Ausbildungsvorbereitung dual
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
            >
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ fontWeight: "bold" }}
              >
                Schule International
              </Link>{" "}
              – Informationen für zugewanderte Schülerinnen und Schüler (VABO)
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: "2rem", color: "white", lineHeight: 1.6 }}
            >
              <Link href="#" color="inherit" underline="hover">
                Anmeldeportal
              </Link>{" "}
              für zugewanderte Schülerinnen und Schüler (VABO) des Landkreises
              Karlsruhe
            </Typography>

            <Divider
              sx={{
                marginY: "2rem",
                color: "white",
                backgroundColor: "#cccccc",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2rem",
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#d32f2f",
                  fontWeight: "bold",
                  marginRight: "1rem",
                }}
              >
                #Berufsvorbereitung
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#d32f2f", marginRight: "1rem" }}
              >
                (AVdual, VABO)
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <Link
                  href="https://bsb-bretten.de/wp-content/uploads/2023/01/Flyer_AVdual_BSB_2301.pdf"
                  color="inherit"
                  underline="hover"
                >
                  Hier geht es zum Flyer!
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <WhatsNewComponent
          whatsNewList={whatsNewList}
          header="der Kaufmännischen Schule"
        />
        <OurTeamComponent teamList={vocationalSchoolTeamsList} />
      </Box>
    </>
  );
};

export default CrossoverSchool;
