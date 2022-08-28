import { observer } from 'mobx-react-lite';
import React, {useEffect, useRef, useState } from 'react';
import infoStore from '../store/infoStore';

import store from '../store/store';

const InputTextForm = observer(() => {
    const [printText, setPrintText] = useState('');
    const textAreaEl = useRef();
    let text = store.fullText;

    useEffect(() => {
      if (infoStore.stopPrintedData.isStop){
        textAreaEl.current.blur();
      }else{
        textAreaEl.current.focus();
      }
    }, [infoStore.stopPrintedData.isStop]);
   
    function changeHandler(e){
        let inputText = e.target.value;

        e.target.scrollTop = e.target.scrollHeight;

        if (inputText.length - printText.length !== 1) return;
        
        if(text[inputText.length - 1] === inputText[inputText.length - 1]){
          setPrintText(inputText);
          store.changePrintText();
          e.target.style.setProperty('--length-progress', (550 * (inputText.length / text.length) - 550 ) + 'px');
        }else{
            if (!store.errorData.isError) {
                store.setErrorText(inputText.length - 1);
            }
        }
      }
    
      function stopPrint(e){
        if (e.code !== 'Escape' || store.countPrintedLetter === 0) return;
        infoStore.stopPrint();
      }
      
    return (
        <div className='input-wrap' onKeyDown={stopPrint}>
            <textarea autoFocus={true} 
                      onChange={changeHandler} 
                      value={printText} 
                      className={store.errorData.isError ? 'red input' : 'input'} 
                      ref={textAreaEl}
                      placeholder='Начните печатать текст...' >
            </textarea>    
        </div>
    );
})

export default InputTextForm;