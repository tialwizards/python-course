import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Accordion from './components/Accordion';
import Content from './data/Introduction';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import './App.css'; // Import your CSS file

const App = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const [selectedTopic, setSelectedTopic] = useState('');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isSidebarOpen) {
                closeSidebar();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    // List of routes where only the navbar and content should be shown
    const navbarOnlyRoutes = ['/contact'];

    const handleTopicClick = (topic) => {
        closeSidebar(); // Close the sidebar
        scrollToTop();  // Scroll to the top
        const formattedTopic = topic.toLowerCase().replace(/\s+/g, '-');
        setSelectedTopic(formattedTopic);
        // Scroll to top (optional)
        window.scrollTo(0, 0);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll effect
        });
    };

    return (
        <div>
            <Navbar /> {/* Fixed Navbar */}
            {navbarOnlyRoutes.includes(location.pathname) ? (
                <div className="content">
                    <Routes>
                        <Route path="/contact" element={<Contact />} />
                        {/* 404 Route */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            ) : (
                <div className="container">
                    {/* Menu Icon for Mobile */}
                    <div className="menu-icon" onClick={toggleSidebar}>
                        <span className="navbar-toggler-icon" />
                    </div>

                    {/* Sidebar */}
                    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
                        <Accordion onTopicClick={handleTopicClick} selectedTopic={selectedTopic}/>
                    </div>

                    {/* Main Content */}
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Navigate to="/python-course" />} />
                            <Route path="/python-course" element={<Home />} />
                            <Route path="/courses/:topic" element={<Content onClose={closeSidebar} />} />
                            {/* 404 Route */}
                            <Route path="*" element={<NotFound />} />
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
