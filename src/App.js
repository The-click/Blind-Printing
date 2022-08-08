
import { useState } from 'react';
import './App.css';

function App() {
  const [tapingText, setTapingText] = useState('');
  const [text, setText] = useState("Tail dolor nisi, culpa proident in turducken ea pork chop adipisicing.  Sint boudin ut burgdoggen sausage deserunt eu beef ribs.  Enim aliqua ullamco quis.  Eu bacon chicken boudin, sunt in kevin ut pariatur excepteur.  Salami cupidatat ad, rump pork belly filet mignon pork loin spare ribs proident velit esse strip steak buffalo boudin.  Ex ad eiusmod, cupidatat pariatur incididunt hamburger.");
  // const [text, setText] = useState("Tail dolor nisi, culpa proident in turducken ea pork chop adipisicing.  Sint boudin ut burgdoggen sausage deserunt eu beef ribs.  Enim aliqua ullamco quis.  Eu bacon chicken boudin, sunt in kevin ut pariatur excepteur.  Salami cupidatat ad, rump pork belly filet mignon pork loin spare ribs proident velit esse strip steak buffalo boudin.  Ex ad eiusmod, cupidatat pariatur incididunt hamburger.")

  const [showText, setShowText] = useState(text.split('').map((el, i) => {
    if (i === 0){
      return (<span className='letter__green'>{el}</span>)
    }else{
      return (<span className='letter'>{el}</span>)
    }
  }));
  const [scrollInput, setScrollInput] = useState(0)
  const [isErorr, setIsErorr] = useState(false);
  function changeHandler(e){
    console.log(scrollInput);
    if ((e.target.scrollTop - scrollInput) > 10 ){
      e.target.scrollTop += 50;
      setScrollInput(e.target.scrollTop);
    }
    let printedText = e.target.value;
    let lenText = printedText.length;
    if(text.substring(0, lenText) === printedText){
      if (isErorr) setIsErorr(false);
      setTapingText(e.target.value);
      let newText = wrapSpanText(lenText);
      setShowText(newText) 
    }else{
      setIsErorr(true);
      setShowText(prevText => {
        prevText[lenText - 1] = (<span className='letter__green error'>{text[lenText - 1]}</span>)
        return prevText
    })
    }
  }
  function wrapSpanText(lenText = tapingText.length, isErorr = false){
    return text.split('').map((el, i) => {
      if (i < lenText){
        return (<span className='letter__print'>{el}</span>)
      }
      if (i === lenText){
        return (<span className='letter__green'>{el}</span>)
      }
      return (<span className='letter'>{el}</span>)})
  }
 

  return (
    <div className="App">
      <div className='container__text' style={{}}>
        {showText}
      </div>
      <textarea onChange={changeHandler} value={tapingText} className={isErorr ? 'red input' : 'input'} ></textarea>
   
    </div>
  );
}

export default App;
