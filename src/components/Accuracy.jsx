import { observer } from 'mobx-react-lite';
import React from 'react';
import store from '../store/store';

 const Accuracy = observer(() => {
    let countAccuracy = (100 - (100 / store.printText.length ) * store.countError).toFixed(1);

    return (
        <div className='accuracy'>
            <div>Точность</div>
            <span className='info-value'>{countAccuracy !== 'NaN' ? countAccuracy : '100.0'}</span>%
        </div>
    );
})

export default Accuracy;