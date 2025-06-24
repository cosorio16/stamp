import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./views/Home";
import Client from "./views/Client";
import Stamps from "./views/Stamps";
import Profile from "./views/Profile";
import Register from "./views/business/Register";
import Panel from "./views/business/Panel";
import ScanQR from './views/business/ScanQR'
import Business from "./views/business/Business";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<Client />} />
        <Route path="/stamps" element={<Stamps />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/scan" element={<ScanQR />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
