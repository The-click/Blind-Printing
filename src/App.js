
import { useEffect} from 'react';
import './App.css';
import InfoBlock from './components/InfoBlocks/InfoBlock';
import { observer } from "mobx-react-lite" 
import store from './store/store';
import InputTextForm from './components/InputTextForm';
import { getTextService } from './API/GetTextService';
import { wrapSpanText } from './utils/wrapSpanText';
import ControlButtons from './components/ControlButtons';
import StopScreen from './components/StopScreen';
import Loader from './utils/Loader';
import infoStore from './store/infoStore';
import FinalScreen from './components/FinalScreen';

 const App = observer(() =>  {
  let printText = store.printText;


  useEffect( () => {
    async function setNewText(){
      let data = await getTextService();
      store.setNewText(data);
      store.setPrintText(wrapSpanText());
    }
   
  setNewText();
  }, []);

  function stopHandler(e){
    if (e.code !== 'Escape' || store.countPrintedLetter === 0) return;
    e.target.blur();
    infoStore.stopPrint();
  }


  if (store.printText.length === 0){
    return (<Loader></Loader>)
  }

  if (store.isEnd){
    return (<FinalScreen></FinalScreen>)
  }

  return (
    <div className="App" onKeyDown={stopHandler}>
      {infoStore.stopPrintedData.isStop && <StopScreen></StopScreen>}

      <div className='main'>
      {store.countPrintedLetter === 0 && <span className='tooltip'>Для паузы можно нажать "Esc"</span>}
   
      <div className='container__text' style={{}}>
        {printText}
      </div>
      <InputTextForm></InputTextForm>

      </div>
       <div className='right__block'>
        <InfoBlock   />
       <ControlButtons />

       </div>
      
    </div>
  );
})

export default App;

