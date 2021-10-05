import React from 'react';
import './Footer.css';


const Footer = (props) => {
    return (
        <div className='row row-space'>
            <div className='col-md-6' style={{padding: 0}}>
                <div className='footerbar bottom'>
                    <h4>@2021</h4>
                </div>
            </div>
            <div className='col-md-6' style={{padding: 0}}>
                <div className='footerbar bottom'>
                    <h4>My Library</h4>
                </div>
            </div>
        </div>
     );
}


export default Footer;