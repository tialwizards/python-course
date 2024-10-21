import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HashRouter  as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Accordion from './components/Accordion';
import Content from './data/Introduction';
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Footer from './components/Footer';
import './App.css'; // Import your CSS file

const App = () => {
    const location = useLocation();

    // List of routes where only the navbar and content should be shown
    const navbarOnlyRoutes = ['/contact']; // Add your routes here

    return (
        <div>
            <Navbar /> {/* Fixed Navbar */}
            {navbarOnlyRoutes.includes(location.pathname) ? (
                <div className="content">
                    <Routes>
                        <Route path="/contact" element={<Contact />} />
                        {/* 404 Route */}
                        <Route path="*" element={<NotFound />} />
                        {/* Add more routes as needed */}
                    </Routes>
                </div>
            ) : (
                <div className="container">
                    <div className="sidebar">
                        <Accordion />
                    </div>
                    <div className="content">
                        <Routes>
                            {/* Redirect from '/' to '/python-course' */}
                            <Route path="/" element={<Navigate to="/python-course" />} />
                            <Route path="/python-course" element={<Home/>} />
                            <Route path="/courses/:topic" element={<Content />} />
                            {/* 404 Route */}
                            <Route path="*" element={<NotFound />} />
                            {/* Add more routes here that should show the sidebar */}
                        </Routes>

                    </div>

                </div>
            )}
                                <Footer />
        </div>
    );
};

// Wrap your App component in the Router at a higher level
const Root = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default Root;
