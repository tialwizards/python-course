import React from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <>
              
    
        <div className="container">

        <div className="hero text-center">
        <h1 style={{color: '#fff'}}>Welcome to Python World!</h1>
                <p style={{color: '#fff'}}>A place to learn Python and enhance your skills.<br/>Join thousands of learners who are mastering Python with TIAL WIZARDS.</p>
                <div className="social-icons">
                    <a href="https://facebook.com/TIALWIZARDS" target="_blank" rel="noreferrer" title='facebook'><i className="fa fa-facebook-f"></i></a>
                    <a href="https://twitter.com/TIALWIZARDS" target="_blank" rel="noreferrer" title='twitter'><i className="fa fa-twitter"></i></a>
                    <a href="https://www.instagram.com/TIALWIZARDS" target="_blank" rel="noreferrer" title='instagram'><i className="fa fa-instagram"></i></a>
                </div><br/>
                <a href="/python-course/#/courses/python-overview#overview" className="btn btn-primary btn-lg">Start Now</a>
        </div>

        <h2 className="mt-5 text-center">Why Choose Python?</h2>
        <div className="row text-center">
            <div className="col-md-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">Easy to Learn</h5>
                        <p className="card-text">Python's simple syntax makes it perfect for all the beginners</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">Versatile Applications</h5>
                        <p className="card-text">From web development to data science, Python is everywhere</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">Strong Community Support</h5>
                        <p className="card-text">Join a vibrant community and find endless resources</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    
    );
};

export default Home;
