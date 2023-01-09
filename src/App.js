import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/Mui/theme";

import Template from "./routes/template/template.routes";
import Pictures from "./routes/pictures/pictures.routes";
import Picture from "./components/picture/picture.component";
import Videos from "./routes/videos/videos.routes";
import Navigation from "./components/navigation/navigate.component";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Template>
        <Navigation />
        <Routes>
          <Route path="/" element={<Pictures />}>
            <Route path="/photo/:photoid" element={<Picture />} />
          </Route>
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </Template>
    </ThemeProvider>
  );
};

export default App;
