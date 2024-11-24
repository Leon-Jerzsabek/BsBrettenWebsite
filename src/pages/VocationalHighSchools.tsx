import { Box, Divider, Link, Typography } from "@mui/material";
import WhatsNewComponent from "../components/WhatsNewComponent";
import OurTeamComponent from "../components/OurTeamComponent";

const VocationalHighSchools = () => {
  const vocationalSchoolTeamsList = [
    {
      image: "/ourTeam/Andrea_Neumann.jpeg",
      person: "Andrea Neumann",
      description: "Abteilungsleiterin",
    },
    {
      image: "/ourTeam/Frank_Roll.jpeg",
      person: "Frank Roll",
      description: "Stellvertretender Abteilungsleiter Oberstufenberater",
    },
    {
      image: "/ourTeam/Dr_Janina_Hellmann.jpeg",
      person: "Dr. Janina Hellmann",
      description: "Abteilungsassistentin",
    },
    {
      image: "/ourTeam/Lena_Lutz.jpeg",
      person: "Lena Lutz",
      description: "Abteilungsassistentin",
    },
    {
      image: "/ourTeam/Stephanie_Lampoltshammer.jpeg",
      person: "Stephanie Lampoltshammer",
      description: "Abteilungsassistentin",
    },
  ];

  const whatsNewList = [
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2024/07/240715_ChemieBach_01-2048x1152.jpg",
      title: "Chemiekurs setzt Theorie in Praxis um",
      description:
        "Spannende Entdeckungen am Gölshäuser Dorfbach Mitte Juli begab sich die Jahrgangsstufe 1 der Beruflichen Schulen Bretten auf eine Exkursion zum Gölshäuser Dorfbach. Zwölf Schülerinnen und Schüler erlebten hautnah, wie spannend […]",
      time: "vor 2 Monaten",
    },
    {
      image:
        "https://bsb-bretten.de/wp-content/uploads/2024/07/080724_abifoto-2048x1024.jpeg",
      title: "Abiturfeier 2024",
      description: "„Habt den Mut, eure Träume zu verwirklichen.“",
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
          Berufliches Gymnasium
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
          Das berufliche Gymnasium der dreijährigen Aufbauform wird an den Beruflichen Schulen Bretten als Technisches Gymnasium mit den Fachrichtungen Informationstechnik, Technik und Management, Gestaltungs- und Medientechnik und als Sozial- und gesundheitswissenschaftliches Gymnasium mit der Fachrichtung Gesundheit und Biologie angeboten. 
          Das Berufliche Gymnasium bereitet naturwissenschaftlich-technisch, informationstechnisch und sozial- und gesundheitswissenschaftlich interessierte junge Menschen sowohl auf das Studium an einer Hochschule als auch in besonderer Weise auf die Berufswelt vor. 
        </Typography>
        <Divider
          sx={{ marginY: "2rem", color: "white", backgroundColor: "#cccccc" }}
        />
        
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "white", marginBottom: "1rem" }}
        >
          
          Information für unsere Schülerinnen und Schüler
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "white", marginBottom: "0.5rem" }}
        >
          <Link
            href="https://km.baden-wuerttemberg.de/de/service/publikation/did/leitfaden-fuer-die-gymnasiale-oberstufe-abitur-2025"
            color="primary"
            underline="hover"
          >
            Leitfaden für das Abitur 2025 
          </Link>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", marginBottom: "0.5rem" }}
        >
          <Link
            href="https://km.baden-wuerttemberg.de/fileadmin/redaktion/m-km/intern/PDF/Publikationen/Gymnasium/2023_Leitfaden_fuer_die_gymnasiale_Oberstufe_Abitur_2026.pdf"
            color="primary"
            underline="hover"
          >
            Leitfaden für das Abitur 2026
          </Link>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", marginBottom: "1rem" }}
        >
          <Link
            href="https://www.landesrecht-bw.de/bsbw/search"
            color="primary"
            underline="hover"
          >
            Abiturverordnung Berufliche Gymnasien gültig ab Abitur 2024  (BGVO – gültig ab 01.08.2021) 
          </Link>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "white", marginBottom: "1rem" }}
        >
          <Link
            href="https://www.landesrecht-bw.de/bsbw/document/jlr-FHSchulGymOStVBW2009rahmen"
            color="primary"
            underline="hover"
          >
            Verordnung des Kultusministeriums über den Erwerb der Fachhochschulreife
            in der gymnasialen Oberstufe
          </Link>
        </Typography>
      </Box>
        <WhatsNewComponent
          whatsNewList={whatsNewList}
          header="vom Beruflichen Gymnasium"
        />
        <OurTeamComponent teamList={vocationalSchoolTeamsList} />
      </Box>
    </>
  );
};

export default VocationalHighSchools;
