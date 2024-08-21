import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import UpperBanner from "./components/UpperBanner";
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
                    <Route path="/upperbanner" element={<UpperBanner />} />
                    <Route path="/background" element={<Background />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return <h1>Welcome to the Home Page</h1>;
}

export default App;