import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import ComputerIcon from "@mui/icons-material/Computer";
import BookIcon from "@mui/icons-material/Book";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Card, CardContent, Grid2, Icon, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomepageTopicGrid = () => {
  const topicGrid = [
    { icon: <SchoolIcon fontSize="large" />, text: "Gewerbliche Berufsschule" },
    { icon: <WorkIcon fontSize="large" />, text: "Kaufmännische Berufsschule" },
    { icon: <HomeIcon fontSize="large" />, text: "Übergang Schule & Beruf" },
    {
      icon: <ComputerIcon fontSize="large" />,
      text: "Hauswirtschaftlich- sozialwissenschaftliche Schule",
    },
    { icon: <BookIcon fontSize="large" />, text: "Berufskolleg" },
    { icon: <PhoneIcon fontSize="large" />, text: "Berufliche Gymnasien" },
  ];

  const navigate = useNavigate();
  const handleCardClick = (text: string) => {
    switch (text) {
      case "Gewerbliche Berufsschule":
        navigate("/gewerbliche-berufsschule");
        break;
      case "Kaufmännische Berufsschule":
        navigate("/kaufmaennische-berufsschule");
        break;
      case "Übergang Schule & Beruf":
        navigate("/uebergang-schule-beruf");
        break;
      case "Hauswirtschaftlich- sozialwissenschaftliche Schule":
        navigate("/hauswirtschaft-sozialwissenschaft");
        break;
      case "Berufskolleg":
        navigate("/berufskolleg");
        break;
      case "Berufliche Gymnasien":
        navigate("/berufliche-gymnasien");
        break;
      default:
        navigate("/");
        break;
    }
  };

  return (
    <Box
      sx={{
        margin: "5%",
        marginTop: "2.5%",
      }}
    >
      <Grid2
        container
        spacing={2}
        columns={{ xs: 6, sm: 6, md: 6, lg: 6 }}
        justifyContent="center"
        alignItems="center"
      >
        {topicGrid.map((item, index) => (
          <Grid2 size={{ xs: 6, sm: 3, md: 2, lg: 1 }} key={index}>
            <Card
              onClick={() => handleCardClick(item.text)}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: 350,
                textAlign: "center",
                bgcolor: "#3c3c3c",
                borderRadius: "15px",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.6)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 1)",
                },
              }}
            >
              <CardContent>
                <Icon
                  sx={{
                    mb: 2,
                    color: "white",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {item.icon}
                </Icon>
                <Typography
                  sx={{ color: "white", fontSize: "22px" }}
                  variant="h6"
                >
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
export default HomepageTopicGrid;
