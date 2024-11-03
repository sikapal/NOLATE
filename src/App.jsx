import './App.css';
import Login from './pages/Login';
import { createContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Register2 from './pages/Register2';
import Register3 from './pages/Register3';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard  from './components/Dashboard';
import Membres from './pages/utilisateurs/Membres';
import RoleAdmin from './pages/utilisateurs/RoleAdmin';
import Barbillard from './pages/activites/Barbillard';
import FichePresence from './pages/activites/FichePresence';
import About from './pages/parametres/About';
import Parametres from './pages/parametres/parametres';
import UserProfile from './pages/parametres/UserProfile';
import AdminProfile from './pages/utilisateurs/AdminProfile';

const MyContext = createContext();

function App() {

  const values = {}; // Make sure `values` is defined

  return (
    <>
      <BrowserRouter>
       
        <MyContext.Provider value={values}>
           
          
          <Routes>
            
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register2" element={<Register2 />} />
            <Route path="/register3" element={<Register3 />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/members" element={<Membres/>} />
            <Route path="/admintable" element={<RoleAdmin/>} />
            <Route path="/barbillard" element={<Barbillard/>} />
            <Route path="/admintable" element={<RoleAdmin/>} />
            <Route path="/fichepresence" element={<FichePresence/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/parametres" element={<Parametres/>} />
            <Route path="/user-profile" element={<UserProfile/>} />
            <Route path="/admin-profile" element={<AdminProfile/>} />
            
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MyContext };
