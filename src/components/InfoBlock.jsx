import React from 'react';
import Accuracy from './Accuracy';

function InfoBlock({countError, text}) {
    return (
        <div>
            <Accuracy countError = {countError} text = {text}> </Accuracy>
            

            
        </div>
    );
}

export default InfoBlock;