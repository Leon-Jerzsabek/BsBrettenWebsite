import { Box, Divider, Link, Typography } from "@mui/material";
import OurTeamComponent from "../components/OurTeamComponent";
import WhatsNewComponent from "../components/WhatsNewComponent";

const VocationalSchool = () => {
  const vocationalSchoolTeamsList = [
    {
      image: "/ourTeam/Matthias_Kempf.jpeg",
      person: "Matthias Kempf",
      description: "Abteilungsleiter",
    },
    {
      image: "/ourTeam/Knoedler_Amelie.jpeg",
      person: "Amelie Knödler",
      description: "Abteilungsassistentin",
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
        "https://bsb-bretten.de/wp-content/uploads/2023/11/2023_09_14_TS_Bretten_Exkursion-2048x1536.jpg",
      title: "BSB-Techniker besuchen Firma Nord-Lock",
      description: "Von Vorspannkraft, Drehmoment und Verspannungsschaubilder ",
      time: "vor 4 Wochen",
    },
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2023/09/230929_Tecspaze_02-2048x1536.jpeg",
      title: "Innovative Digitalwerkstatt Tecspaze informiert",
      description: "Innovative Digitalwerkstatt Tecspaze informiert",
      time: "vor 2 Monaten",
    },
  ];

  return (
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
        Gewerbliche Schule
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
          Die beruflichen Schulen Bretten begleiten jährlich über hundert
          Schülerinnen und Schüler zu einem der vielen möglichen{" "}
          <strong>Ausbildungsabschlüssen</strong>. Hierbei legen wir großen Wert
          darauf, dass die Verzahnung zwischen Ausbildungsbetrieben und
          Berufsschule mit Leben gefüllt ist. Das Zusammenspiel von Theorie und
          Praxis sowie überfachlicher Qualifikation bildet in Kombination mit
          vertiefter Allgemeinbildung den Schlüssel zum Erfolg.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
        >
          Die <strong>Fachschule für Technik</strong> bietet für Berufstätige
          mit abgeschlossener Berufsausbildung die Möglichkeit, sich auf eine
          Tätigkeit im mittleren Management vorzubereiten oder sich für die
          berufliche Selbstständigkeit zu qualifizieren. Mit dem Bestehen der
          Abschlussprüfung zum/zur Staatlich geprüften Techniker/Technikerin
          wird die Fachschulreife erworben. Die Beruflichen Schulen Bretten
          bieten die Fachschule für Technik in der Fachrichtung Maschinentechnik
          in Vollzeit an. Die Ausbildung dauert zwei Schuljahre.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
        >
          Für Betriebe im Handwerk oder Unternehmen ohne eigene Lehrwerkstatt
          bieten wir die <strong>einjährige Berufsfachschule Metall</strong> an.
          In der einjährigen Berufsfachschule Metall wird das erste Lehrjahr
          (Grundstufe) in schulischer Vollzeit (Theorie und Praxis) absolviert.
        </Typography>
        <Divider
          sx={{ marginY: "2rem", color: "white", backgroundColor: "#cccccc" }}
        />
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "white", marginBottom: "1rem" }}
        >
          Beschulung letzter Schultag der gewerblichen Berufsschule
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "2rem", color: "white" }}
        >
          Dienstag, den 23.07.2024
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "white", marginBottom: "1rem" }}
        >
          Erste Schultage im Schuljahr 24/25
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "white", marginBottom: "0.5rem" }}
        >
          1. Ausbildungsjahr: Montag, den 09.09.24 13 h
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", marginBottom: "0.5rem" }}
        >
          2. Ausbildungsjahr: Dienstag, den 10.09.24 13 h
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", marginBottom: "1rem" }}
        >
          3. Ausbildungsjahr: Mittwoch, den 11.09.24 13 h
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
        >
          Über den ersten Schultag der 4. Ausbildungsjahre werden Sie spätestens
          zu Beginn der ersten Schulwoche informiert, da hier die
          Unterrichtstage noch nicht feststehen.
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
        >
          Sollten Sie noch Azubis für das kommende Schuljahr eingestellt haben,
          die noch nicht an der Berufsschule angemeldet sind, so holen Sie dies
          bitte zeitnah nach.
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
        >
          Sie erleichtern uns die (Stunden- & Klassen-)Planung dadurch immens.
          Das entsprechende Anmeldeformular finden Sie auf unserer Homepage{" "}
          <Link
            href="https://bsb-bretten.de/wp-content/uploads/2023/11/Aufnahmeantrag-Berufsschule-2024-253386.pdf"
            color="primary"
            underline="hover"
          >
            hier
          </Link>
          .
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
        >
          Das ausgefüllte Formular (inkl. Masernimmunitätsnachweis) können Sie
          uns über folgende Mailadresse zukommen lassen:
        </Typography>
        <Typography variant="body1" sx={{ color: "red", fontWeight: "bold" }}>
          sekretariat@bsb-bretten.de
        </Typography>
      </Box>
      <WhatsNewComponent
        whatsNewList={whatsNewList}
        header="der Gewerblichen Schule"
      />
      <OurTeamComponent teamList={vocationalSchoolTeamsList} />
    </Box>
  );
};

export default VocationalSchool;
