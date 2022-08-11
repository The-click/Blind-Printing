import { observer } from 'mobx-react-lite';
import React from 'react';
import infoStore from '../store/infoStore';
import store from '../store/store';

const FinalScreen = observer(()  => {
    function clickHandler(){
        window.location.reload();
    }

    return (
        <div className='cover'>
            <div className='final-block'>
                <span>Отлично!</span>
                <span>Cкорость: <span className='info-value'>{infoStore.speedPrint}</span> зн./мин</span>
                <span>Точность: <span className='info-value'>{infoStore.accuracy}</span>%</span>
                <span>Количество символов: <span className='info-value'>{store.countPrintedLetter}</span></span>

                <button className='control-button' onClick={clickHandler}>Повторить</button>
            </div>
            
        </div>
    );
})

export default FinalScreen