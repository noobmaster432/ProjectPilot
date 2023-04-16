import { Navigate, Route, Routes, useLocation } from "react-router-dom";

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
  const loginData=JSON.parse(localStorage.getItem('loginData'))
  {console.log(loginData)}
  return (
    <div className="App">
      <Toaster />
      <Navbar pathname={pathname} />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={loginData?<Home />:<Navigate to='/'/>} />
        <Route path="/profile/:profileId" element={loginData?<Profile />:<Navigate to='/'/>} />
        <Route path="/projects" element={loginData?<Project />:<Navigate to='/'/>} />
        <Route path="/projects/:projectId" element={loginData?<Detail />:<Navigate to='/'/>} />
        <Route path='*' element={<Navigate to ='/'/>}/>
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