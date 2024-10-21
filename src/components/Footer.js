import React from 'react';

const Footer = () => {
    return (
        <p style={{
            textAlign: 'center',
            color: '#333333',
            marginBottom: '10px',
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <b>
                Copyright &#169; 2018 &#8211; {new Date().getFullYear()} 
                <a href='https://www.tialwizards.in' style={{ color: 'blue' }}> TIAL WIZARDS</a> All Rights Reserved.
            </b>
        </p>
    );
};

export default Footer;
