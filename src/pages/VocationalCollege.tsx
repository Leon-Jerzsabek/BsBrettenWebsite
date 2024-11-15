import { Box, Divider, Typography } from "@mui/material";
import WhatsNewComponent from "../components/WhatsNewComponent";
import OurTeamComponent from "../components/OurTeamComponent";

const VocationalCollege = () => {
  const vocationalSchoolTeamsList = [
    {
      image: "/ourTeam/Gerd_Heilig.jpeg",
      person: "Gerd Heilig",
      description: "Abteilungsleiter",
    },
    {
      image: "/ourTeam/Kuttler_Jonas.jpg",
      person: "Jonas Kuttler",
      description: "Abteilungsassistenz Altenpflegehilfe",
    },
    {
      image: "/ourTeam/Tamara_Kull.jpeg",
      person: "Tamara Kull",
      description: "Abteilungsassistenz  Sozialpädagogik",
    },
    {
      image: "/ourTeam/Simone_Diehlmann.jpeg",
      person: "Simone Diehlmann",
      description: "Abteilungsassistenz Zweijährige Berufsfachschulen",
    },
  ];

  const whatsNewList = [
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2024/07/240716_Abschlussfeier_02.jpeg",
      title: "Entlassungsfeier der BSB erstmals im Hallenzentrum „Grüner“",
      description:
        "„Nicht weghören, sondern zuhören muss das Motto für die Zukunft seinNachdem die Stadtparkhalle zu klein und die Absolventenzahl zu groß geworden war, haben die Beruflichen Schulen Bretten (BSB) erstmals wieder […]",
      time: "vor 1 Woche",
    },
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2024/02/240207_Infotag5-1-2048x1365.jpeg",
      title: "After-Work-Info ein Erfolg",
      description: "BSB als kleine Bildungsstadt erkundet",
      time: "vor 7 Monaten",
    },
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2024/02/240131_Handball_BSB-2048x1153.jpg",
      title: "BSB Handballmannschaft gewinnt Kreisturnier",
      description: "BSB Handballmannschaft gewinnt Kreisturnier",
      time: "vor 8 Monaten",
    },
  ];

  return (
    <>
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
          Berufskollegs
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
            sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
          >
            Eine komplexere Arbeitswelt und der gesellschaftliche Wandel führen
            zu neuen Ansprüchen und Herausforderungen. Diese nimmt das
            Berufskolleg in einer Verknüpfung von Theorie und Praxis an. Das
            Profil(-fach) spielt dabei eine wesentliche Rolle für eine
            entsprechende berufliche Qualifikation. Gleichzeitig wird eine
            erweiterte allgemeine Bildung vermittelt.
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
          >
            Neben der Fachhochschulreife kann in jedem Profil ein Assistent
            (beispielsweise „Staatlich geprüfter Assistent“ bzw. „Staatlich
            geprüfte Assistentin“) erworben werden.
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
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <img
              src="https://bsb-bretten.de/wp-content/uploads/2024/10/Schularten-des-Berufskollegs-1024x306.jpg"
              alt="AVdual Flyer"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "20px",
                boxShadow: "0px 5px 10px rgba(255,255,255,0.6)",
              }}
            />
          </Box>
        </Box>
        <WhatsNewComponent
          whatsNewList={whatsNewList}
          header="von den Berufskollegs"
        />
        <OurTeamComponent teamList={vocationalSchoolTeamsList} />
      </Box>
    </>
  );
};

export default VocationalCollege;
