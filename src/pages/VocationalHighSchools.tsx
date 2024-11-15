import { Box, Divider, Typography } from "@mui/material";
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
        <Box sx={{ height: "1200px", bgcolor: "white" }}></Box>
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
