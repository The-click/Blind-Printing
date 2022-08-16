import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import infoStore from '../store/infoStore';
import store from '../store/store';

const InputTextForm = observer(() => {
    const [printText, setPrintText] = useState('');
    const [isError, setIsError] = useState(false);    
    const [scrollInput, setScrollInput] = useState(0);
    let text = store.fullText;
   
    function changeHandler(e){
        if (store.isEnd){
          e.target.blur();
          return;}

        let printedText = e.target.value;
        let lenText = printedText.length;


        if ((e.target.scrollTop - scrollInput) > 10 ){
          e.target.scrollTop += 50;
          setScrollInput(e.target.scrollTop);
        }

        if (printedText.length - printText.length !== 1) return;

        if(text.substring(0, lenText) === printedText){
          if (isError) setIsError(false);
          setPrintText(printedText);
          store.changePrintText(lenText);
        }else{
            if (!isError) {
                infoStore.addCountError();
                setIsError(true);
                store.setErrorText(lenText - 1);
            }
        }

      }
      
    return (
        <div>
            <textarea onChange={changeHandler} value={printText} className={isError ? 'red input' : 'input'} placeholder='Начните печатать здесь текст...' >
            </textarea>    
        </div>
    );
})

export default InputTextForm;