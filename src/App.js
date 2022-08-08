
import { useEffect, useState } from 'react';
import './App.css';
import { getTextService } from './API/GetTextService';
import InfoBlock from './components/InfoBlock';

function App() {
  const [tapingText, setTapingText] = useState('');
  const [isErorr, setIsErorr] = useState(false);
  const [countError, setCountError ] = useState(0);
  const [counterSpeed, setCounterSpeed] = useState(0);

  const [text, setText] = useState("Tail dolor nisi, culpa proident in turducken ea pork chop adipisicing.  Sint boudin ut burgdoggen sausage deserunt eu beef ribs.  Enim aliqua ullamco quis.  Eu bacon chicken boudin, sunt in kevin ut pariatur excepteur.  Salami cupidatat ad, rump pork belly filet mignon pork loin spare ribs proident velit esse strip steak buffalo boudin.  Ex ad eiusmod, cupidatat pariatur incididunt hamburger.");
  const [showText, setShowText] = useState(wrapSpanText());
  const [scrollInput, setScrollInput] = useState(0);

  useEffect( () => {
      async function setNewText(){
        let data = await getTextService();
        setText(data);
        console.log(data);
      }
    setNewText();
  }, []);
  useEffect( () => {
    setShowText(wrapSpanText());
}, [text]);
  useEffect(() => {
    if (counterSpeed > 0){
      let timerId = setTimeout(function tick(){
        let allTime = (new Date() - counterSpeed) / 60000 ;
        console.log(tapingText.length / allTime);
        // console.log(tapingText.length)
        timerId = setTimeout(tick, 1000)

      }, 1000)

    }
  }, [counterSpeed])
  function changeHandler(e){
    let printedText = e.target.value;
    let lenText = printedText.length;

    if ((e.target.scrollTop - scrollInput) > 10 ){
      e.target.scrollTop += 50;
      setScrollInput(e.target.scrollTop);
    }
    
    let newShowText;
    if(text.substring(0, lenText) === printedText){
      if (lenText === 1) setCounterSpeed(+new Date())
      if (isErorr) setIsErorr(false);
      setTapingText(e.target.value);
      newShowText = wrapSpanText(lenText);
    }else{
      newShowText = showText;
      newShowText[lenText - 1] = (<span className='error'>{text[lenText - 1]}</span>);
      if (!isErorr) {
        setCountError(prev => prev + 1);
        
        setIsErorr(true)}
    }
    setShowText(newShowText);
  }

  function wrapSpanText(lenText = tapingText.length){
    return text.split('').map((el, i) => {
      let classElement = '';
      if (i < lenText){
        classElement = 'letter__printed';
      }
      if ((i === lenText)){
        classElement = 'letter__green';
      }
      return (<span className={classElement}>{el}</span>)})
  }
 

  return (
    <div className="App">
      <div className='container__text' style={{}}>
        {showText}
      </div>
      <textarea onChange={changeHandler} value={tapingText} className={isErorr ? 'red input' : 'input'} >

      </textarea>
      <InfoBlock  countError={countError} text={text} />
   
    </div>
  );
}

export default App;
