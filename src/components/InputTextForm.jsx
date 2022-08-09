import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import store from '../store/store';
import { wrapSpanText } from '../utils/wrapSpanText';

const InputTextForm = observer(() => {
    const [printText, setPrintText] = useState('');
    const [isError, setIsError] = useState(false);    
    const [scrollInput, setScrollInput] = useState(0);
    let text = store.fullText;
   
    function changeHandler(e){
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
                store.addCountError();
                setIsError(true);
                store.setErrorText(lenText - 1);
            }
        }

      }
      
    return (
        <div>
            <textarea onChange={changeHandler} value={printText} className={isError ? 'red input' : 'input'} >
            </textarea>    
        </div>
    );
})

export default InputTextForm;