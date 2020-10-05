import React from 'react';
import logo from '../Resource/logos/lg.png'

const Logo = () => {
    const lgStyle = {
        margin: '30px auto',
        width: '400px',
        height: '100px'
    }
    return (
        <div>
            <img style={lgStyle} src={logo} alt=""/>
        </div>
    );
};

export default Logo;