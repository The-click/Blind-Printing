import { observer } from 'mobx-react-lite';
import React from 'react';
import infoStore from '../../store/infoStore';
import store from '../../store/store';

 const Accuracy = observer(() => {
    let countAccuracy = (100 - (100 / store.printText.length ) * infoStore.countError).toFixed(1);
    infoStore.setAccuracy(countAccuracy);
    

    return (
        <div className='accuracy'>
            <div>Точность</div>
            <span className='info-value'>{countAccuracy !== 'NaN' ? countAccuracy : '100.0'}</span>%
        </div>
    );
})

export default Accuracy;