import React from 'react';
import ControlButtons from './ControlButtons';

function StopScreen(props) {

    return (
        <div className='cover stop-screen' >
            <span className='stop-screen__word'>пауза</span>
            <ControlButtons />

            
        </div>
    );
}

export default StopScreen;