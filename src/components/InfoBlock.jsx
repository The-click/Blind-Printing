import React from 'react';
import Accuracy from './Accuracy';
import SpeedPrinted from './SpeedPrinted';

function InfoBlock() {
    return (
        <div className='info-block'>
             <SpeedPrinted></SpeedPrinted>
            <Accuracy> </Accuracy>
           
            

            
        </div>
    );
}

export default InfoBlock;