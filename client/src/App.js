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
import RegisterModal2 from "./components/modals/RegisterModal2";
import EditModalP from "./components/modals/EditModalP";
import { Toaster } from "react-hot-toast";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Toaster />
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
      <RegisterModal2 />
      <EditModal />
      <EditModalP />
      <CreateModal />
    </div>
  );
}

export default App;