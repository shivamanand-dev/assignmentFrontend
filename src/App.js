import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import "./App.css";
import Profile from "./pages/Profile";
import AllUser from "./pages/AllUser";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<AllUser />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
