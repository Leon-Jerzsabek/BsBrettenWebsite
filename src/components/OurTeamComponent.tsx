import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
interface OurTeamComponentProps {
  teamList: { image: string; person: string; description: string }[];
}

const OurTeamComponent = ({ teamList }: OurTeamComponentProps) => {
  return (
    <Box sx={{ paddingTop: "3%", paddingBottom: "3%", padding: "5%" }}>
      <Typography
        sx={{
          fontSize: "50px",
          color: "black",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        Unser Team
      </Typography>
      <Divider
        sx={{
          bgcolor: "black",
          mt: 5,
          mb: 5,
          marginBottom: "4%",
        }}
      />
      <Grid2 container spacing={2} justifyContent="center">
        {teamList.map(
          (
            item: { image: string; person: string; description: string },
            index: number
          ) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  bgcolor: "#3c3c3c",
                  borderRadius: "20px",
                  boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.6)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.01)",
                    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.9)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  sx={{
                    width: "50%",
                    height: "50%",
                    borderRadius: "150px",
                    marginTop: "5%",
                    userSelect: "none",
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: "center",
                    padding: "15px",
                    height: "140px",
                    width: "100%",
                  }}
                >
                  <Divider
                    sx={{ bgcolor: "white", mt: 1, mb: 1, marginBottom: "4%" }}
                  />
                  <Typography sx={{ color: "white", fontSize: "150%" }}>
                    {item.person}
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "8px",
                      color: "white",
                      fontSize: "100%",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          )
        )}
      </Grid2>
    </Box>
  );
};

export default OurTeamComponent;
