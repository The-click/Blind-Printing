
import { useState } from 'react';
import './App.css';

function App() {
  const [tapingText, setTapingText] = useState('');
  const [text, setText] = useState('Lalo da da net net dlkfj lkj ldkjal kjdlfkj a;lkj ;ldakj ;lkj la;kj m l;akj ljk ;oj oaijd ada ;l lakdj ;lakjd lkjd alkjd lkj alkj ;lak j lkja l;kj  j j jj j jjjjjjjjjj ladkj ;lakjf l;kjf al;kjd l;kjkl;j;lkjl;k j  lakjdl; kjafl; kja;l kjd lkj')
  const [showText, setShowText] = useState(text.split('').map(el => (<span>{el}</span>)));
  const [isErorr, setIsErorr] = useState(false);
  function changeHandler(e){
    let printText = e.target.value;
    let lenText = printText.length
    if(text.substring(0, lenText) === printText){
      setIsErorr(false);
      setTapingText(e.target.value);
      setShowText(text.split('').map((el, i) => {
        if (i < lenText){
          return (<span className='green'>{el}</span>)

        }
        return (<span>{el}</span>)}))
      
     
    }else{
      setIsErorr(true)
      
    }

  }
 

  return (
    <div className="App">
      <div className='text'>
        {showText}
      </div>
      <input onChange={changeHandler} value={tapingText} className={isErorr ? 'red' : ''}></input>
   
    </div>
  );
}

export default App;
