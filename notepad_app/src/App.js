import Navbar from './components/Navbar';
import NotepadHome from './components/NotepadHome'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Register from './components/Register';
import {NotepadWriter} from './components/NotepadWriter';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route index exact path="/" element={<LandingPage />} />
          <Route index exact path="/notepad" element={<NotepadWriter />} />
          <Route index exact path="/query" element={<NotepadHome />} />
          <Route index exact path="/login" element={<Login />} />
          <Route index exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
