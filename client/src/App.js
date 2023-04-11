import { Route, Routes, useLocation } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import EditModal from "./components/modals/EditModal";
import CreateModal from "./components/modals/CreateModal";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Navbar pathname={pathname} />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects/:projectId?" element={<Detail />} />
      </Routes>
      <LoginModal />
      <RegisterModal />
      <EditModal />
      <CreateModal />
    </div>
  );
}

export default App;