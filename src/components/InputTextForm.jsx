import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import infoStore from '../store/infoStore';
import store from '../store/store';

const InputTextForm = observer(() => {
    const [printText, setPrintText] = useState('');
    const textAreaEl = useRef(null);
    const [isError, setIsError] = useState(false);    
    const [scrollInput, setScrollInput] = useState(0);
    let text = store.fullText;
    useEffect(() => {
      if (infoStore.stopPrintedData.isStop){
        textAreaEl.current.blur();
      }else{
        textAreaEl.current.focus();
      }
    }, [infoStore.stopPrintedData.isStop])
   
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
            <textarea autoFocus={true} 
                      onChange={changeHandler} 
                      value={printText} 
                      className={isError ? 'red input' : 'input'} 
                      ref={textAreaEl}
                      placeholder='Начните печатать текст...' >
            </textarea>    
        </div>
    );
})

export default InputTextForm;