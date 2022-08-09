
import { useEffect, useState } from 'react';
import './App.css';
import InfoBlock from './components/InfoBlock';
import { observer } from "mobx-react-lite" 
import store from './store/store';
import InputTextForm from './components/InputTextForm';
import { getTextService } from './API/GetTextService';
import { wrapSpanText } from './utils/wrapSpanText';

 const App = observer(() =>  {
  let printText = store.printText;


  useEffect( () => {
    async function setNewText(){
      let data = await getTextService();
      store.setNewText(data);
      store.setPrintText(wrapSpanText())
    }
  setNewText();
  }, []);



  return (
    <div className="App">
      <div className='main'>
      <div className='container__text' style={{}}>
        {printText}
      </div>
      <InputTextForm></InputTextForm>

      </div>
      <InfoBlock   />
   
    </div>
  );
})

export default App;



























// import { useEffect, useState } from 'react';
// import './App.css';
// import { getTextService } from './API/GetTextService';
// import InfoBlock from './components/InfoBlock';
// import { observer } from "mobx-react-lite" 
// import store from './store/store';

//  const App = observer(() =>  {
//   const [printText, setprintText] = useState('');
//   const [isError, setisError] = useState(false);
//   const [counterSpeed, setCounterSpeed] = useState(0);
//   let text = store.text;

//   const [showText, setShowText] = useState(wrapSpanText());
//   const [scrollInput, setScrollInput] = useState(0);


//   useEffect( () => {
//     store.getNewText()
//   }, []);

//   useEffect(() => {
//     if (counterSpeed > 0){
//       let timerId = setTimeout(function tick(){
//         let allTime = (new Date() - counterSpeed) / 60000 ;
//         console.log(printText.length / allTime);
//         // console.log(printText.length)
//         timerId = setTimeout(tick, 1000)

//       }, 1000)

//     }
//   }, [counterSpeed])
//   function changeHandler(e){
//     let printedText = e.target.value;
//     let lenText = printedText.length;

//     if ((e.target.scrollTop - scrollInput) > 10 ){
//       e.target.scrollTop += 50;
//       setScrollInput(e.target.scrollTop);
//     }
    
//     let newShowText;
//     if(text.substring(0, lenText) === printedText){
//       if (lenText === 1) setCounterSpeed(+new Date())
//       if (isError) setisError(false);
//       setprintText(e.target.value);
//       newShowText = wrapSpanText(lenText);
//     }else{
//       newShowText = showText;
//       newShowText[lenText - 1] = (<span className='error'>{text[lenText - 1]}</span>);
//       if (!isError) {
//         store.addCountError();
//         setisError(true)}
//     }
//     setShowText(newShowText);
//   }

//   function wrapSpanText(lenText = printText.length){
//     return text.split('').map((el, i) => {
//       let classElement = '';
//       if (i < lenText){
//         classElement = 'letter__printed';
//       }
//       if ((i === lenText)){
//         classElement = 'letter__green';
//       }
//       return (<span className={classElement}>{el}</span>)})
//   }
 

//   return (
//     <div className="App">
//       <div className='container__text' style={{}}>
//         {showText}
//       </div>
//       <textarea onChange={changeHandler} value={printText} className={isError ? 'red input' : 'input'} >

//       </textarea>
//       <InfoBlock  countError={0} text={text} />
   
//     </div>
//   );
// })

// export default App;
