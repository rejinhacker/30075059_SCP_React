import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Removed 'Link' import
import Home from "./components/Home";  
import SCP2 from "./components/SCP2";
import SCP3 from "./components/SCP3";
import SCP4 from "./components/SCP4";
import SCP5 from "./components/SCP5";
import SCP6 from "./components/SCP6";
import Navbar from "./components/Navbar"; 
import "./App.css";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = (isOpen) => {
        setMenuOpen(isOpen === undefined ? !menuOpen : isOpen);
    };

    return (
        <Router>
            <div className="App">
                <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/scp2" element={<SCP2 />} />
                        <Route path="/scp3" element={<SCP3 />} />
                        <Route path="/scp4" element={<SCP4 />} />
                        <Route path="/scp5" element={<SCP5 />} />
                        <Route path="/scp6" element={<SCP6 />} />
                    </Routes>
                </main>
                <footer className="footer">
                    <p>&copy; 2024 SCP Foundation</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
