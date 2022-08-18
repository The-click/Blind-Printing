import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom/umd/react-router-dom.development';
import infoStore from '../store/infoStore';
import store from '../store/store';

const ControlButtons = observer((props) => {
  let navigate = useNavigate();

    function stoPrintHandler(){
      if (store.countPrintedLetter > 0) infoStore.stopPrint();
      }

      function restartHandler(){
        navigate('/start');
      }
    return (
        <div className='control-buttons'>
            <button className='control-button' onClick={stoPrintHandler}>{infoStore.stopPrintedData.isStop ?  'продолжить' : 'пауза'}</button>
            <button className='control-button' onClick={restartHandler}>заново</button>

        </div>
    );
})

export default ControlButtons;