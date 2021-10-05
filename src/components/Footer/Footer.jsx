import React from 'react';
import './Footer.css';


const Footer = (props) => {
    return (
        <div className='row row-space'>
            <div className='col-md-6' style={{padding: 0}}>
                <div className='footerbar bottom'>
                    <h1>@2021</h1>
                </div>
            </div>
            <div className='col-md-6' style={{padding: 0}}>
                <div className='footerbar bottom'>
                    <h1>My Library</h1>
                </div>
            </div>
        </div>
     );
}


export default Footer;