import { Route, Routes, useLocation } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import EditModal from "./components/modals/EditModal";
import CreateModal from "./components/modals/CreateModal";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Project from "./pages/Project";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Navbar pathname={pathname} />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:projectId" element={<Detail />} />
      </Routes>
      <Footer />
      <LoginModal />
      <RegisterModal />
      <EditModal />
      <CreateModal />
    </div>
  );
}

export default App;