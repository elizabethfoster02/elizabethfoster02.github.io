import "./App.css";
import Home from "./pages/home";
import Resume from "./pages/resume";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ResponsiveAppBar from "./NavBar";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        // light: "#757ce8",
        main: "#AAAE7F",
        // dark: "#002884",
        // contrastText: "#fff",
      },
      secondary: {
        // light: "#ff7961",
        main: "#D0D6B3",
        // dark: "#ba000d",
        // contrastText: "#000",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <ResponsiveAppBar></ResponsiveAppBar>

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Resume" element={<Resume />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
