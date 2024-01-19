import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandLayout from "./components/landing/Layout/LandLayout";
import Login from "./components/client/Login";
import Register from "./components/client/Register";
import ForgotPassword from "./components/client/ForgotPassword";
import ResetPassword from "./components/client/ResetPassword";
import DashBoard from "./components/core/Dashboard/DashBoard";
import Campaign from "./components/core/Campaign/Campaign";
import Template from "./components/core/Template/Template";
import Service from "./components/core/service/Service";
import Settings from "./components/core/settings/Settings";
import Recipients from "./components/core/Recipients/Recipients";
import AddRecipient from "./components/core/Recipients/AddRecipient";
import EditRecipient from "./components/core/Recipients/EditRecipient";
import AddTemplate from "./components/core/Template/AddTemplate";
import PrivateRoutes from "./components/client/auth/PrivateRoutes";
import ProfileEdit from "./components/core/settings/ProfileEdit";
import SentHistory from "./components/core/sent/SentHistory";
import EditTemplate from "./components/core/Template/EditTemplate";
import ViewMail from "./components/core/sent/ViewMail";
import Contact from "./components/core/service/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<DashBoard />} />

          <Route path="/recipients" element={<Recipients />} />
          <Route path="/add-recipient" element={<AddRecipient />} />
          <Route path="/update-recipient/:recipientId" element={<EditRecipient />} />

          <Route path="/campaign" element={<Campaign />} />
          <Route path="/sent" element={<SentHistory />} />
          <Route path="/view-mail/:mailId" element={<ViewMail />} />

          <Route path="/template" element={<Template />} />
          <Route path="/add-template" element={<AddTemplate />} />
          <Route path="/update-template/:templateId" element={<EditTemplate />} />

          <Route path="/settings" element={<Settings />} />
          <Route path="/edit-profile" element={<ProfileEdit />} />

          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
