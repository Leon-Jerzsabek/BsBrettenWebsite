import { Box } from "@mui/material";
import HomepageTitle from "../components/Homepage/HomepageTitle";
import HomepageTopicGrid from "../components/Homepage/HomepageTopicGrid";
import WhatsNewComponent from "../components/WhatsNewComponent";
import OurTeamComponent from "../components/OurTeamComponent";
import GoogleMapsLink from "../components/Homepage/GoogleMapsLink";

const Homepage = () => {
  const ourTeamsList = [
    {
      image: "/ourTeam/Nicole_Roeder.jpeg",
      person: "Nicole Roeder",
      description: "Schulleiterin",
    },
    {
      image: "/ourTeam/Klaus_Martin_Foos.jpeg",
      person: "Klaus-Martin Foos",
      description: "Stellvertretender Schulleiter",
    },
    {
      image: "/ourTeam/Matthias_Kempf.jpeg",
      person: "Matthias Kempf",
      description: "Gewerbliche Schule",
    },
    {
      image: "/ourTeam/Sven_Hölig.jpeg",
      person: "Sven Hölig",
      description: "Kaufmännische Schule und Übergang Schule & Beruf",
    },
    {
      image: "/ourTeam/Christian_Odenwald.jpeg",
      person: "Christian Odenwald",
      description: "Hauswirtschaftliche Schule",
    },
    {
      image: "/ourTeam/Gerd_Heilig.jpeg",
      person: "Gerd Heilig",
      description: "Berufskolleg ",
    },
    {
      image: "/ourTeam/Andrea_Neumann.jpeg",
      person: "Andrea Neumann",
      description: "Berufliches Gymnasium",
    },
  ];

  const whatsNewList = [
    {
      image: "public/whatsNew/whats_new_1.jpeg",
      title: "Projekttag gegen Cybermobbing an den Beruflichen Schulen Bretten",
      description:
        " Eine hämische Beleidigung im Klassen-Chat oder heftige Hasskommentare auf Instagram oder WhatsApp: Cybermobbing entwickelt sich zu einem bedeutenden Problem. Das Verfolgen, Belästigen oder Bedrohen einer Person über digitale Kommunikationsmittel […]",
      time: "vor 1 Tag",
    },
    {
      image: "public/whatsNew/whats_new_2.jpg",
      title: "Jahrgangsstufe 2 auf Abschlussfahrt in der Hansestadt",
      description:
        "Hamburg - das Tor zur Welt. Nicht nur bei Touristen, auch bei Jugendlichen steht die Elb-Metropole in Sachen Reiseziel ganz oben auf der Liste. So machten sich Schülerinnen und […]",
      time: "vor 3 Tagen",
    },
    {
      image: "public/whatsNew/whats_new_3.jpg",
      title: "Brasilianische Kultur und Natur vor Ort erkundet",
      description:
        "Brasilien-Austausch: Vom weißen Strand über Wasserfälle zum Oktoberfest Vom 18. bis zum 30. Oktober 2024 hatten zehn deutsche und zehn brasilianische Schüler die Gelegenheit, an einem kulturellen Austausch teilzunehmen. Die […]",
      time: "vor 4 Tagen",
    },
    {
      image: "public/whatsNew/whats_new_4.jpg",
      title: "Schülerpraktikum in Dublin: Ein unvergessliches Erlebnis",
      description:
        "We love Dublin Vom 29. September bis zum 18. Oktober 2024 durften 17 Schülerinnen und Schüler der FTM1, der kaufmännischen Berufsschule und des Berufskollegs Fremdsprachen ein spannendes dreiwöchiges Praktikum in […]",
      time: "vor 6 Tagen",
    },
    {
      image: "public/whatsNew/whats_new_5.jpg",
      title: "Solarenergie und Umweltschutz à la française",
      description:
        "Jahrgangsstufe 1 reist mit TGV nach Montebeliard Im Oktober waren 15 Schüler der 12. Klasse gemeinsam mit Frau Traxel und Frau Stier in Montbéliard, Frankreich für ein Umweltprojekt. Vom Karlsruher […]",
      time: "vor 1 Woche",
    },
    {
      image: "public/whatsNew/whats_new_6.jpg",
      title: "Junger Ukrainer möchte Fachinformatiker werden",
      description:
        "Erstmals FSJ digital an den Beruflichen Schulen Bretten Begeistert berichtet Miroslav Bubnov von seinem Bildungsweg im Beruflichen Bildungssystem Baden-Württembergs. Im März 2022 war der junge Mann aus der Ukraine nach […]",
      time: "vor 2 Wochen",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <HomepageTitle />
      <HomepageTopicGrid />
      <WhatsNewComponent whatsNewList={whatsNewList} header="BSB" />
      <OurTeamComponent teamList={ourTeamsList} />
      <GoogleMapsLink />
    </Box>
  );
};

export default Homepage;
