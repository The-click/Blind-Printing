import React from 'react';
import loader from '../img/1490.gif';


function Loader() {
    return (
        <div className='preloader'>
            <img src={loader} alt="loader"></img>
        </div>
    );
}

export default Loader;