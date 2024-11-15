import { Box, Divider, Link, Typography } from "@mui/material";
import WhatsNewComponent from "../components/WhatsNewComponent";
import OurTeamComponent from "../components/OurTeamComponent";

const BusinessSchool = () => {
  const vocationalSchoolTeamsList = [
    {
      image: "/ourTeam/Matthias_Kempf.jpeg",
      person: "Matthias Kempf",
      description: "Abteilungsleiter",
    },
    {
      image: "/ourTeam/Erik_Böttcher.jpeg",
      person: "Erik Böttcher",
      description: "Abteilungsassistenz",
    },
    {
      image: "/ourTeam/Ann_Kathrin_Rück.jpeg",
      person: "Ann-Kathrin Rück",
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
        <Typography
          sx={{
            fontSize: "50px",
            color: "black",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          Kaufmännische Schule
        </Typography>
        <Divider
          sx={{
            bgcolor: "black",
            margin: "5%",
            marginBottom: "0%",
            marginTop: "3%",
          }}
        />
        <Box>
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
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              ENTSCHULDIGUNG ODER FREISTELLUNG NOTWENDIG?
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
            >
              Nutzen Sie bitte folgende E-Mail-Adresse:{" "}
              <Link
                href="mailto:kbs@bsb-bretten.de"
                color="primary"
                underline="hover"
              >
                kbs@bsb-bretten.de
              </Link>
              <br />
              Bitte geben Sie den Namen und die Klasse des „Azubis“ an.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              WANN FINDET DER UNTERRICHT IM SCHULJAHR 2024/2025 STATT?
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
            >
              Der Unterricht in der kaufmännischen Berufsschule beginnt – mit
              Ausnahme des Blocks – in der zweiten Schulwoche.
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "white", fontWeight: "bold", marginBottom: "1rem" }}
            >
              KAUFMÄNNISCHE AUSBILDUNGSGÄNGE
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "white", marginBottom: "0.5rem" }}
            >
              Einzelhändler/-in / Verkäufer/-in:
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: "0.5rem" }}
            >
              1. Ausbildungsjahr (W1KE) Dienstag und Freitag
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: "0.5rem" }}
            >
              2. Ausbildungsjahr (W2KE) Montag und Donnerstag
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: "1rem" }}
            >
              3. Ausbildungsjahr (W3KE) Mittwoch und Freitag
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "white", marginBottom: "0.5rem" }}
            >
              Industriekaufmann/-frau:
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: "1rem" }}
            >
              Erstes Ausbildungsjahr: Montag + Freitag
              <br />
              Weitere Informationen und die Ausbildungsblöcke finden Sie auch
              nach dem{" "}
              <Link
                href="https://bsb-bretten.de/wp-content/uploads/2024/03/Blockplan-24-25.pdf"
                color="primary"
                underline="hover"
              >
                Blockplan KBS Bretten 2024-25
              </Link>
              .
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "white", marginBottom: "0.5rem" }}
            >
              Kaufleute für IT-Systemmanagement & Kaufleute für
              Digitalisierungsmanagement:
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: "0.5rem" }}
            >
              1. Ausbildungsjahr (W1SY/DM): Mittwoch und Dienstag (A-Woche)
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: "0.5rem" }}
            >
              2. Ausbildungsjahr (W2SY/DM): Donnerstag und Freitag (A-Woche)
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: "1rem" }}
            >
              3. Ausbildungsjahr (W3SY/DM, W3DM): Montag und Dienstag (B-Woche)
            </Typography>

            <Divider
              sx={{
                marginY: "2rem",
                color: "white",
                backgroundColor: "#cccccc",
              }}
            />
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold", marginBottom: "1rem" }}
            >
              WANN SIND FERIEN? WAS IST EINE A- ODER EINE B-WOCHE?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: "1rem", lineHeight: 1.6 }}
            >
              Schulkalender Schuljahr 2024/25. Erstes Halbjahr, Zweites
              Halbjahr.
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold", marginBottom: "1rem" }}
            >
              WIE MELDE ICH EINEN AUSZUBILDENDEN AN?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: "1rem", lineHeight: 1.6 }}
            >
              Hier finden Sie alle Anmeldeformulare zum Download, bitte schicken
              Sie es ausgefüllt an unsere Schule zurück.
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold", marginBottom: "1rem" }}
            >
              WANN IST EINE AUFNAHME IN DER KAUFMÄNNISCHEN BERUFSSCHULE MÖGLICH?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: "1rem", lineHeight: 1.6 }}
            >
              Ihr Ausbildungsbetrieb, bei dem Sie Ihren Ausbildungsvertrag
              haben, meldet Sie an der zuständigen Berufsschule an.
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold", marginBottom: "1rem" }}
            >
              Wie lange dauert die Ausbildung?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", marginBottom: "1rem", lineHeight: 1.6 }}
            >
              Die Ausbildungsdauer ist abhängig vom Ausbildungsberuf. Im dualen
              Ausbildungssystem ergänzen sich die Lernorte „Betrieb“ und
              „Berufsschule“ in ihren theoretischen und praktischen Lernorten
              ideal. Die theoretische Abschlussprüfung findet an der
              Berufsschule statt und die praktische an der zuständigen Kammer.
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold", marginBottom: "1rem" }}
            >
              Welche Zusatzqualifikationen und Weiterbildungsmöglichkeiten neben
              der kaufmännsichen Berufsschule sind möglich?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                marginBottom: "1rem",
                marginLeft: "1rem",
                lineHeight: 1.6,
              }}
            >
              - Hauptschüler: mittlerer Bildungsabschluss nach der
              abgeschlossenen Berufsausbildung durch die Zusatzqualifikation
              „9+3“.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "white",
                marginBottom: "1rem",
                marginLeft: "1rem",
                lineHeight: 1.6,
              }}
            >
              - Realschüler: Fachhochschulreife nach der abgeschlossenen
              Berufsausbildung und Zusatzunterricht mit Zusatzprüfung (auch für
              externe Schüler möglich).
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "white",
                marginBottom: "1rem",
                marginLeft: "1rem",
                lineHeight: 1.6,
              }}
            >
              - Industriemechaniker: IHK-Zusatzqualifikation als
              Elektrofachkraft für festgelegte Tätigkeiten.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "white",
                marginBottom: "1rem",
                marginLeft: "1rem",
                lineHeight: 1.6,
              }}
            >
              - Wirtschaftsinformatik als Zusatzqualifikation für
              IT-Systemkaufleute und Informatikkaufleute.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "white",
                marginBottom: "1rem",
                marginLeft: "1rem",
                lineHeight: 1.6,
              }}
            >
              - KMK Fremdsprachenzertifikat
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "white",
                marginBottom: "1rem",
                marginLeft: "1rem",
                lineHeight: 1.6,
              }}
            >
              - Handelsassistent
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                marginBottom: "1rem",
                marginLeft: "1rem",
                lineHeight: 1.6,
              }}
            >
              - Zusatzqualifikation Künstliche Inteligenz (Plan) (Anmeldung)
            </Typography>
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

export default BusinessSchool;
