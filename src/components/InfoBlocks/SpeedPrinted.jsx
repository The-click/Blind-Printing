import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useState } from 'react';
import infoStore from '../../store/infoStore';
import store from '../../store/store';

const SpeedPrinted = observer( () => {
    
    const [counterSpeed, setCounterSpeed] = useState(0);
    let countLetter = store.countPrintedLetter;

    useEffect(() => {
        if (countLetter === 1){
               let nowDate = +new Date();
               let timerId = setTimeout(function tick(){
                
                if (!infoStore.stopPrintedData.isStop){
                    let allTime = (new Date() - nowDate - infoStore.stopPrintedData.timeStop) / 60000;
                    let speed = Math.round(store.countPrintedLetter / allTime); 
                    setCounterSpeed(speed);
                }
                if(store.isEnd){  
                    clearTimeout(timerId);
                }else{
                    timerId = setTimeout(tick, 1000);
                }    
              }, 1000);
        }
      
    }, [countLetter]);

    useEffect(() => {
        infoStore.setSpeedPrint(counterSpeed);
    }, [counterSpeed]);

    return (
        <div className='speed'>
            <div>Скорость</div>
            <span className='info-value'> {counterSpeed}</span> зн./мин
        </div>
    );
})

export default SpeedPrinted;