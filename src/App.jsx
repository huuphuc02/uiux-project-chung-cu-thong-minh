import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageResident from "./pages/resident/HomePage";
import HomePageAdmin from "./pages/administrator/HomePage";
import HomePageManager from "./pages/manager/HomePage";
import BuildingInfor from "./pages/resident/BuildingInfor";
import Apartment from "./pages/resident/ApartmentInfor";
import ResidentInfor from "./pages/resident/ResidentInfor";
import ForgotPassword from "./pages/ForgotPassword";
import ResidenceAbsence from "./pages/resident/ResidenceAbsence/ResidenceAbsence";
import Residence from "./pages/resident/ResidenceAbsence/Residence";
import Absence from "./pages/resident/ResidenceAbsence/Absence";
import FeesList from "./pages/resident/Fee/FeesList";
import PayFee from "./pages/resident/Fee/PayFee";
import PaymentResult from "./pages/resident/Fee/PaymentResult";
import FeePaymentHistory from "./pages/resident/Fee/FeePaymentHistory";
import SendNotifications from "./pages/administrator/SendNotifications";
import Statistics from "./pages/administrator/Statistics";
import Setting from "./pages/administrator/Setting";
import ResidentStatistics from "./pages/administrator/ResidentStatistics";
import SendNotificationsSuccess from "./pages/administrator/SendNotificationsSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepageResident" element={<HomePageResident />} />
        <Route path="/homepageAdmin" element={<HomePageAdmin />} />
        <Route path="/sendNotifications" element={<SendNotifications />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/setting" element={<Setting />} />
        <Route
          path="/sendNotificationsSuccess"
          element={<SendNotificationsSuccess />}
        />
        <Route path="/homepageManager" element={<HomePageManager />} />
        <Route path="/residentStatistics" element={<ResidentStatistics />} />
        <Route path="/buildingInfo" element={<BuildingInfor />} />
        <Route path="/apartmentInfo" element={<Apartment />} />
        <Route path="/residentInfo" element={<ResidentInfor />} />
        <Route path="/residenceAbsence" element={<ResidenceAbsence />} />
        <Route path="/residence" element={<Residence />} />
        <Route path="/absence" element={<Absence />} />
        <Route path="/listofFees" element={<FeesList />} />
        <Route path="/payFee" element={<PayFee />} />
        <Route path="/paymentResult" element={<PaymentResult />} />
        <Route path="/history" element={<FeePaymentHistory />} />
        <Route path="/resetpw" element={<ForgotPassword />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
