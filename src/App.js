import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from "./components/Button";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import Background from "./components/Background";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/primary" element={<Button label="Primary Button" type="primary" />} />
                    <Route path="/secondary" element={<Button label="Secondary Button" type="secondary" />} />
                    <Route path="/navbar" element={<Navbar />} />
                    <Route path="/upperbanner" element={<HeroSection />} />
                    <Route path="/background" element={<Background />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Background />
        </>)
}

export default App;