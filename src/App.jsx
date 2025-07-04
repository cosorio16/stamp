import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./views/Home";
import Client from "./views/Client";
import Stamps from "./views/Stamps";
import Profile from "./views/Profile";
import Register from "./views/business/Register";
import Panel from "./views/business/Panel";
import Scan from "./views/business/Scan";
import Business from "./views/business/Business";
import Users from "./views/business/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to={"/home"}>Ingresar</Link>
            </div>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/client" element={<Client />} />
        <Route path="/stamps" element={<Stamps />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/register" element={<Register />} />

        <Route path="/scan" element={<Scan />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/users" element={<Users />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
