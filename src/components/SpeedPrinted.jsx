import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useState } from 'react';
import store from '../store/store';

const SpeedPrinted = observer( () => {
    const [counterSpeed, setCounterSpeed] = useState(0);
    let countLetter = store.countPrintedLetter;
    let speedPrintedText = 0;

    useEffect(() => {
        if (countLetter === 1){
            let nowDate = +new Date();
            let timerId = setTimeout(function tick(){
                let allTime = (new Date() - nowDate) / 60000 ;
                setCounterSpeed(Math.round(store.countPrintedLetter / allTime));
                timerId = setTimeout(tick, 1000)
              }, 1000)
        }
    }, [countLetter])

    return (
        <div className='speed'>
            <div>Скорость</div>

            <span className='info-value'> {counterSpeed}</span> зн./мин
            
        </div>
    );
})

export default SpeedPrinted;