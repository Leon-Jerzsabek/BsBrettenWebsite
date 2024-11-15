import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import VocationalSchool from "./pages/VocationalSchool";
import BusinessSchool from "./pages/BusinessSchool";
import CrossoverSchool from "./pages/CrossoverSchool";
import HomeEconomicsSocialScienceSchool from "./pages/HomeEconomicsSocialScienceSchool";
import VocationalCollege from "./pages/VocationalCollege";
import VocationalHighSchools from "./pages/VocationalHighSchools";
import LegalNoticeFooter from "./components/LegalNoticeFooter";

function App() {
  const MainPage = () => {
    return <Homepage />;
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* use 'useParams()' to get parameters from url in page*/}
          {/* Example for to a page with a button using Link from "react-router-dom":
              <Link to={`/admin/language/${language_name}/${language_id}`}>
                  <Button>
                      Go to Language with ID {language_id}
                  </Button>
              </Link>

            Example for routing to a page programmatically:
              const navigation = useNavigate();
              function handleClick() {
                navigation(`/admin/language/${language_name}/${language_id}`);
              }

            Example for getting parameters in variable page:
              const { language_id, language_name } = useParams();
              <Typography>ID: {language_id} Name: {language_name}</Typography>
        */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path={"/"} element={<MainPage />} />
          <Route
            path="/gewerbliche-berufsschule"
            element={<VocationalSchool />}
          />
          <Route
            path="/kaufmaennische-berufsschule"
            element={<BusinessSchool />}
          />
          <Route path="/uebergang-schule-beruf" element={<CrossoverSchool />} />
          <Route
            path="/hauswirtschaft-sozialwissenschaft"
            element={<HomeEconomicsSocialScienceSchool />}
          />
          <Route path="/berufskolleg" element={<VocationalCollege />} />
          <Route
            path="/berufliche-gymnasien"
            element={<VocationalHighSchools />}
          />
        </Routes>
        <LegalNoticeFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
