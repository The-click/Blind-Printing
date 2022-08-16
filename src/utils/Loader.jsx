import React from 'react';
import loader from '../img/1490.gif';


function Loader() {
    return (
        <div className='preloader'>
           <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;