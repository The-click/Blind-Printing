import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import infoStore from '../store/infoStore';
import store from '../store/store';
import { useNavigate} from 'react-router-dom';
import Loader from '../utils/Loader';

const FinalScreen = observer(()  => {
    let navigate = useNavigate();

    useEffect(() => {
        if (!store.isEnd){
            navigate('/start');
        }

    }, [])

    if (infoStore.speedPrint === 0){
        return <Loader></Loader>
    }

    return (
        <div className='cover'>
            <div className='final-block'>
                <span>Отлично!</span>
                <span>Cкорость: <span className='info-value'>{infoStore.speedPrint}</span> зн./мин</span>
                <span>Точность: <span className='info-value'>{infoStore.accuracy}</span>%</span>
                <span>Количество символов: <span className='info-value'>{store.countPrintedLetter}</span></span>

                <button className='control-button' onClick={() => navigate('/start')}>Повторить</button>
            </div>
            
        </div>
    );
})

export default FinalScreen