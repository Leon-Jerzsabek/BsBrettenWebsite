import { Box, Divider, Link, Typography } from "@mui/material";
import WhatsNewComponent from "../components/WhatsNewComponent";
import OurTeamComponent from "../components/OurTeamComponent";

const HomeEconomicsSocialScienceSchool = () => {
  const vocationalSchoolTeamsList = [
    {
      image: "/ourTeam/Christian_Odenwald.jpeg",
      person: "Christian Odenwald",
      description: "Abteilungsleiter",
    },
    {
      image: "/ourTeam/Elke_Henn.jpg",
      person: "Elke Henn",
      description: "Abteilungsassistenz Altenpflegehilfe",
    },
    {
      image: "/ourTeam/Gerd_Geweniger.jpg",
      person: "Gerd Geweniger",
      description: "Abteilungsassistenz  Sozialpädagogik",
    },
    {
      image: "/ourTeam/Mueller_Dominik.jpeg",
      person: "Dominik Müller",
      description: "Abteilungsassistenz Zweijährige Berufsfachschulen",
    },
  ];

  const whatsNewList = [
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2024/07/240726_Verabschiedung-Bader-2048x1334.jpeg",
      title: "Verabschiedung von Markus Bader an den BSB",
      description:
        "Ein sehr aufmerksamer und sehr vertrauensvoller Pädagoge Zum Ende des Schuljahres 2023/2024 wurde an den Beruflichen Schulen Bretten (BSB) Markus Bader von Schulleiterin Nicole Roeder den Ruhestand verabschiedet. Der technische […]",
      time: "vor 4 Tagen",
    },
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
        "https://bsb-bretten.de/wp-content/uploads/2024/06/2024_06_24_Kooperation2-2048x1536.jpeg",
      title:
        "Zweijährige Berufsfachschulen und gymnasiale Jahrgangsstufen kooperieren",
      description:
        "Gemeinsam forschen und entdecken: Eine erfolgreiche Kooperation zwischen Chemie und Küche.",
      time: "vor 2 Wochen",
    },
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2024/02/240207_Infotag5-1-2048x1365.jpeg",
      title: "After-Work-Info ein Erfolg",
      description: "BSB als kleine Bildungsstadt erkundet",
      time: "vor 3 Monaten",
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
          Hauswirtschaftlich- sozialwissenschaftliche Schule
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
            Die Hauswirtschaftlich - sozialwissenschaftlichen Schulen an den
            Beruflichen Schulen Bretten stehen für Vielfalt, Weiterbildung und
            ein Vorankommen im persönlichen Lebenslauf. In allen Schulbereichen
            steht eine enge Verknüpfung von Theorie und Praxis der jeweiligen
            beruflichen Profile im Vordergrund.
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "white", marginBottom: "1rem" }}
          >
            Wir legen Wert auf Lernen mit Kopf, Herz und Hand!
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
          >
            <strong>Die Zweijährigen Berufsfachschulen</strong> mit ihren
            Profilen Hauswirtschaft und Ernährung, Gesundheit und Pflege,
            Wirtschaft, Elektrotechnik und Metalltechnik bieten die Möglichkeit
            eines mittleren Bildungsabschlusses mit beruflicher Grundbildung und
            vertiefter Allgemeinbildung!
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
          >
            Die Zweijährigen
            <strong>
              {" "}
              Berufsfachschulen zur beruflichen Aus- und Weiterbildung{" "}
            </strong>{" "}
            gliedern sich in drei Schularten:
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
          >
            Die Zweijährige Berufsfachschule
            <strong>
              {" "}
              sozialpädagogische Assistenz (ehem. „Kinderpflege“)
            </strong>{" "}
            mit anschließendem Anerkennungsjahr führt zur staatlichen
            Anerkennung und befähigt als Zweitkraft in Einrichtungen
            öffentlicher und freier Trägerschaft bei der Erziehung, Bildung,
            Pflege und Betreuung von Kindern eingesetzt zu werden. Dies gilt
            ebenso für die dreijährige praxisintegrierte Ausbildung zur
            staatlich anerkannten
            <strong> sozialpädagogischen Assistenz (PIA).</strong> Für weitere
            Informationen klicken Sie
            <strong>
              {" "}
              <Link
                href="https://bsb-bretten.de/wp-content/uploads/2022/02/PIA_PowerPoint.pdf"
                color="primary"
                underline="hover"
              >
                hier
              </Link>
            </strong>{" "}
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
          >
            Die Zweijährige Berufsfachschule für
            <strong> Altenpflegehilfe für Migrant*innen</strong> führt zu einer
            staatlichen Anerkennung in der Pflege und Betreuung von
            unterstützungsbedürftigen Menschen unter Anleitung einer Fachkraft.
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginBottom: "1rem", color: "white", lineHeight: 1.6 }}
          >
            Die Berufsfachschule zum Erwerb von Zusatzqualifikationen,
            Schwerpunkt
            <strong> Vorbereitung Erzieher*innenabschluss </strong>
            führt zum Einsatz als Erstkraft in sozialpädagogischen Einrichtungen
            öffentlicher und freier Trägerschaft.
          </Typography>
        </Box>
        <WhatsNewComponent
          whatsNewList={whatsNewList}
          header="der Hauswirtschaftlich-sozialwissenschaftlichen Schule"
        />
        <OurTeamComponent teamList={vocationalSchoolTeamsList} />
      </Box>
    </>
  );
};

export default HomeEconomicsSocialScienceSchool;
