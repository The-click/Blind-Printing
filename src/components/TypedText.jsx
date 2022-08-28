import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo} from 'react';
import infoStore from '../store/infoStore';
import StopScreen from '../pages/StopScreen';
import store from '../store/store';
import InputTextForm from './InputTextForm';
import { useNavigate} from 'react-router-dom';
import { wrapSpanText } from '../utils/wrapSpanText';

const TypedText = observer(() => {
    const navigate = useNavigate();
    const countLetter = store.countPrintedLetter;
    const isError = store.errorData.isError;
    const fullText = store.fullText;
    const isEnd = store.isEnd;

    useEffect(() => {
        if (isEnd){
          navigate('/final');
        }
      }, [isEnd]);

    const printText = useMemo(() =>  wrapSpanText(fullText, countLetter, isError),
                              [fullText, countLetter, isError]);

    return (
        <>
            {infoStore.stopPrintedData.isStop && <StopScreen ></StopScreen>}

            <div className='main'>
                {store.countPrintedLetter === 0 && <span className='tooltip'>Для паузы можно нажать "Esc"</span>}

                <div className='container__text' >
                  {printText}
                </div>

                <InputTextForm ></InputTextForm>
            </div>
        </>
    );
});

export default TypedText;