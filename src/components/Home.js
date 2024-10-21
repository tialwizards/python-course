import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <>
        <div className="hero text-center">
            <div className="container">
                <h1 style={{color: '#fff'}}>Welcome to Python World!</h1>
                <p style={{color: '#fff'}}>A place to learn Python and enhance your skills.</p>
                <div className="social-icons">
                    <Link to="https://facebook.com/TIALWIZARDS" target="_blank" title='facebook'><i className="fa fa-facebook-f"></i></Link>
                    <Link to="https://twitter.com/TIALWIZARDS" target="_blank" title='twitter'><i className="fa fa-twitter"></i></Link>
                    <Link to="https://www.instagram.com/TIALWIZARDS" target="_blank" title='instagram'><i className="fa fa-instagram"></i></Link>
                </div>
            </div>
        </div>
    
    
        <div className="container text-center my-5">
            <h2 className="mb-4">Get Started Today!</h2>
            <p>Join thousands of learners who are mastering Python with TIAL WIZARDS.</p>
            <Link to="/courses/python-overview#overview" className="btn btn-primary btn-lg">Start Now</Link>
        </div>
        </>
    
    );
};

export default Home;
