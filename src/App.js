import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Details from "./components/Details";
function App() {
  return (
    <>
      <Header />;
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
