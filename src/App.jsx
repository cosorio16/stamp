import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./views/Home";
import Client from "./views/Client";
import Stamps from "./views/Stamps";
import Profile from "./views/Profile";
import Register from "./views/business/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<Client />} />
        <Route path="/stamps" element={<Stamps />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
