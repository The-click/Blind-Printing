import { observer } from 'mobx-react-lite';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import infoStore from '../store/infoStore';
import ControlButtons from '../components/ControlButtons';

const StopScreen = observer(() => {
    const coverEl = useRef(null);
    
    useEffect(() => {coverEl.current.focus()}, []);

    function stopHandler(e){
        if (e.code !== 'Escape') return;
        infoStore.stopPrint();
        e.stopPropagation();
      }

    return (
        <div className='cover stop-screen' onKeyDown={stopHandler} ref={coverEl} tabIndex={0}>
            <span className='stop-screen__word'>пауза</span>
            <ControlButtons />   
        </div>
    );
})

export default StopScreen;