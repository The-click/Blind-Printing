import { observer } from 'mobx-react-lite';
import React from 'react';
import infoStore from '../store/infoStore';
import store from '../store/store';

const ControlButtons = observer((props) => {

    function stoPrintHandler(){
      if (store.countPrintedLetter > 0) infoStore.stopPrint();
      }

      function restartHandler(){
        window.location.reload();
      }
    return (
        <div className='control-buttons'>
            <button className='control-button' onClick={stoPrintHandler}>{infoStore.stopPrintedData.isStop ?  'продолжить' : 'пауза'}</button>
            <button className='control-button' onClick={restartHandler}>заново</button>

        </div>
    );
})

export default ControlButtons;