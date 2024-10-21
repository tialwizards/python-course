import React from 'react';
import Accordion from './Accordion';

const Sidebar = () => {
    return (
        <div className="sidebar" style={{ overflowY: 'scroll', height: '100vh', marginTop: '56px' }}>
            <Accordion />
        </div>
    );
};

export default Sidebar;
