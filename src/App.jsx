import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageResident from "./pages/resident/HomePage";
import HomePageAdmin from "./pages/administrator/HomePage";
import HomePageManager from "./pages/manager/HomePage";
import BuildingInfor from "./pages/resident/BuildingInfor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepageResident" element={<HomePageResident />} />
        <Route path="/homepageAdmin" element={<HomePageAdmin />} />
        <Route path="/homepageManager" element={<HomePageManager />} />
        <Route path="/buildingInfo" element={<BuildingInfor />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
