import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageResident from "./pages/resident/HomePage";
import HomePageManager from "./pages/manager/HomePage";
import BuildingInfor from "./pages/resident/BuildingInfor";
import SendNotifications from "./pages/administrator/SendNotifications";
import Statistics from "./pages/administrator/Statistics";
import Setting from "./pages/administrator/Setting";
import ResidentStatistics from "./pages/administrator/ResidentStatistics";
import SendNotificationsSuccess from "./pages/administrator/SendNotificationsSuccess";
import HomePageAdministrator from "./pages/administrator/HomePageAdministrator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepageResident" element={<HomePageResident />} />
        <Route path="/homepageAdmin" element={<HomePageAdministrator />} />
        <Route path="/sendNotifications" element={<SendNotifications />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/sendNotificationsSuccess" element={<SendNotificationsSuccess />} />
        <Route path="/homepageManager" element={<HomePageManager />} />
        <Route path="/residentStatistics" element={<ResidentStatistics />} />
        <Route path="/buildingInfo" element={<BuildingInfor />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
