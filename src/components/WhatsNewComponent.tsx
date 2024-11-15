import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";

interface WhatsNewComponentProps {
  whatsNewList: {
    image: string;
    title: string;
    description: string;
    time: string;
  }[];
  header: string;
}

const WhatsNewComponent = ({
  whatsNewList,
  header,
}: WhatsNewComponentProps) => {
  return (
    <Box
      sx={{
        bgcolor: "#3c3c3c",
        padding: "5%",
        paddingTop: "3%",
      }}
    >
      <Typography
        sx={{
          fontSize: "50px",
          color: "white",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        Was gibt's neues?
      </Typography>
      <Typography
        sx={{
          fontSize: "35px",
          color: "white",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        Von {header}
      </Typography>
      <Divider sx={{ bgcolor: "white", mt: 5, mb: 5, marginBottom: "4%" }} />
      <Grid2 container spacing={3} justifyContent="center" alignItems="center">
        {whatsNewList.map((item, index) => (
          <Grid2
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            key={index}
            container
            justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                position: "relative",
                padding: 2,
                bgcolor: "#f5f5f5",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.6)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.7)",
                },
                width: {
                  xs: "100%",
                  sm: "85%",
                  md: "75%",
                  lg: "70%",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "#00000080",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "5px",
                  fontSize: "12px",
                  userSelect: "none",
                }}
              >
                {item.time}
              </Box>

              <Box
                component="img"
                src={item.image}
                sx={{
                  width: 170,
                  height: 120,
                  borderRadius: "15px",
                  marginRight: 2,
                  display: { xs: "none", md: "block" },
                }}
              />
              <CardContent>
                <Typography
                  sx={{ userSelect: "none" }}
                  variant="h5"
                  component="div"
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ userSelect: "none" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default WhatsNewComponent;
